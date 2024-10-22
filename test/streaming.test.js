import { expect } from "chai";
import {streamingServiceSelector} from "../streamingServiceSelector.js";

describe("glaven za judge", function () {
    describe("selectingContent", function () {
        it("throws on invalid genre", function () {
            const supportedGenres = ["Action", "Comedy", "Drama", "Thriller", "Horror", "Romance", "Sci-Fi"];
            expect(()=> {streamingServiceSelector.selectingContent("Movie","Netflix","Pesho")}).to.throw(Error, `We currently support these genres: ${supportedGenres.join(", ")}.`)
        })
        it("throws on invalid type", function () {
            expect(()=>{streamingServiceSelector.selectingContent("Movies","Netflix","Horror")}).to.throw(`We currently only support 'Movie' or 'TV Show' types.`)
        })
        it("returns correct movie", function () {
            expect(streamingServiceSelector.selectingContent("Movie","Netflix","Horror")).to.equal(`You can watch this Horror Movie on Netflix. Enjoy your Horror-filled experience!`)
        })

    });
    describe("availablePlatforms", function(){

    })
});
