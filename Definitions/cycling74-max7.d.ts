////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Max globals                                                                                                        // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jsglobal

declare var inlets: number;
declare var outlets: number;
declare var autowatch: number;
declare var jsarguments: any[];
declare var arguments: any[];
declare var box: Maxobj;
declare var editfontsize: number;
declare var inlet: number;
declare var max: Max;
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

/**
 * The Buffer object in JavaScript is a companion to the buffer~ object you instantiate in Max patchers, and provides the ability to access samples and metadata for the buffer~ object with the associated name.
 * https://docs.cycling74.com/max7/vignettes/jsbuffer
 */
declare class Buffer {
	/**
	 * [constructor description]
	 * @param {string} name The name is required at the time the object is created.
	 */
	constructor(name: string);

	/**
	 * Return the number of channels in the buffer~ object.
	 * @type {number}
	 */
	channelcount: number;

	/**
	 * Return the number of frames (samples in a single channel) in the buffer~ object.
	 * @type {number}
	 */
	framecount: number;

	/**
	 * Return the length of the buffer~ object in milliseconds.
	 * @type {number}
	 */
	length: number; 	

	/**
	 * Return an array with count samples from channel (1-based counting) starting at frame (zero-based counting).
	 * @param  {number}   channel 
	 * @param  {number}   frame   
	 * @param  {number}   count   
	 * @return {number[]}
	 */
	peek(channel: number, frame: number, count: number): number[]; 	

	/**
	 * Write into the buffer~ object at channel (1-based counting) and frame (0-based counting). Samples may be a single sample value or an array of sample values. It is computationally more efficient to use an array).
	 * @param {number}    channel
	 * @param {number}    frame
	 * @param {number | number[]}	samples
	 */
	poke(channel: number, frame: number, samples: number | number[]): void; 	

	/**
	 * Send a message to the associated buffer~ object. Can send any message that buffer~ understands.
	 * @param {string} message_name         [description]
	 * @param {any[]}  ...message_arguments [description]
	 */
	send(message_name: string, ...message_arguments: any[]): void;
}


/**
 * The Dict object in JS is a companion to the dict object you create in a Max patcher. It provides the ability to access structured data (a dictionary) associated with a name.
 * Example code can be found in the "js" tab of the dict help patcher.
 * https://docs.cycling74.com/max7/vignettes/jsdict
 */
declare class Dict {
	/**
	 * If no name is provided as an argument then a unique name will be generated for the dictionary.
	 * The following properties mirror the attributes of the same name from the Max dict object. See the dict reference for more details.
	 * @param {string} name [description]
	 */
	constructor(name: string);

	/**
	 * Access or set the name of a dict object as a property of the dict object
	 * @type {string}
	 */
	name: string;

	/**
	 * The quiet property functions the same as the @quiet attribute to dict in Max. It suppresses many errors or warnings if set to true.
	 * @type {boolean}
	 */
	quiet: boolean; 	

	/**
	 * Add values to the end of an array associated with the specified key.
	 * @param {string} key   [symbol]
	 * @param {any[]}  value [list]
	 */
	append(key: string, value: any[]): void;

	/**
	 * Erase the contents of the dictionary, restoring to a clean state
	 */
	clear(): void;

	/**
	 * Make a clone of the incoming dictionary.
	 * @param {string} name [symbol]
	 */
	clone(name: string): void;

	/**
	 * Return a 0 or 1 indicating the specified key exists (or doesn't) in the dictionary.
	 * @param  {string} key    [symbol]
	 * @return {number}        [description]
	 */
	contains(key: string): number;

	/**
	 * Return the value associated with a key.
	 * @param  {string} key    [symbol]
	 * @return {any}           [description]
	 */
	get(key: string): any;
	
	/**
	 * Return a list of all the keys in a dictionary.
	 * @return {any[]} [description]
	 */
	getkeys(): any[];

	/**
	 * Return a list of all the dictionaries that currently exist.
	 * @return {string[]} [description]
	 */
	getnames(): string[];	

	/**
	 * Return the number of values associated with a key.
	 * @return {number} [description]
	 */
	getsize(): number;	

	/**
	 * Return the type of the values associated with a key.
	 * @return {string} [description]
	 */
	gettype(): string;	

	/**
	 * Replace the content of a dictionary.
	 * @param {string} key   [symbol]
	 * @param {string} value [symbol]
	 */
	parse(key: string, value: string): void;	

	/**
	 * Pull the content of a named coll object into the dictionary.
	 * @param {string} coll_name [symbol]
	 */
	pull_from_coll(coll_name: string): void;	

	/**
	 * Push the dictionary's content into a named coll object. The keys in the dictionary will become the indices in the coll, and the values for those indices the values of the dictionary's keys.
	 * @param {string} coll_name [symbol]
	 */
	push_to_coll(coll_name: string): void;	

	/**
	 * Read the dictionary contents from a file.
	 * @param {string} filename [symbol]
	 */
	readany(filename: string): void;	

	/**
	 * Remove a key and its associated value from the dictionary.
	 * @param {string} key [symbol]
	 */
	remove(key: string): void;	

	/**
	 * Set the value for a key to a specified value, creating heirarchy.
	 * @param {string} key   [symbol]
	 * @param {any[]}  value [list]
	 */
	replace(key: string, value: any[]): void;	

	/**
	 * Set the value for a key to a specified value.
	 * @param {string} key   [symbol]
	 * @param {any[]}  value [list]
	 */
	set(key: string, value: any[]): void;	

	/**
	 * Set the value for a key to dictionary content defined using JSON.
	 * @param {string} key   [symbol]
	 * @param {any[]}  value [list]
	 */
	setparse(key: string, value: any[]): void;

	/**
	 * Open a save dialog to write the dictionary contents to a file.
	 */
	writeagain(): void;	

	/**
	 * Return the content of the dictionary as a JSON string.
	 * @return {string} [description]
	 */
	stringify(): string;	

	/**
	 * Read a file from disk in the JSON format.
	 * @param {string} filename [symbol]
	 */
	import_json(filename: string): void;	

	/**
	 * Write a file to disk in the JSON format.
	 * @param {string} filename [symbol]
	 */
	export_json(filename: string): void;	

	/**
	 * Read a file from disk in the YAML format.
	 * @param {string} filename [symbol]
	 */
	import_yaml(filename: string): void;	

	/**
	 * Write a file to disk in the YAML format.
	 * @param {string} filename [symbol]
	 */
	export_yaml(filename: string): void;
}


/**
 * The File object provides a means of reading and writing files from Javascript.
 * https://docs.cycling74.com/max7/vignettes/jsfileobject
 */
declare class File {
	/**
	 * filename can be a file in the Max search path, an absolute path, or a relative path. Acceptable values for access can be "read", "write", or "readwrite". The default value for access is "read". Acceptable values for typelist are four character filetype codes listed in the file max-fileformats.txt, which is located at /Library/Application Support/Cycling ’74 on Macintosh and C:\Program Files\Common Files\Cycling ’74 on Windows. By default, typelist is empty. If able to, the File constructor opens the file specified by filename, provided it is one of the types in typelist.
	 * @param {string} filename [description]
	 * @param {string} access   [description]
	 * @param {string} typelist [description]
	 */
	constructor(filename: string, access: string, typelist: string);

	/**
	 * File access permissions: "read", "write", or "readwrite". By default, this value is "read".
	 * @type {string}
	 */
	access: string;
	
	/**
	 * The assumed file byteorder (endianness): "big", "little", or "native". By default, this value is "native".
	 * @type {string}
	 */
	byteorder: string;

	/**
	 * The location of the end of file, in bytes.
	 * @type {number}
	 */
	eof: number;

	/**
	 * The current filename.
	 * @type {string}
	 */
	filename: string;

	/**
	 * The four-character code associated. See Filetypes Recognized in Max for possible values.
	 * (In Max 7 documentation, Filetypes link points to the wrong page. This has been reported.)
	 * @type {string}
	 */
	filetype: string;

	/**
	 * The absolute path to parent folder.
	 * @type {string}
	 */
	foldername: string;

	/**
	 * Return a true/false indicating if the File constructor is successful in finding and opening the file.
	 * @type {boolean}
	 */
	isopen: boolean;

	/**
	 * The line break convention to use when writing lines: "dos", "mac", "unix", or "native". By default, this value is "native".
	 * @type {string}
	 */
	linebreak: string;

	/**
	 * The current file position, in bytes.
	 * @type {number}
	 */
	position: number;

	/**
	 * An array file type codes to filter by when opening a file. By default, this is the empty array.
	 * @type {string[]}
	 */
	typelist: string[];

	/**
	 * Opens the file specified by the filename argument. If no argument is specified, it will open the last opened file.
	 * @param {string} filename [description]
	 */
	open(filename?: string): void;

	/**
	 * Closes the currently open file.
	 */
	close(): void; // TODO: Docs say string [symbol] ???

	/**
	 * Writes the characters contained in the string argument as characters to the file, starting at the current file position, and inserts a line break appropriate to the linebreak property. The file position is updated accordingly.
	 * @param {string} characters [description]
	 */
	writeline(characters: string): void;

	/**
	 * Reads and returns a string containing up to maximum_count characters or up to the first line break as read from the file, starting at the current file position. The file position is updated accordingly.
	 * @param  {number} maximum_count [description]
	 * @return {string}               [description]
	 */
	readline(maximum_count: number): string;

	/**
	 * Writes the characters contained in the string argument as characters to the file, starting at the current file position. Unlike writeline(), no line break is inserted. The file position is updated accordingly.
	 * @param {string} characters [description]
	 */
	writestring(characters: string): void;

	/**
	 * Reads and returns a string containing up to char_count characters as read from the file, starting at the current file position. Unlike readline(), line breaks are not considered. The file position is updated accordingly.
	 * @param  {number} char_count [description]
	 * @return {string}            [description]
	 */
	readstring(char_count: number): string;

	/**
	 * Writes the numbers contained in the byte_array argument as bytes to the file, starting at the current file position. The file position is updated accordingly.
	 * @param {number[]} byte_array [description]
	 */
	writebytes(byte_array: number[]): void;

	/**
	 * Reads and returns an array containing up to byte_count numbers, read as bytes from the file, starting at the current file position. The file position is updated accordingly.
	 * @param  {number}   byte_count [description]
	 * @return {number[]}            [description]
	 */
	readbytes(byte_count: number): number[];

	/**
	 * Writes the single character strings contained in the char_array argument as characters to the file, starting at the current file position. The file position is updated accordingly.
	 * @param {string[]} char_array [description]
	 */
	writechars(char_array: string[]): void;

	/**
	 * Reads and returns an array containing the single character strings, read as characters from the file, starting at the current file position. The file position is updated accordingly.
	 * @param  {number}   char_count [description]
	 * @return {string[]}            [description]
	 */
	readchars(char_count: number): string[];

	/**
	 * Writes the numbers contained in the int16_array argument as signed 16-bit integers to the file, starting at the current file position. The byteorder property is taken into account when writing these values. The file position is updated accordingly.
	 * @param {number[]} int16_array [description]
	 */
	writeint16(int16_array: number[]): void;

	/**
	 * Reads and returns an array containing the numbers read as signed 16-bit integers from the file starting at the current file position. The byteorder property is taken into account when reading these values. The file position is updated accordingly.
	 * @param  {number}   int16_count [description]
	 * @return {number[]}             [description]
	 */
	readint16(int16_count: number): number[];

	/**
	 * Writes the numbers contained in the int32_array argument as signed 32-bit integers to the file, starting at the current file position. The byteorder property is taken into account when writing these values. The file position is updated accordingly.
	 * @param {number[]} int32_array [description]
	 */
	writeint32(int32_array: number[]): void;

	/**
	 * Reads and returns an array containing the numbers read as signed 32-bit integers from the file starting at the current file position. The byteorder property is taken into account when reading these values. The file position is updated accordingly.
	 * @param  {number}   int32_count [description]
	 * @return {number[]}             [description]
	 */
	readint32(int32_count: number): number[];

	/**
	 * Writes the numbers contained in the float32_array argument as 32-bit floating point numbers to the file, starting at the current file position. The byteorder property is taken into account when writing these values. The file position is updated accordingly.
	 * @param {number[]} int32_array [description]
	 */
	writefloat32(int32_array: number[]): void;

	/**
	 * Reads and returns an array containing the numbers read as 32-bit floating point numbers from the file starting at the current file position. The byteorder property is taken into account when reading these values. The file position is updated accordingly.
	 * @param  {number}   float32_count [description]
	 * @return {number[]}               [description]
	 */
	readfloat32(float32_count: number): number[];

	/**
	 * Writes the numbers contained in the float64_array argument as 64-bit floating point numbers to the file, starting at the current file position. The byteorder property is taken into account when writing these values. The file position is updated accordingly.
	 * @param {number[]} int64_array [description]
	 */
	writefloat64(int64_array: number[]): void;

	/**
	 * Reads and returns an array containing the numbers read as 64-bit floating point numbers from the file starting at the current file position. The byteorder property is taken into account when reading these values. The file position is updated accordingly.
	 * @param  {number}   float64_count [description]
	 * @return {number[]}               [description]
	 */
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
	// TODO: Can have any property assigned to it
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
// Max                                                                                                                // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// http://max-javascript-reference.tim-schenk.de/symbols/max.html

declare class Max {
	constructor();
	readonly appath: string;
	readonly cmdkeydown: number;
	readonly ctrlkeydown: number; 	
	readonly db: any; // TODO: max.db? 
	readonly frontpatcher: Patcher;
	readonly isplugin: number;
	readonly isruntime: number;
	readonly loadbangdisabled: number;
	readonly optionkeydown: number;
	readonly os: string;
	readonly osversion: string;
	readonly shiftkeydown: number;
	readonly time: number;
	readonly version: string;

	buildcollective(name: string, filename: string): void;
	checkpreempt(receive_object: string): void;
	clean(): void;
	closefile(symbol: string): void;
	debug(enable: 0 | 1): void;
	enablepathcache(enable: 0 | 1): void;
	enablerefresh(enable: 0 | 1): void;
	externs(): void;
	fileformat(extension: string, filetype: string): void;
	fixwidthratio(ratio: number): void;
	getdefaultpatcherheight(object_name: string): void;
	getdefaultpatcherwidth(object_name: string): void;
	getenablepathcache(object_name: string): void;
	getenablerefresh(object_name: string): void;
	geteventinterval(object_name: string): void;
	getfixwidthratio(object_name: string): void;
	getpollthrottle(object_name: string): void;
	getqueuethrottle(object_name: string): void;
	getrefreshrate(object_name: string): void;
	getruntime(object_name: string): void;
	getsleep(object_name: string): void;
	getslop(object_name: string): void;
	getsysqelemthrottle(object_name: string): void;
	getsystem(object_name: string): void;
	getversion(object_name: string): void;
	hidecursor(): void;
	hidemenubar(): void;
	htmlref(object_name: string): void;
	interval(value: number): void;
	launchbrowser(url: string): void;
	maxcharheightforsubpixelantialiasing(points: number): void;
	maxinwmenu(enable: 0 | 1): void;
	maxwindow(): void;
	midi(...message: any[]): void;
	midilist(): void;
	nativetextrendering(enable: 0 | 1): void;
	notypeinfo(enable: 0 | 1): void;
	objectfile(object_name: string, file_name: string): void;
	openfile(reference_name: string, file_name: string): void;
	paths(): void;
	portabbrev(...message: any[]): void; // TODO: Documentation is unclear
	portenable(portname: string) : 0 | 1;
	portoffset(...message: any[]);
	preempt(mode: 0 | 1): void;
	pupdate(x: number, y: number): void;
	quit(): void;
	refresh(): void;
	refreshrate(fps: number);
	runtime(isRunstime: 0 | 1, ...message: any[]): void;
	sendapppath(object_name: string): void;
	sendinterval(object_name: string): void;
	setdefaultpatcherheight(height: number): void;
	setdefaultpatcherwidth(width: number): void;
	seteventinterval(interval: number): void;
	setmirrortoconsole(enable: 0 | 1): void;
	setpollthrottle(event_count: number): void;
	setqueuethrottle(event_count: number): void;
	setsleep(interval: number): void;
	setslop(slop_value: number): void;
	setsysqelemthrottle(event_count: number): void;
	showcursor(): void;
	showmenubar(): void;
	size(): void;
	system(os: "windows" | "macintosh", message: string): void;
	useslowbutcompletesearching(enable: 0 | 1): void;
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