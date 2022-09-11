import Client from "../apiClient"

export default class BaseResource {
  public client: Client

  constructor(client: Client) {
    this.client = client
  }
}
