import * as em from 'ExampleModule'
// If you uncomment this line below you can require the module in a different, more es3 style
// If you do this you should comment out the two lines at the end of this file
// You will also need to `npm install @types/node --save-dev`
//var em = require('ExampleModule');

inlets = 1;
outlets = 1;
autowatch = 1;

function bang() {
	let theObject = new em.TheClass(42);
	post("theObject.getIndex(): " + theObject.getIndex() + "\n");
	post("The square of pi is " + em.square(Math.PI) + "\n");

	// Cast to <any> to assign properties to objects of type Global.
	// You must give the global a name, otherwise it may cause crashes in max
	// when the global is freed
	var g = new Global("TypescriptTest");
	(<any>g).newProperty = "I am new.";

	post("(<any>g).newProperty: " + (<any>g).newProperty + "\n");
}

function msg_float(v: number)
{
	outlet(0, em.square(v));
}

function msg_int(v: number)
{
	outlet(0, em.square(v));
}

// .ts files with this at the end become a script usable in a [js] or [jsui] object
// If you are going to require your module instead of import it then you should comment
// these two lines out of this script
let module = {};
export = {};