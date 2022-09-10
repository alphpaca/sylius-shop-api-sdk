import baseConfig from "../config";

class TestService {
    public config: baseConfig;

    constructor (providedConfig: baseConfig) {
        this.config = providedConfig;
    }

    public async testMethod (endpoint: string): Promise<unknown> {
        console.log(endpoint);

        console.log(this.config)
        const url = `${this.config.API.url}${endpoint}`
        try {
            const resource = await fetch(url)
            const data = await resource.json();

            console.log(data);
            console.log(data.name)
            return data;

        } catch(error) {
            console.error(error)
        }
    }
}

export default TestService