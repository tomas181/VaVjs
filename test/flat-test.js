const assert = require("assert");

describe("POC flat", function() {

   it("scenar 1", function() {
       let x = {
       	px: 10,
        a: 1
       };

       let y = Object.create(x);
       y.py = 20;
       y.a = 2;

       let z = Object.create(y);
       z.pz = 20;
       z.a = 3;

       function flat(o) {

       for(let  pr in o)
       	if(!o.hasOwnProperty(pr)){
       	  o[pr] = o[pr]; 
       	}

        return o;
       }

       let real = flat(z);
       assert(real.hasOwnProperty("px"));
       assert(real.hasOwnProperty("py"));
       assert(real.hasOwnProperty("pz"));
       assert(z === real);
       assert(real.px === 10);
       assert(real.py === 20);
       assert(real.pz === 20);
       assert(real.a === 3);
   });
});