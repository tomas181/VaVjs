const assert = require("assert");

describe("Error Handling in events (node.js#fs)", function() {

    const fs = require("fs");

    it("reading existing file", function(done) {

        const stream = fs.createReadStream(__filename);

        stream.on("data", (chunk) => {

        });
        stream.on("end", () => {
            done();
        });
        stream.on("error", (err) => {

        });
    });
    it.skip("nonexisting file is handled by ...", function(done) {

        try {
            const stream = fs.createReadStream(from);
            stream.on("data", (chunk) => {

            });
            stream.on("end", () => {

            });
            stream.on("error", (err) => {

            });

        } catch (err) {

        }
    });
    // TODO: try other variations,
    // a)  
    // b) throwing error in data event handler
    // c) incorrect file handle 
    // 		fs.createReadStream(null,{fh:999});
    // d) ....


});