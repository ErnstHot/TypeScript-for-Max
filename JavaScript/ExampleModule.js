"use strict";
exports.__esModule = true;
exports.TheClass = exports.square = exports.pixelFn = exports.colorFn = void 0;
// These two functions are painfully slow ;)
function colorFn(x) {
    return [Math.sin(x) * 0.5 + 0.5,
        Math.sin(x + 0.333 * Math.PI) * 0.5 + 0.5,
        Math.sin(x + 0.666 * Math.PI) * 0.5 + 0.5,
        1.0];
}
exports.colorFn = colorFn;
function pixelFn(x, y, t, prmA, prmB) {
    var r = Math.sin(t + x * 2.0) + Math.cos(t + y * 2.0);
    r += Math.sin(t + x * Math.sin(t + x * 0.02) * prmA) + Math.cos(t + y * (Math.cos(t * 0.7) * 5.0)) * prmB;
    return colorFn(r + t);
}
exports.pixelFn = pixelFn;
function square(x) {
    return x * x;
}
exports.square = square;
var TheClass = /** @class */ (function () {
    function TheClass(index) {
        this.index = index;
        post("TheClass.constructor was called with the number parameter " + index + "\n");
    }
    TheClass.prototype.getIndex = function () {
        return this.index;
    };
    TheClass.prototype.post = function () {
        post("TheClass: post!");
        post();
    };
    return TheClass;
}());
exports.TheClass = TheClass;
