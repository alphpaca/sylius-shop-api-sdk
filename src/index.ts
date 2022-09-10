import SyliusConfig, {baseConfig} from "./config"
import { fetch } from '../node_modules/cross-fetch';
import TestService from "./services/testService"

class Sylius {
    public config: SyliusConfig
    
    public test: TestService

    constructor(providedConfig?: baseConfig){
        this.config = new SyliusConfig(providedConfig)

        this.test = new TestService(this.config)
    }

}

export default Sylius