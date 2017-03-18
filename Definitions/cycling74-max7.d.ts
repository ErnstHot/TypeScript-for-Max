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


/**
 * The Folder object is a js “external object” defined in the Max object called jsfolder. It is used to iterate through files in a folder.
 * https://docs.cycling74.com/max7/vignettes/jsfolderobject
 */
declare class Folder {
	/**
	 * pathname can either be the name of a folder in the search path or a complete pathname using Max path syntax.
	 * @param {string} pathname [description]
	 */
	constructor(pathname: string);

	/**
	 * Non-zero (true) if there are no more files to examine in the folder, or if the pathname argument to the Folder object didn’t find a folder.
	 * @type {boolean}
	 */
	end: boolean;

	/**
	 * The total number of files of the specified type(s) contained in the folder.
	 * @type {number}
	 */
	count: number;

	/**
	 * The full pathname of the folder
	 * @type {string}
	 */
	pathname: string;

	/**
	 * The list of file types that will be used to find files in the folder. To search for all files (the default), set the typelist property to an empty array.
	 * @type {string[]}
	 */
	typelist: string[];

	/**
	 * The name of the current file.
	 * @type {string}
	 */
	filename: string;

	/**
	 * An array containing the values year, month, day, hour, minute, and second with the last modified date of the current file. These values can be used to create a Javascript Date object.
	 * @type {number[]}
	 */
	moddate: number[];

	/**
	 * The four-character code associated with the current file's filetype. These codes are listed in the file max-fileformats.txt, which is located at /Library/Application Support/Cycling ’74 on Macintosh and C:\Program Files\Common Files\Cycling ’74 on Windows. If there is no mapping for the file's extension, a nil value is returned.
	 * @type {string}
	 */
	filetype: string;

	/**
	 * The extension of the current file's name, including the period. If there are no characters after the period, a nil value is returned.
	 * @type {string}
	 */
	extension: string;

	/**
	 * [reset description]
	 * Documentation is faulty, this has been reported.
	 */
	reset(): void;

	/**
	 * Start iterating at the beginning of the list of files. Re-opens the folder if it was previously closed with the close() function.
	 */
	append(): void;

	/**
	 * Moves to the next file.
	 */
	next(): void;

	/**
	 * Closes the folder. To start using it again, call the reset() function.
	 */
	close(): void;
}


/**
 * The Global object is a fairly generic Javascript object that allows you to share data among js instances by adding and accessing properties. You can also access Global object properties from Max messages completely outside of js. Executing methods stored in Global objects from Max is not supported. However, methods are certainly among the kinds of things you can store within a Global object.
 * A Global is basically a reference to a Javascript object that you can't access directly. The object is connected to the Max symbol with the name you supplied as an argument (this allows it to be accessed from Max). Every time you access a Global, it hands off the access to the secret hidden Javascript object. This means you can create any number of Global objects in your code, in any number of js instances, and if they all have the same name, they will all share the same data. In this way, a Global resembles a namespace.
 * https://docs.cycling74.com/max7/vignettes/jsglobalobject
 */
declare class Global {

	/**
	 * name represents a String that uniquely identifies the Global.
	 * @param {string} name [description]
	 */
	constructor(name: string);

	/**
	 * Sends the value of the named property property_name to the named Max receive object (or other Max object) bound to the specified receive_name symbol.
	 * TODO: Can have any property assigned to it
	 * @param {string} receive_name  [description]
	 * @param {string} property_name [description]
	 */
	sendnamed(receive_name: string, property_name: string): void;
}


/**
 * The LiveAPI object provides a means of communicating with the Live API functions from JavaScript. For background information on this functionality, please see the Live API Overview and Live Object Model documents, as well as the Reference pages for live.path, live.object and live.observer objects, which provide the same basic functionality as the LiveAPI object, but from the Max patcher.
 * https://docs.cycling74.com/max7/vignettes/jsliveapi
 */
declare class LiveAPI {

	/**
	 * callback is an optional JavaScript function. This function will be called when the LiveAPI object refers to a new object in Live (if the LiveAPI object's path change, for instance), or when an observed property changes. path refers to the object in Live "pointed to" by the LiveAPI object (e.g. "live_set tracks 0 devices 0"). Alternately, a valid id can be used to refer a LiveAPI object to an object in Live.
	 * Technical note: you cannot use the LiveAPI object in JavaScript global code. Use the live.thisdevice object to determine when your Max Device has completely loaded (the object sends a bang from its left outlet when the Device is fully initialized, including the Live API).
	 * Legacy note: previous versions of the LiveAPI object required the jsthis object's this.patcher property as the first argument. For backward-compatibility, this first argument is still supported, but is no longer necessary.
	 * @param {any}    callback [description]
	 * @param {string} name     [description]
	 */
	constructor(callback: any, name: string);
	
	/**
	 * The id of the Live object referred to by the LiveAPI object. These ids are dynamic and awarded in realtime from the Live application, so should not be stored and used over multiple runs of Max for Live.
	 * @type {number}
	 */
	id: number;

	/**
	 * The path to the Live object referred to by the LiveAPI object. These paths are dependent on the currently open Set in Live, but are otherwise stable: live_set tracks 0 devices 0 will always refer to the first device of the first track of the open Live Set.
	 * @type {string}
	 */
	path: string;

	/**
	 * The path to the Live object referred to by the LiveAPI object, without any quoting (the path property contains a quoted path). These paths are dependent on the currently open Set in Live, but are otherwise stable: live_set tracks 0 devices 0 will always refer to the first device of the first track of the open Live Set.
	 * @type {string}
	 */
	unquotedpath: string;

	/**
	 * An array of children of the object at the current path.
	 * @type {string[]}
	 */
	children: string[];

	/**
	 * The follow mode of the LiveAPI object. 0 (default) means that LiveAPI follows the object referred to by the path, even if it is moved in the Live user interface. For instance, consider a Live Set with two tracks, "Track 1" and "Track 2", left and right respectively. If your LiveAPI object's path is live_set tracks 0, the left-most track, it will refer to "Track 1". Should the position of "Track 1" change, such that it is now to the right of "Track 2", the LiveAPI object continues to refer to "Track 1". A mode of 1 means that LiveAPI updates the followed object based on its location in the Live user interface. In the above example, the LiveAPI object would always refer to the left-most track, updating its id when the object at that position in the user interface changes.
	 * @type {number}
	 */
	mode: number;

	/**
	 * The type of the object at the current path. Please see the Live API Overview and Live Object Model documents for more information.
	 * @type {string}
	 */
	type: string;

	/**
	 * A description of the object at the current path, including id, type, children, properties and functions.
	 * @type {string}
	 */
	info: string;

	/**
	 * The observed property, child or child-list of the object at the current path, if desired. For instance, if the LiveAPI object refers to "live_set tracks 1", setting the property to "mute" would cause changes to the "mute" property of the 2nd track to be reported to the callback function defined in the LiveAPI Constructor.
	 * @type {string}
	 */
	property: string;

	/**
	 * The type of the currently observed property or child. The types of the properties and children are given in the Live Object Model.
	 * @type {string}
	 */
	proptype: string;

	/**
	 * The patcher of the LiveAPI object, as passed into the Constructor.
	 * @type {any}
	 */
	patcher: any;

	/**
	 * The count of children of the object at the current path, as specified by the child argument.
	 * @param  {string} child [description]
	 * @return {number}       [description]
	 */
	getcount(child: string): number;	

	/**
	 * Navigates to the path and causes the id of the object at that path out be sent to the callback function defined in the Constructor. If there is no object at the path, id 0 is sent.
	 * @param {string} path [description]
	 */
	goto(path: string): void;

	/**
	 * Returns the value or list of values of the specified property of the current object.
	 * @param  {string} property [description]
	 * @return {any}             [description]
	 */
	get(property: string): any;

	/**
	 * Returns the value or list of values of the specified property of the current object as a String object.
	 * @param  {string} property [description]
	 * @return {any}             [description]
	 */
	getstring(property: string): any;

	/**
	 * Sets the value or list of values of the specified property of the current object.
	 * @param {string} property [description]
	 * @param {any}    value    [description]
	 */
	set(property: string, value: any): void;

	/**
	 * Calls the given function of the current object, optionally with a list of arguments.
	 * @param {string} func [description]
	 * @param {any}    args [description]
	 */
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