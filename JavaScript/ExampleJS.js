var ExampleModule;
(function (ExampleModule) {
    // These two functions are painfully slow ;)
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
