// just sample implementation
// for practice of coding styles
// not a real 'best' copyFile implementation
// FIXME: najdite bug, napiste test, spravte fix

const fs = require("fs");
const EventEmiter = require("events");

  function Copier_update(from, to){
    this.from = from;
    this.to = to;
    this.copy = function() {

        let wasErr;
        const stream = fs.createReadStream(this._from);

        fs.writeFileSync(this._to, "");

        stream.on("data", (chunk) => {
          try {

            fs.appendFileSync(this._to, chunk); 

          } catch (err) {
            wasErr = true;
            this.emit("error", err);
          }
        });
        stream.on("close", () => {
          !wasErr && this.emit("finish", {
            from: this._from,
            to: this._to
          });
        });
        stream.on("error", (err) => {
          this.emit("error", err);

        });
  };
}

Copier_update.prototype = Object.create(EventEmiter.prototype);
Copier_update.prototype.constructor = EventEmiter;

module.exports=Copier_update;