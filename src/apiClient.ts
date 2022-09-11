import { stringify } from 'query-string';

export interface Config {
  baseUrl: string
  maxRetries: number
}

export type RequestMethod = "GET" | "POST" | "DELETE" | "PUT" | "PATCH"

const defaultConfig = {
  maxRetries: 3,
  baseUrl: "https://master.demo.sylius.com/api/v2/shop",
}

class Client {
  private config: Config

  constructor(config?: Config) {
    this.config = { ...defaultConfig, ...config }
  }

  async request(
    method: RequestMethod,
    path: string,
    params: Record<string, any> = {},
    payload: Record<string, any> = {},
    timeoutInSeconds: number = 10,
  ): Promise<unknown> {
    const fullPath = this.config.baseUrl + path + stringify(params, { arrayFormat: 'bracket' });

    for (let n = 0; n < this.config.maxRetries; n++) {
      let timeoutID;

      try {
        const controller: AbortController = new AbortController();

        timeoutID = setTimeout(() => {
          controller.abort();
        }, timeoutInSeconds * 1000);

        const response: Response = await fetch(
          fullPath,
          {
            method,
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload),
            signal: controller.signal
          },
        );

        clearTimeout(timeoutID);

        return response;
      } catch (error) {
        if (timeoutID) {
          clearTimeout(timeoutID);
        }
      }
    }

    throw new Error(
      `Request timed out (${this.config.maxRetries} tries, none finished within ${timeoutInSeconds} second(s)).`
    );
  }
}

export default Client
