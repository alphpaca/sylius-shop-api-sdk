import Client from "../fetch"

export default class BaseResource {
  public client: Client

  constructor(client: Client) {
    this.client = client
  }
}