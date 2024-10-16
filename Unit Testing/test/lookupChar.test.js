import { lookupChar } from "../lookupChar.js";
import { expect } from "chai";

describe("lookupChar", function () {
    it("should return undefined on wrong first arg type", () => {
        expect(lookupChar(1, 1)).to.equal(undefined);
    });
    it("should return undefined on wrong second arg type", () => {
        expect(lookupChar("fd", 1.4)).to.equal(undefined);
    });
    it("should return undefined on wrong second arg type", () => {
        expect(lookupChar("fd", "fd")).to.equal(undefined);
    });
    it("returns error with invalid index", () => {
        expect(lookupChar("aa", 3)).to.equal("Incorrect index");
    });
    it("returns error with negative index", () => {
        expect(lookupChar("aa", -1)).to.equal("Incorrect index");
    });
    it("works for 0 index", () => {
        expect(lookupChar("abc", 0)).to.equal("a");
    });
    it("works for 1 index", () => {
        expect(lookupChar("abc", 1)).to.equal("b");
    });
    it("works for 2 index", () => {
        expect(lookupChar("abc", 2)).to.equal("c");
    });
});
