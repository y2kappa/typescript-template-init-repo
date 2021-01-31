import { hello } from "../src";
import { expect } from "chai";

describe("main()", () => {
    it("Should contain world", () => {
        expect(hello()).to.contain("world");
    });

    it("Addition", () => {
        expect(2).equals(2);
    });

    it("Multiplication", () => {
        expect(2 * 3).not.equals(5);
    });
});
