import Sylius from '../../src/index'
import { describe, expect, isFirstRun, it } from "vitest"

describe("test1", () => {
    it("run test class", async () => {
        const SDK = new Sylius();

        await SDK.product.retrieve()
    })

})
