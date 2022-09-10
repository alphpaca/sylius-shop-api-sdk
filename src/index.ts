import Client from "./fetch"
import Product from "./resources/product"

class Sylius {
    private client: Client

    public product: Product;

    constructor() {
        this.client = new Client();

        this.product = new Product(this.client)
    }

}

export default Sylius