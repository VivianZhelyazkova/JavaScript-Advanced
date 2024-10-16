import { expect } from "chai";
import { mathEnforcer } from "../mathEnforcer.js";

describe("mathEnforcer", function(){
     
    describe("addFive", function(){
        it("adds 5 to 1", ()=>{
            expect(mathEnforcer.addFive(1)).to.be.closeTo(6,0.01);
        });
        it("adds 5 to 1.04", ()=>{
            expect(mathEnforcer.addFive(1.04)).to.be.closeTo(6.04,0.01);
        })
        it("adds 5 to -6", ()=>{
            expect(mathEnforcer.addFive(-6)).to.be.closeTo(-1,0.01);
        })
        it("returns undefined with wrong parameter type string", ()=>{
            expect(mathEnforcer.addFive("5")).to.equal(undefined);
        })
        it("returns undefined with wrong parameter type array", ()=>{
            expect(mathEnforcer.addFive([])).to.equal(undefined);
        })
    });

    describe("subtractTen", function(){
        it("subtract 10 from 100", ()=>{
            expect(mathEnforcer.subtractTen(100)).to.be.closeTo(90,0.01);
        });
        it("subtract 10 from 11.04", ()=>{
            expect(mathEnforcer.subtractTen(11.04)).to.be.closeTo(1.04,0.01);
        })
        it("subtract 10 from -11", ()=>{
            expect(mathEnforcer.subtractTen(-11)).to.be.closeTo(-21,0.01);
        })
        it("returns undefined with wrong parameter type string", ()=>{
            expect(mathEnforcer.subtractTen("5")).to.equal(undefined);
        })
        it("returns undefined with wrong parameter type array", ()=>{
            expect(mathEnforcer.subtractTen([])).to.equal(undefined);
        })
    });

    describe("sum", function(){
        it("adds 1 to 1", ()=>{
            expect(mathEnforcer.sum(1,1)).to.be.closeTo(2,0.01);
        });
        it("adds -1 to -1", ()=>{
            expect(mathEnforcer.sum(-1,-1)).to.be.closeTo(-2,0.01);
        });
        it("adds -1 to 1", ()=>{
            expect(mathEnforcer.sum(-1,1)).to.be.closeTo(0,0.01);
        });
        it("adds 1 to -2", ()=>{
            expect(mathEnforcer.sum(1,-2)).to.be.closeTo(-1,0.01);
        });
        it("adds -1.5 to 1.5", ()=>{
            expect(mathEnforcer.sum(-1.5,1.5)).to.be.closeTo(0,0.01);
        });
        it("adds 1,1 to 1,1", ()=>{
            expect(mathEnforcer.sum(1.1,1.1)).to.be.closeTo(2.2,0.01);
        })
        it("returns undefined with wrong first parameter type string", ()=>{
            expect(mathEnforcer.sum("5",1)).to.equal(undefined);
        })
        it("returns undefined with wrong second parameter type string", ()=>{
            expect(mathEnforcer.sum(1,"5")).to.equal(undefined);
        })
        it("returns undefined with wrong parameter type array", ()=>{
            expect(mathEnforcer.sum([])).to.equal(undefined);
        })
    });
})