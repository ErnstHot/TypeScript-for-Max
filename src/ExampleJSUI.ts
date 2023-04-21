import * as em from 'ExampleModule'

inlets = 1;
outlets = 1;
autowatch = 1;

var m = mgraphics;
m.init();
m.relative_coords = 0;
m.autofill = 0;


var t = 0;
var a = 10.0;
var b = 2.0;
var div = 8;

function paint(){
	var width = box.rect[2] - box.rect[0];
	var height = box.rect[3] - box.rect[1];

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
}

function bang() {
	t += 0.01;
	m.redraw();
}

function setA(v: number){
	a = v;
	m.redraw();
}

function setB(v: number){
	b = v;
	m.redraw();
}

function setRes(v: number){
	div = Math.floor(v);
	m.redraw();
}

// .ts files with this at the end become a script usable in a [js] or [jsui] object
let module = {};
export = {};