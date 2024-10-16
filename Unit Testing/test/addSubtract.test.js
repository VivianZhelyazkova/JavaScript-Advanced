import { expect } from "chai";
import { createCalculator } from "../addSubtract.js";

describe("createCalculator",function(){
    let calc; 
    beforeEach(function(){calc = createCalculator()});

    describe("add",function(){
        it("adds 1",()=>{
            calc.add(1);
            expect(calc.get()).to.equal(1);
        })
    });

    describe("subtract",function(){

    });

    describe("get",function(){

    });
})