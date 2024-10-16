import { expect } from "chai";
import { sum } from "../sumNums.js";
describe("testing sum of nums", function () {
    it("adding valid numbers", () => {
        expect(sum([1, 1])).to.equal(2);
    });
    it("adds string to nums", () => {
        expect(sum([1, "a"])).to.be.NaN;
    });
    it("adds negative numbers", () => {
        expect(sum([-1, -1])).to.equal(-2);
    });

    it("return 0 on empty array", () => {
        expect(sum([])).to.equal(0);
    });
    it("trows on invalid argument type", () => {
        expect(sum("gf")).to.be.NaN;
    });
    
});
