inlets = 1;
outlets = 1;
autowatch = 1;

// Only works if ExampleModule.ts is declared before ExampleJS.ts in tsconfig.json!
let em = ExampleModule;

function bang() {
	let theObject = new em.TheClass(42);
	post("theObject.getIndex(): " + theObject.getIndex() + "\n");
	post("The square of pi is " + em.square(Math.PI) + "\n");

	// Cast to <any> to assign properties to objects of type Global.
	var g = new Global("");
	(<any>g).newProperty = "I am new.";

	post("(<any>g).newProperty: " + (<any>g).newProperty + "\n");
}

function msg_float(v)
{
	outlet(0, em.square(v));
}

function msg_int(v)
{
	outlet(0, em.square(v));
}