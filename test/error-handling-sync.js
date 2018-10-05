const assert = require("assert");

describe("Error Handling Basics in sync code", function() {

    it("Division by zero does not fail", function() {

        try {
            let x = 100 / 0;
            assert(x === Infinity);
        } catch (ex) {
            assert(false, "shell not fail");
        }

    });

});