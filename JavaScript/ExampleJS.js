"use strict";
var em = require("./ExampleModule");
inlets = 1;
outlets = 1;
autowatch = 1;
function bang() {
    var theObject = new em.TheClass(42);
    post("theObject.getIndex(): " + theObject.getIndex() + "\n");
    post("The square of pi is " + em.square(Math.PI) + "\n");
    // Cast to <any> to assign properties to objects of type Global.
    var g = new Global("");
    g.newProperty = "I am new.";
    post("(<any>g).newProperty: " + g.newProperty + "\n");
}
function msg_float(v) {
    outlet(0, em.square(v));
}
function msg_int(v) {
    outlet(0, em.square(v));
}
// .ts files with this at the end become a script usable in a [js] or [jsui] object
var module = {};
module.exports = {};
