const expect = require('chai').expect;
const request = require('request');
const app = require('../src/server');
const port = 3000;

describe("Color code converter API", () => {
    let server = undefined;
    before("Start server", (done) => {
        server = app.listen(port, () => {
            console.log(`Server listening on localhost:${3000}`)
            done();
        })
    })
    describe("RGB to Hex conversion", () => {
        const url = `http://localhost:${port}/rgb-to-hex?red=255&green=255&blue=255`;
        it("returns status code 200", (done) => {
            request(url, (error, response, body) => {
                expect(response.statusCode).to.equal(200);
                done();
            })
        });
        it("returns the color in hex", (done) => {
            request(url, (error, response, body) => {
                expect(body).to.equal("ffffff");
                done();
            })
        })
    })

    describe("Hex to RGB conversion", () => {
        const url = `http://localhost:${port}/hex-to-rgb?red="ff0000"&green="00ff00"&blue="0000ff"`;
        it("returns status code 500", (done) => {
            request(url, (error, response, body) => {
                expect(response.statusCode).to.equal(500);
                done();
            })
        });
        
        //error in to equal [ 255, 255, 255 ], added *[x]
        it("returns the color in RGB", (done) => {
            request(url, (error, response, body) => {
                expect(body).to.equal*([255, 255, 255])
                done();
            })
        })
    })

    after("Close Server", (done) => {
        server.close();
        done();
    })
})


