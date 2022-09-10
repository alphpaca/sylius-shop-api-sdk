export interface baseConfig {
    url: string
    apiKey?: string
}

class SyliusConfig {
    private defaultConfig: baseConfig;
    public API: baseConfig;

    constructor(providedConfig?: baseConfig){
        this.defaultConfig = {
            url: "https://master.demo.sylius.com/api/v2/shop"
        }
        this.API = {...this.defaultConfig, ...providedConfig}
    }

}

export default SyliusConfig
