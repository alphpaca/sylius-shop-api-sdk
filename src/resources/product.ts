
import BaseResource from "./base"

class ProductResource extends BaseResource {
    retrieve() {
        const path = '/products'
        return this.client.request("GET", path)
    }
}

export default ProductResource
