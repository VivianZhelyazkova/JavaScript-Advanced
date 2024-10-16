import { expect } from "chai";
import { isOddOrEven } from "../isOddOrEven.js";

describe("isOddOrEven", function () {
    it("should return even if the string length is even", () => {
        expect(isOddOrEven("even")).to.equal("even");
    });
    it("should return even if the string length is even", () => {
        expect(isOddOrEven("evenаа")).to.equal("even");
    });
    it("should return odd if the string length is odd", () => {
        expect(isOddOrEven("odd")).to.equal("odd");
    });
    it("should return odd if the string length is odd", () => {
        expect(isOddOrEven("oddаа")).to.equal("odd");
    });
    it("should return undefined if parameter is number", () => {
        expect(isOddOrEven(1)).to.equal(undefined);
    });
    it("should return undefined if parameter is array", () => {
        expect(isOddOrEven([])).to.equal(undefined);
    });

});
