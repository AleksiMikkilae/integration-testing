// TDD - Test Driven Development - Unit testing

const expect = require('chai').expect;
const converter = require('../src/converter');

describe("Color code converter", () => {
    describe("RGB to Hex conversion", () => {
        it("converts the basic colors", () => {
            const redHex = converter.rgbToHex(255, 0, 0);       // ff0000
            const greenHex = converter.rgbToHex(0, 255, 0);     // 00ff00
            const blueHex = converter.rgbToHex(0, 0, 255);      // 0000ff

            expect(redHex).to.equal("ff0000")
            expect(greenHex).to.equal("00ff00")
            expect(blueHex).to.equal("0000ff")
        })
    })
    describe("Hex to RGB conversion", () => {
        it("converts the basic colors", () => {
            const red = converter.hexToRGB("ff0000");        // 255 0 0
            const green = converter.hexToRGB("00ff00");      // 0 255 0
            const blue = converter.hexToRGB("0000ff");       // 0 0 255

            expect(red).to.deep.equal([255, 0, 0])
            expect(green).to.deep.equal([0, 255, 0])
            expect(blue).to.deep.equal([0, 0, 255])
        })
    })
    
})
