var ExampleModule;
(function (ExampleModule) {
    function colorFn(x) {
        return [Math.sin(x) * 0.5 + 0.5,
            Math.sin(x + 0.333 * Math.PI) * 0.5 + 0.5,
            Math.sin(x + 0.666 * Math.PI) * 0.5 + 0.5,
            1.0];
    }
    ExampleModule.colorFn = colorFn;
    function pixelFn(x, y, t, prmA, prmB) {
        var r = Math.sin(t + x * 2.0) + Math.cos(t + y * 2.0);
        r += Math.sin(t + x * Math.sin(t + x * 0.02) * prmA) + Math.cos(t + y * (Math.cos(t * 0.7) * 5.0)) * prmB;
        return colorFn(r + t);
    }
    ExampleModule.pixelFn = pixelFn;
    function square(x) {
        return x * x;
    }
    ExampleModule.square = square;
    var TheClass = (function () {
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
    ExampleModule.TheClass = TheClass;
})(ExampleModule || (ExampleModule = {}));
inlets = 1;
outlets = 1;
autowatch = 1;
// Only works if ExampleModule.ts is declared before ExampleJS.ts in tsconfig.json!
var em = ExampleModule;
var m = mgraphics;
m.init();
m.relative_coords = 0;
m.autofill = 0;
var t = 0;
var a = 10.0;
var b = 2.0;
var div = 8;
function paint() {
    var width = this.box.rect[2] - this.box.rect[0];
    var height = this.box.rect[3] - this.box.rect[1];
    m.set_source_rgba(0.0, 0.0, 0.0, 1.0);
    m.rectangle(0, 0, width, height);
    m.fill();
    for (var y = 0; y < height; y += div) {
        for (var x = 0; x < width; x += div) {
            var c = em.pixelFn(x / width, y / height, t, a, b);
            m.set_source_rgba(c[0], c[1], c[2], c[3]);
            m.rectangle(x, y, x + div, y + div);
            m.fill();
        }
    }
    t += 0.05;
}
function bang() {
    m.redraw();
}
function setA(v) {
    a = v;
}
function setB(v) {
    b = v;
}
function setRes(v) {
    div = v;
}
