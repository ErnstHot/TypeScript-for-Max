inlets = 1;
outlets = 1;
autowatch = 1;

var m = mgraphics;
m.init();
m.relative_coords = 0;
m.autofill = 0;

// Only works if ExampleModule.ts is declared before ExampleJS.ts in tsconfig.json!
var em = ExampleModule;

var t = 0;
var a = 10.0;
var b = 2.0;
var div = 8;

function paint(){
	var width = this.box.rect[2] - this.box.rect[0];
	var height = this.box.rect[3] - this.box.rect[1];

	m.set_source_rgba(0.0, 0.0, 0.0, 1.0);
	m.rectangle(0, 0, width, height);
	m.fill();

	for (var y = 0; y < height; y += div) {
		for (var x = 0; x < width; x += div) {
			let c = em.pixelFn(x / width, y / height, t, a, b);
			m.set_source_rgba(c);
			m.rectangle(x, y, x + div, y + div);
			m.fill();
		}		
	}

	t += 0.05;
}

function bang() {
	m.redraw();
}

function setA(v){
	a = v;
}

function setB(v){
	b = v;
}

function setRes(v){
	div = v;
}