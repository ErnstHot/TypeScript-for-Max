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