import { expect } from "chai";
import { isSymmetric } from "../isSymetric.js";

describe("isSymetric", function () {
    it("should return true with symetric array", () => {
        expect(isSymmetric(["a", "b", "b", "a"])).to.equal(true);
    });
    it("should return false with asymetric array of strings", () => {
        expect(isSymmetric(["a", "b", "b"])).to.equal(false);
    });
    it("should return false with asymetric array of numbers", () => {
        expect(isSymmetric([1, 2, 3, 4])).to.equal(false);
    });
    it("should return true with symmetric array of numbers", () => {
        expect(isSymmetric([1, 2, 2, 1])).to.equal(true);
    });
    it("should return false with wrong argument type", () => {
        expect(isSymmetric("s")).to.equal(false);
    });
    it("should return true with empty array", () => {
        expect(isSymmetric([])).to.equal(true);
    });
    it("should return true with array of single element", () => {
        expect(isSymmetric([1])).to.equal(true);
    });
    it("should return false with missing parameter", () => {
        expect(isSymmetric()).to.equal(false);
    });
});
