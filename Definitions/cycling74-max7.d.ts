////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Max globals                                                                                                        // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jsglobal

declare var inlets: number;
declare var outlets: number;
declare var autowatch: number;
declare var jsarguments: any[];
declare var arguments: any[];
declare var box: any; // TODO: Proper definition
declare var editfontsize: number;
declare var inlet: number;
declare var max: any; // TODO: Any?
declare var maxclass: string;
declare var messagename: string;
declare var patcher: Patcher;
declare function error(message: any): void;
declare function cpost(message?: any): void;
declare function post(message?: any): void;
declare function messnamed(object_name: string, message_name: string, message_arguments?: string): void;
declare function arrayfromargs(message: string, arguments: any[]): void;
declare function assist(arguments: any): void;
declare function declareattribute(attribute_name: string, getter_name?: string, setter_name?: string, embed?: number): void;
declare function embedmessage(method_name: string, ...arguments: any[]): void;
declare function notifyclients(): void;
declare function outlet(outlet_number: number, ...arguments: any[]): void;
declare function setinletassist(inlet_number: number, object: any): void;
declare function setoutletassist(outlet_number: number, object: any): void;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Buffer                                                                                                             // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jsbuffer

declare class Buffer {
	constructor(name: string);
	channelcount: number;
	framecount: number;
	length: number; 	
	peek(channel: number, frame: number, count: number): number[]; 	
	poke(channel: number, frame: number, samples: number | number[]): void; 	
	send(message_name: string, ...message_arguments: any[]): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Dict                                                                                                               // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jsdict

declare class Dict {
	constructor(name: string); 	
	name: string; 	
	quiet: boolean; 	
	append(key: string, value: any[]): void;
	clear(): void;	
	clone(symbol: string): void;	
	contains(symbol: string): number;	
	get(symbol: string): any; // TODO: Maybe...? Could be string or number?	
	getkeys(): any[];	
	getnames(): string[];	
	getsize(): number;	
	gettype(): string;	
	parse(key: string, value: string): void;	
	pull_from_coll(coll_name: string): void;	
	push_to_coll(coll_name: string): void;	
	readany(filename: string): void;	
	remove(symbol: string): void;	
	replace(key: string, value: any[]): void;	
	set(key: string, value: any[]): void;	
	setparse(key: string, value: any[]): void;	
	writeagain(): void;	
	stringify(): string;	
	import_json(filename: string): void;	
	export_json(filename: string): void;	
	import_yaml(filename: string): void;	
	export_yaml(filename: string): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// File                                                                                                               // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jsfileobject

declare class File {
	constructor(filename: string, access: string, typelist: string);
	access: string;
	byteorder: string;
	eof: number;
	filename: string;
	filetype: string;
	foldername: string;
	isopen: boolean;
	linebreak: string;
	position: number;
	typelist: string[];
	open(filename?: string): void;
	close(): void; // TODO: string [symbol] ???
	writeline(characters: string): void;
	readline(maximum_count: number): string;
	writestring(characters: string): void;
	readstring(char_count: number): string;
	writebytes(byte_array: number[]): void;
	readbytes(byte_count: number): number[];
	writechars(char_array: string[]): void;
	readchars(char_count: number): string[];
	writeint16(int16_array: number[]): void;
	readint16(int16_count: number): number[];
	writeint32(int32_array: number[]): void;
	readint32(int32_count: number): number[];
	writefloat32(int32_array: number[]): void;
	readfloat32(float32_count: number): number[];
	writefloat64(int64_array: number[]): void;
	readfloat64(float64_count: number): number[];
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Folder                                                                                                             // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jsfolderobject

declare class Folder {
	constructor(pathname: string);
	end: boolean;
	count: number;
	pathname: string;
	typelist: string[];
	filename: string;
	moddate: number[];
	filetype: string;
	extension: string;
	append(): void;
	next(): void;
	close(): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Global                                                                                                             // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jsglobalobject

declare class Global {
	constructor(name: string);
	sendnamed(receive_name: string, property_name: string): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Image                                                                                                              // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jsimageobject

declare class Image {
	// TODO: Not like this.
	constructor();
	constructor(filename: string);
	constructor(image: Image);
	constructor(sketch: Sketch);
	constructor(width: number, height: number);
	size: number[];	
	adjustchannel(channel: "red" | "green" | "blue" | "alpha", scale: number, bias:number): void;
	alphachroma(red: number, green: number, blue: number, tolerance: number, fade: number, minkey: number, maxkey: number): void;	
	blendchannel(source_object: any, alpha: number, source_channel: "red" | "green" | "blue" | "alpha", destination_channel: "red" | "green" | "blue" | "alpha"): void;	 
	blendpixels(source_object: any, alpha: number, dest_x: number, dest_y: number, rc_x: number, src_y: number, width: number, height: number): void;
	clear(red: number, green: number, blue: number, alpha: number): void;
	clearchannel(channel: string, value: number): void;
	copychannel(source_object: string, source_channel: string, destination_channel: string): void;
	copypixels(source_object: string, dest_x: number,  dest_y: number, src_x: number, src_y: number, width: number, height: number): void;
	flip(horizontal_flip: number, vertical_flip: number): void;
	freepeer(): void;
	fromnamedmatrix(matrixname: string): void;	
	getpixel(x: number, y: number): number[];
	setpixel(x: number, y: number, red: number, green: number, blue: number, alpha: number): void;	
	swapxy(): void;
	tonamedmatrix(matrixname: string): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Sketch                                                                                                             // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jssketchobject

declare class Sketch {
	constructor();
	constructor(width: number, height: number);	
	move(delta_x: number, delta_y: number, delta_z: number): void;	
	moveto(x: number, y: number, z: number): void;
	point(x: number, y: number, z: number): void;
	line(delta_x: number, delta_y: number, delta_z: number): void;
	lineto(x: number, y: number, z: number): void;
	linesegment(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
	tri(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3:	number, y3: number, z3: number): void;
	frametri(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number): void;
	quad(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number): void;
	framequad(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, x3: number, y3: number, z3: number, x4: number, y4: number, z4: number): void;
	circle(radius: number, theta_start: number, theta_end: number): void;
	cube(scale_x: number, scale_y: number, scale_z: number): void;
	cylinder(radius1: number, radius2: number, mag: number, theta_start: number, theta_end: number): void;
	ellipse(radius1: number, radius2: number, theta_start: number, theta_end: number): void;
	framecircle(radius: number, theta_start: number, theta_end: number): void;
	frameellipse(radius1: number, radius2: number, theta_start: number, theta_end: number): void;
	plane(scale_x1: number, scale_y1: number, scale_x2: number, scale_y2: number): void;
	roundedplane(round_amount: number, scale_x: number, scale_y: number): void;
	sphere(radius: number, theta1_start: number, theta1_end: number, theta2_start: number, theta2_end: number): void;
	torus(radius1: number, radius2: number, theta1_start: number, theta1_end: number, theta2_start: number, theta2_end: number): void;
	shapeorient(rotation_x: number, rotation_y: number, rotation_z: number): void;
	shapeslice(slice_a: number, slice_b: number): void;
	shapeprim(draw_prim: string): void;
	font(fontname: string): void;
	fontsize(points: number): void;
	gettextinfo(str: string): number[];
	text(str: string): void;
	textalign(align_x: string, align_y: string): void;
	copypixels(source_object: string, destination_x: number, destination_y: number, source_x: number, source_y: number, width: number, height: number): void;
	depthatpixel(x: number, y: number): number;
	freepeer(): void;
	getpixel(x: number, y: number): number[];
	setpixel(x: number, y: number, red: number, green: number, blue: number, alpha: number): void;
	screentoworld(x: number, y: number): number[];
	worldtoscreen(x: number, y: number, z: number): number[];
	beginstroke(stroke_style: string): void;
	endstroke(): void;
	strokeparam(parameter_name: string, ...args: any[]): void;
	strokepoint(x: number, y: number, z: number): void;
	default2d(): void;
	default3d(): void;
	ortho3d(): void;
	glbegin(draw_prim: any[]): void;
	glbindtexture(image_object: string): void;	
	glblendfunc(src_function: string, dst_function: string): void;
	glclear(): void;
	glclearcolor(red: number, green: number, blue: number, alpha: number): void;
	glcleardepth(depth: number): void;
	glclipplane(plane: number, coeff1: number, coeff2: number, coeff3: number, coeff4: number): void;
	glcolor(red: number, green: number, blue: number, alpha: number): void;
	glcolormask(red: number, green: number, blue: number, alpha: number): void;
	glcolormaterial(face: number, mode: any[]): void;
	glcullface(face: number): void;
	gldepthmask(on: number): void;	
	gldepthrange(near: number, far: number): void;	
	gldisable(capability: number): void;
	gldrawpixels(image: string): void;
	gledgeflag(on: number): void;
	glenable(capability: number): void;	
	glend(): void;
	glfinish(): void;
	glflush(): void;
	glfog(parameter_name: string, value: number): void;	
	glfrustum(left: number, right: number, bottom: number, top: number, near: number, far: number): void;	
	glhint(target: string, mode: number): void;	
	gllight(light: string, parameter_name: string, value: number): void;	
	gllightmodel(parameter_name: string, value: number): void;
	gllinestipple(factor: any[], bit_pattern: any[]): void;
	gllinewidth(width: number): void;
	glloadidentity(): void;
	glloadmatrix(matrix_array: number[]): void;	
	gllogicop(opcode: any[]): void;
	glmaterial(): void;
	glmatrixmode(mode: string): void;
	glmultmatrix(matrix_array: any[]): void;
	glnormal(x: number, y: number, z: number): void;
	glortho(left: number, right: number, bottom: number, top: number, near: number, far: number): void;
	glpointsize(size: number): void;
	glpolygonmode(): void;
	glpolygonoffset(): void;
	glpopattrib(): void;
	glpopmatrix(): void;
	glpushattrib(): void;
	glpushmatrix(): void;
	glrect(x1: number, y1: number, x2: number, y2: number): void;
	glrotate(angle: number, x: number, y: number, z: number): void;
	glscale(x_scale: number, y_scale: number, z_scale: number): void;
	glscissor(x: number, y: number, width: number, height: number): void;
	glshademodel(mode: any[]): void;
	gltexcoord(s: number[], t: number[]): void;
	gltexenv(parameter_name: string, val1: string, val2: string, val3: string, val4: string): void;
	gltexgen(coord: number[], parameter_name: string, val1: string, val2: string, val3: string, val4: string): void;
	gltexparameter(parameter_name: string, val1: string, val2: string, val3: string, val4: string): void;
	gltranslate(delta_x: number,  delta_y: number,  delta_z: number): void;
	glulookat(eye_x: number, eye_y: number, eye_z: number, center_x: number, center_y: number, center_z: number, up_x: number, up_y: number, up_z: number): void;
	gluortho2d(left: number, right: number, bottom: number, top: number): void;
	gluperspective(fovy: number, aspect: number, near: number, far: number): void;
	glvertex(x: number, y: number, z: number): void;
	glviewport(x: number, y: number, width: number, height: number): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LiveAPI                                                                                                            // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jsliveapi

declare class LiveAPI {
	constructor(callback: any, name: string);
	id: number;
	path: string;
	unquotedpath: string;
	children: string[];
	mode: number;
	type: string;
	info: string;
	property: string;
	proptype: string;
	patcher: any;
	getcount(child: string): number;	 
	goto(path: string): void;
	get(property: string): any;
	getstring(property: string): any;
	set(property: string, value: any): void;
	call(func: string, args: any): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Maxobj                                                                                                             // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jsmaxobj

declare class Maxobj {
	constructor();
	rect: number[];
	maxclass: string;
	patcher: any;
	hidden: boolean;
	colorindex: number;
	nextobject: any;
	varname: string;
	canhilite: boolean;
	background: boolean;
	ignoreclick: boolean;
	selected: boolean;
	js: any;
	valid: boolean;
	message(message: string, ...anything: any[]): void;
	help(): void;
	subpatcher(index: number): Patcher;
	understands(message: string): boolean;
 }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Patcher                                                                                                            // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jspatcherobject

declare class Patcher {
	constructor();
	constructor(left: number, top: number, bottom: number, right: number);
	box: Maxobj;
	count: number;
	filepath: string;
	firstobject: Maxobj;
	name: string;
	locked: boolean;
	maxclass: string;
	parentclass: string;
	parentpatcher: Patcher;
	scrolloffset: number[];
	scrollorigin: number[];
	wind: Wind;
	newobject(classname:string, ...params: any[]): Maxobj;
	newdefault(left: number, top: number, classname:string, ...args: any[]): Maxobj;
	// TODO: Are from_object: any actually strings, or Maxobjs?
	connect(from_object: any, outlet: number, to_object: any, inlet: number): void;
	hiddenconnect(from_object: any, outlet: number, to_object: any, inlet: number): void;
	disconnect(from_object: any, outlet: number, to_object: any, inlet: number): void;
	apply(func: any): void;
	applydeep(func: any): void;
	applyif(action_function: any, test_function: any): void;
	applydeepif(action_function: any, test_function: any): void;
	remove(obj: any): void;
	getnamed(name: string): Maxobj;
	getlogical(func: any): void;
	bringtofront(obj: any): void;
	sendtoback(obj: any): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PolyBuffer                                                                                                         // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jspolybuffer

declare class PolyBuffer {
	constructor(name: string); 	
	name: string; 	
	count: number; 	
	size: number; 	
	open(): void; 	
	wclose(): void; 	
	readfolder(folder_path: string): void; 	
	writefolder(folder_path: string): void; 	
	append(soundfile_path: string): void; 	
	appendempty(duration: number, channels: number): void; 	
	clear(): void; 	
	print(): void; 	
	send(index: number, ...msg: any[]): void; 	
	dump(): string[]; 	
	getshortname(filename: string): string[]; 	
	getbufferlist(filename: string): void;
 }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Task                                                                                                               // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jstaskobject

declare class Task {
	constructor(func: any, obj?: any, ...args: any[]);
	arguments: any[];
	function: any;
	running: boolean;
	interval: number; 
	object: any;
	iterations: number;
	repeat(times: number): void;
	execute(): void;
	schedule(delay?: number): void;
	cancel(): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Wind                                                                                                               // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jswindobj

declare class Wind {
	assoc: Patcher;
	assocclass: string;
	dirty: boolean;
	hasgrow: boolean;
	hashorizscroll: boolean;
	hasvertscroll: boolean;
	haszoom: boolean;
	hastitlebar: boolean;
	location: number[];
	next: Wind;
	size: number[];
	title: string;
	visible: boolean;
	bringtofront(): void;
	scrollto(x: number, y: number): void;
	sendtoback(): void;
	setlocation(left: number, top: number, bottom: number, right: number): void;
 }


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SQLite                                                                                                             // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jssqliteobject

declare class SQLite {
	constructor();
	open(filename: string, on_disk: number, must_exist: number): number;
	close(): void;
	exec(command: string, result: any): number;
	begintransaction(): void;
	endtransaction(): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SQLResult                                                                                                          // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jssqlresultobject

declare class SQLResult {
	constructor();
	numrecords(): number;
	numfields(): number;
	fieldname(index: number): string;	
	value(index: number, record_no: number): any;				
}