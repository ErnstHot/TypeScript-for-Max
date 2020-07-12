/*
 * Documentation is property of Cycling '74 and published with permission.
 */



/*
 * Max globals
 * https://docs.cycling74.com/max7/vignettes/jsglobal 
 */ 

declare var inlets: number;
declare var outlets: number;
declare var autowatch: number;
declare var jsarguments: any[];
declare var arguments: IArguments;
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
declare function arrayfromargs(arguments: IArguments): any[];
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


/**
 * The Max object can be accessed as a property of a jsthis object. Any message you can send to the max object using the semicolon notation in a message box can be invoked within Javascript using Javascript syntax.
 * http://max-javascript-reference.tim-schenk.de/symbols/max.html
 */
declare class Max {
	/**
	 * The pathname of the Max application
	 * @type {string}
	 */
	readonly appath: string;

	/**
	 * 1 if the command (Macintosh) or control (Windows) key is currently held down
	 * @type {number}
	 */
	readonly cmdkeydown: number;

	/**
	 * 1 if the control key is currently held down
	 * @type {number}
	 */
	readonly ctrlkeydown: number; 	

	/**
	 * [db description]
	 * TODO: max.db?
	 * @type {any}
	 */
	readonly db: any; 

	/**
	 * The Patcher object of the frontmost patcher window, or a nil value if no patcher window is visible.
	 * @type {Patcher}
	 */
	readonly frontpatcher: Patcher;

	/**
	 * 1 if the js object is within a plug-in; note that this would be 1 if the js object was within a plug-in loaded into the vst~ object in Max.
	 * @type {number}
	 */
	readonly isplugin: number;

	/**
	 * 1 if the currently executing Max application environment does not allow editing, 0 if it doe
	 * @type {number}
	 */
	readonly isruntime: number;

	/**
	 * 1 if the user has disabled loadbang for the currently loading patch. If your object implements a loadbang method, it can test this property and choose to do nothing if it is true.
	 * @type {number}
	 */
	readonly loadbangdisabled: number;

	/**
	 * 1 if the option (Macintosh) or alt (Windows) key is currently held down
	 * @type {number}
	 */
	readonly optionkeydown: number;

	/**
	 * The name of the platform (e.g., “windows” or “macintosh”)
	 * @type {string}
	 */
	readonly os: string;

	/**
	 * The current OS version number.
	 * @type {string}
	 */
	readonly osversion: string;

	/**
	 * 1 if the shift key is currently held down
	 * @type {number}
	 */
	readonly shiftkeydown: number;

	/**
	 * The current scheduler time in milliseconds - will be a floating-point value.
	 * @type {number}
	 */
	readonly time: number;

	/**
	 * The version of the Max application, in the following form: "451"
	 * @type {string}
	 */
	readonly version: string;

	/**
	 * The word buildcollective, followed by a reference name symbol and an output filename, builds a collective using the patcher associated with the symbol. The collective is named with the output filename.
	 * @param {string} name     [description]
	 * @param {string} filename [description]
	 */
	buildcollective(name: string, filename: string): void;

	/**
	 * The word checkpreempt, followed by a symbol, sends the current Overdrive mode to the receive object named by the symbol.
	 * @param {string} receive_object [description]
	 */
	checkpreempt(receive_object: string): void;

	/**
	 * Causes Max not to show a Save Changes dialog when you close a window or quit, even if there are windows that have been modified. This is useful in conjunction with the quit message below.
	 */
	clean(): void;

	/**
	 * The word closefile, followed by a symbol, closes the patcher file previously opened with the openfile message to Max associated with the symbol.
	 * @param {string} symbol [description]
	 */
	closefile(symbol: string): void;

	/**
	 * The word debug, followed by a zero or one, toggles the sending of Max's internal debugging output to the Max window. Debug information may be of limited use for anyone who isn't debugging Max itself.
	 * @param {0 | 1} enable [description]
	 */
	debug(enable: 0 | 1): void;

	/**
	 * The word enablepathcache, followed by a zero or one, turns on (or off) Max's search path cache. This should only be done if you noticed unusual behavior when opening files.
	 * @param {0 | 1} enable [description]
	 */
	enablepathcache(enable: 0 | 1): void;

	/**
	 * (Macintosh only) The word enablerefresh, followed by a zero or one, toggles an alternative to the standard way in which the screen contents are updated, resulting in better visual performance. This feature is enabled by default. The rate at which refresh is done can be set by using the setrefreshrate message.
	 * @param {0 | 1} enable [description]
	 */
	enablerefresh(enable: 0 | 1): void;

	/**
	 * List all of the external objects currently loaded in the Max window.
	 */
	externs(): void;

	/**
	 * The word fileformat, followed by two symbols that specify a file extension and a four-character file type, tells Max to associate a filename extension with a particular filetype. The message max fileformat .tx TEXT associates the extension .tx with TEXT (text) files. This allows a user to send a message read george and locate a file with the name george.tx. It also ensures that files with the extension .tx will appear in a standard open file dialog where text files can be chosen.
	 * @param {string} extension [description]
	 * @param {string} filetype  [description]
	 */
	fileformat(extension: string, filetype: string): void;

	/**
	 * The word fixwidthratio, followed by a floating-point number, sets the ratio of the box to the width of the text when the user chooses Fix Width from the Object menu. The default value is 1.0. A value of 1.1 would make boxes wider than they needed to be, and a value of 0.9 would make boxes narrower than they need to be.
	 * @param {number} ratio [description]
	 */
	fixwidthratio(ratio: number): void;

	/**
	 * The word getdefaultpatcherheight followed by a symbol used as the name of a receive object, causes Max to report the current default patcher height in pixels to the named receive object (See also the setdefaultpatcherheight message to Max.)
	 * @param {string} object_name [description]
	 */
	getdefaultpatcherheight(object_name: string): void;

	/**
	 * The word getdefaultpatcherwidth, followed by a symbol used as the name of a receive object, causes Max to report the current default patcher width in pixels to the named receive object (See also the setdefaultpatcherwidth message to Max.)
	 * @param {string} object_name [description]
	 */
	getdefaultpatcherwidth(object_name: string): void;

	/**
	 * The word getenablepathcache, followed by a symbol used as the name of a receive object, will report whether the path cache is enabled to the named receive object. (See also the enablepathcache message to Max.)
	 * @param {string} object_name [description]
	 */
	getenablepathcache(object_name: string): void;

	/**
	 * (Macintosh only.) The word getenablerefresh, followed by a symbol used as the name of a receive object, will report whether enhanced refresh is enabled to the named receive object. (See also the enablerefresh message to Max.)
	 * @param {string} object_name [description]
	 */
	getenablerefresh(object_name: string): void;

	/**
	 * The word geteventinterval, followed by a symbol used as the name of a receive object, will report the event interval to the named receive object. (See also the seteventinterval message to Max.)
	 * @param {string} object_name [description]
	 */
	geteventinterval(object_name: string): void;

	/**
	 * The word getfixwidthratio, followed by a symbol used as the name of a receive object, reports the current fix with ratio value to the named receive object. (See also the fixwidthratio message to Max.)
	 * @param {string} object_name [description]
	 */
	getfixwidthratio(object_name: string): void;

	/**
	 * The word getpollthrottle, followed by a symbol used as the name of a receive object, reports the current poll throttle value to the named receive object. (See also the setpollthrottle message to Max.)
	 * @param {string} object_name [description]
	 */
	getpollthrottle(object_name: string): void;

	/**
	 * The word getqueuethrottle, followed by a symbol used as the name of a receive object, causes Max to report the current queue throttle value to the named receive object. (See also the setqueuethrottle message to Max.)
	 * @param {string} object_name [description]
	 */
	getqueuethrottle(object_name: string): void;
	
	/**
	 * (Macintosh only) The word getrefreshrate, followed by a symbol used as the name of a receive object, causes Max to report the current refresh rate in Hertz to the named receive object. (See also the setrefreshrate message to Max.)
	 * @param {string} object_name [description]
	 */
	getrefreshrate(object_name: string): void;
	
	/**
	 * The word getruntime, followed by a symbol used as the name of a receive object,sends a 1 to the named receive object if the current version of Max is a runtime version, and a 0 if not.
	 * @param {string} object_name [description]
	 */
	getruntime(object_name: string): void;

	/**
	 * The word getsleep, followed by a symbol used as the name of a receive object, causes Max to report the sleep time to the named receive object. (See also the setsleep message to Max.)
	 * @param {string} object_name [description]
	 */
	getsleep(object_name: string): void;

	/**
	 * The word getslop, followed by a symbol used as the name of a receive object, reports the scheduler slop value to the named receive object. (See also the setslop message to Max.)
	 * @param {string} object_name [description]
	 */
	getslop(object_name: string): void;

	/**
	 * The word getqueuethrottle, followed by a symbol used as the name of a receive object, reports the maximum number of patcher UI update events processed at a time to the named receive object. (See also the setsysqelemthrottle message to Max.)
	 * @param {string} object_name [description]
	 */
	getsysqelemthrottle(object_name: string): void;

	/**
	 * The word getsystem, followed by a symbol used as the name of a receive object, will report the name of the system (macintosh or windows) to the named receive object.
	 * @param {string} object_name [description]
	 */
	getsystem(object_name: string): void;

	/**
	 * The word getversion, followed by a symbol used as the name of a receive object, will report the Max version number (e.g. 6.1.3 is reported as 1300) to the named receive object.
	 * @param {string} object_name [description]
	 */
	getversion(object_name: string): void;

	/**
	 * Hides the cursor if it is visible.
	 */
	hidecursor(): void;

	/**
	 * Hides the menu bar. Although the pull-down menus are not available when the menu bar is hidden, menu shortcut (accelerator) keys continue to work.
	 */
	hidemenubar(): void;

	/**
	 * The word htmlref, followed by an object name as a symbol, looks for a file called .html in the search path. If found, a web browser is opened to view the page.
	 * @param {string} object_name [description]
	 */
	htmlref(object_name: string): void;

	/**
	 * The word interval, followed by a number from 1 to 20, sets the timing interval of Max's internal scheduler in milliseconds. The default value is 1. This message only affects the scheduler when Overdrive is on and scheduler in audio interrupt (available with MSP) is off. (When using scheduler in audio interrupt mode the signal vector size determines the scheduler interval.) Larger scheduler intervals can improve CPU efficiency on slower computer models at the expense of timing accuracy.
	 * @param {number} value [description]
	 */
	interval(value: number): void;

	/**
	 * The word launchbrowser, followed by a URL as a symbol, opens a web browser to view the URL.
	 * @param {string} url [description]
	 */
	launchbrowser(url: string): void;

	/**
	 * The word maxcharheightforsubpixelantialiasing, followed by a number, sets a threshold font size (in points) for native subpixel aliasing. Since the look of subpixel antialiasing may be undesirable when working with large fonts as compared to regular antialiasing, this attribute lets you specify a threshold font size; if a font is larger than the specified size, it will be rendered using regular rather than subpixel antialiasing. 
	 * Note that Max honors your computer's system preferences - Max won't use subpixel aliasing if you've disabled it for your system. Setting this attribute value to zero value is 0 will always use regular antialiasing, and setting a very high value will always use subpixel antialiasing (unless it is disabled in system preferences).
	 * @param {number} points [description]
	 */
	maxcharheightforsubpixelantialiasing(points: number): void;

	/**
	 * When using the runtime version of Max *and* an active custom menubar object, maxinwmenu, followed by the number 1, will place an item called Status in the Windows menu, allowing users to see the Max window (labeled Status in the runtime version). When maxinwmenu is followed by 0 the menu item is not present. The default is for the Status item to be present in the Windows menu
	 * @param {0 | 1} enable [description]
	 */
	maxinwmenu(enable: 0 | 1): void;

	/**
	 * Displays the Max Window. If the Max window if not currently open, the window will be displayed. If the window is currently open, it will bring it to the front.
	 */
	maxwindow(): void;

	/**
	 * The word midi, followed by a variable-length message, allows messages to be sent to configure the system MIDI object.
	 * TODO: find out options
	 * @param {any[]} ...message [description]
	 */
	midi(...message: any[]): void;

	/**
	 * Prints the names of all current MIDI devices in the Max window. (See also MIDI Messages to Max.)
	 */
	midilist(): void;

	/**
	 * The word nativetextrendering, followed by a zero or one, toggles between using JUCE font rendering (0) and the platform-native font rendering for your computer (1) when displaying text in Max.
	 * @param {0 | 1} enable [description]
	 */
	nativetextrendering(enable: 0 | 1): void;

	/**
	 * (Macintosh) The word notypeinfo, followed by zero or one, sets whether Max saves files with traditional Mac OS four-character type information. By default, Max does save this information in files.
	 * @param {0 | 1} enable [description]
	 */
	notypeinfo(enable: 0 | 1): void;

	/**
	 * The word objectfile, followed by two symbols that specify an object name and a file name, creates a mapping between the external object and its filename. For example, the *~ object is in a file called times~ so at startup Max executes the command max objectfile *~ times~.
	 * @param {string} object_name [description]
	 * @param {string} file_name   [description]
	 */
	objectfile(object_name: string, file_name: string): void;

	/**
	 * The word openfile, followed by two symbols that specify an reference name and a file name or path name, attempts to open the patcher with the specified name. If successful, the patcher is associated with the reference symbol, which can be passed as argument to the buildcollective, buildplugin, and closefile messages to Max. The openfile message is intended for batch collective building.
	 * @param {string} reference_name [description]
	 * @param {string} file_name      [description]
	 */
	openfile(reference_name: string, file_name: string): void;

	/**
	 * List the current search paths in the Max window. There is a button in the File Preferences window that does this.
	 */
	paths(): void;

	/**
	 * innum specifies an input port, outnum specifies an output port, portname is the name of the port as a single symbol (i.e. It is necessary to use double quotes). An abbrev value is 0 for no abbrev (- in menu), 1 for 'a' and 26 for 'z'.
	 * @param {any[]} ...message [description]
	 */
	portabbrev(...message: any[]): void; // TODO: Documentation is unclear

	/**
	 * Enables (1) or disables (0) the port specified by portname. All ports are enabled by default.
	 * TODO: Seems to be missing a parameter
	 * @param {string} portname [description]
	 */
	portenable(portname: string) : 0 | 1;

	/**
	 * Similar to portabbrev, but offset is the channel offset added to identify input or output ports when a MIDI object can send to or receive from multiple ports by channel number. Must be a multiple of 16 (e.g. max midi portoffset innum PortA 16 sets the channel offset for PortA device to 16).
	 * @param {any[]} ...message [description]
	 */
	portoffset(...message: any[]): void;

	/**
	 * The word preempt, followed by a one (on) or zero (off), toggles Overdrive mode.
	 * @param {0 | 1} mode [description]
	 */
	preempt(mode: 0 | 1): void;

	/**
	 * The word pupdate, followed by two integer values that specify horizontal and vertical position, moves the mouse cursor to that global location.
	 * @param {number} x [description]
	 * @param {number} y [description]
	 */
	pupdate(x: number, y: number): void;

	/**
	 * Quits the Max application; equivalent to choosing Quit from the File menu. If there are unsaved changes to open files, and you haven't sent Max the clean message, Max will ask whether to save changes.
	 */
	quit(): void;

	/**
	 * Causes all Max windows to be updated.
	 */
	refresh(): void;

	/**
	 * (Macintosh only) The word setrefreshrate, followed by a number, sets the rate, in frames per second, at which the visual display is updated. On Macintosh systems, the rate at which the screen is refreshed is unrelated to the rate at which you change its contents. Better visual performance can be achieved - at the cost of a slight performance decrease in Jitter, and little or no performance decrease for audio processing - by specifying a higher frame rate. When enabled using the enablerefresh 1 message, the default rate is 28.57 FPS. Refresh enable is off by default.
	 * @param {number} fps [description]
	 */
	refreshrate(fps: number): void;

	/**
	 * The word runtime, followed by a zero or one and a message, executes the message if the current version of Max is a runtime version (1) or non-runtime (0).
	 * @param {0  | 1}           isRunstime [description]
	 * @param {any[]} ...message [description]
	 */
	runtime(isRunstime: 0 | 1, ...message: any[]): void;

	/**
	 * The word sendapppath, followed by a symbol, sends a symbol with the path of the Max application to the receive object named by the symbol.
	 * @param {string} object_name [description]
	 */
	sendapppath(object_name: string): void;

	/**
	 * The word sendinterval, followed by a symbol, sends the current scheduler interval to the receive object named by the symbol.
	 * @param {string} object_name [description]
	 */
	sendinterval(object_name: string): void;

	/**
	 * The word setdefaultpatcherheight, followed by an integer value greater than 100, sets the default patcher height in pixels.
	 * @param {number} height [description]
	 */
	setdefaultpatcherheight(height: number): void;

	/**
	 * The word setdefaultpatcherwidth, followed by an integer value greater than 100, sets the default patcher width in pixels.
	 * @param {number} width [description]
	 */
	setdefaultpatcherwidth(width: number): void;

	/**
	 * The word seteventinterval, followed by an integer value, sets the time between invocations of the event-level timer (The default value is 2 milliseconds). The event-level timer handles low priority tasks like drawing user interface updates and playing movies.
	 * @param {number} interval [description]
	 */
	seteventinterval(interval: number): void;

	/**
	 * The word setmirrortoconsole, followed by a 1 or 0, turns on or off (default is 0, off) mirroring of Max window posts to the system console. The system console is available on the Mac using Console.app, or on Windows using the DbgView program (free download from Microsoft).
	 * @param {0 | 1} enable [description]
	 */
	setmirrortoconsole(enable: 0 | 1): void;

	/**
	 * The word setpollthrottle, followed by an integer, sets the maximum number of events the scheduler executes each time it is called (The default value is 20). Setting this value lower may decrease accuracy of timing at the expense of efficiency.
	 * @param {number} event_count [description]
	 */
	setpollthrottle(event_count: number): void;

	/**
	 * The word setqueuethrottle, followed by an integer value, sets the maximum number of events handled at low-priority each time the low-priority queue handler is called (The default value is 2). Changing this value may affect the responsiveness of the user interface.
	 * @param {number} event_count [description]
	 */
	setqueuethrottle(event_count: number): void;

	/**
	 * The word setsleep, followed by a number, sets the time between calls to get the next system event, in 60ths of a second. The default value is 2.
	 * @param {number} interval [description]
	 */
	setsleep(interval: number): void;

	/**
	 * The word setslop, followed by a floating-point value, sets the scheduler slop value - the amount of time a scheduled event can be earlier than the current time before the time of the event is adjusted to match the current time. The default value is 25 milliseconds.
	 * @param {number} slop_value [description]
	 */
	setslop(slop_value: number): void;

	/**
	 * The word setsysqelemthrottle, followed by a number, sets the maximum number of patcher UI update events to process at a time. Lower values can lead to more processing power available to other low-priority Max processes, and higher values make the user interface more responsive (especially when using many bpatchers).
	 * @param {number} event_count [description]
	 */
	setsysqelemthrottle(event_count: number): void;

	/**
	 * Shows the cursor if it is hidden.
	 */
	showcursor(): void;

	/**
	 * Shows the menu bar after it has been hidden with hidemenubar.
	 */
	showmenubar(): void;

	/**
	 * Prints the number of symbols in the symbol table in the Max window.
	 */
	size(): void;

	/**
	 * The word system, followed by the name of an Operating System (windows or macintosh) and a message, will execute the message if Max is running on the named OS.
	 * @param {"windows" |       "macintosh"} os [description]
	 * @param {string}       message [description]
	 */
	system(os: "windows" | "macintosh", message: string): void;

	/**
	 * The word useslowbutcompletesearching, followed by a one (on) or zero (off), toggles complete file searching. When enabled, it causes files not found in Max's cache of the search path to be searched in the file system. This is necessary only in extremely rare cases where the file cache does not update properly. One such case is copying a file into the search path using a version of the Mac OS prior to 10.5.5 over a network. This option may cause patcher files to be loaded more slowly. The setting defaults to off with each launch of the application, and is not stored in the user's preferences. useslowbutcompletesearching 0 turns the setting off.
	 * @param {0 | 1} enable [description]
	 */
	useslowbutcompletesearching(enable: 0 | 1): void;
}


/**
 * A Maxobj is a Javascript representation of a Max object in a patcher. It is returned by various methods of a Javascript Patcher object, such as newobject().One important thing to keep in mind about a Maxobj is that it could eventually refer to an object that no longer exists if the underlying Max object is freed. The valid property can be used to test for this condition.
 * https://docs.cycling74.com/max7/vignettes/jsmaxobj
 */
declare class Maxobj {
	constructor();

	/**
	 * The location of an object in a patcher. When the object's rectangle is changed, it will move on screen if it is visible. The coordinates are stored in the following order: left, top, right, bottom.
	 * @type {number[]}
	 */
	rect: number[];

	/**
	 * The Max class (as opposed to the Javascript class, which is "Maxobj" and accessed via the standard class property) of the object.
	 * @type {string}
	 */
	maxclass: string;

	/**
	 * The Patcher object that contains the Maxobj
	 * @type {any}
	 */
	patcher: any;

	/**
	 * Is the object set to be hidden in a locked patcher
	 * @type {boolean}
	 */
	hidden: boolean;

	/**
	 * If the object is set to use one of the standard 16 colors, this property is the index of the color
	 * @type {number}
	 */
	colorindex: number;

	/**
	 * If there is another object after this one in the Patcher's list of objects, this property returns it, otherwise it returns a nil value
	 * @type {any}
	 */
	nextobject: any;

	/**
	 * The patcher-specific name of the object, as set with the Name... dialog
	 * @type {string}
	 */
	varname: string;

	/**
	 * Whether the object can be selected for text entry (a number box would be an example of an object whose canhilite property returns true)
	 * @type {boolean}
	 */
	canhilite: boolean;

	/**
	 * Whether the object is in the Patcher's background layer
	 * @type {boolean}
	 */
	background: boolean;

	/**
	 * Whether the object ignores clicks
	 * @type {boolean}
	 */
	ignoreclick: boolean;

	/**
	 * Whether the object is selected in an unlocked patcher window.
	 * @type {boolean}
	 */
	selected: boolean;

	/**
	 * If the Maxobj refers to an object is of Max class js, this returns the associated jsthis object
	 * TODO: Correct return type
	 * @type {any}
	 */
	js: any;

	/**
	 * Returns whether the Maxobj refers to a valid Max object
	 * @type {boolean}
	 */
	valid: boolean;

	/**
	 * Sends the object the message specified by the string, followed by any additional arguments provided. This is useful for sending messages to object which dynamically dispatch messages with the “anything” message, as is the case for instances of js, jsui, lcd, and others.
	 * @param {string} message     [description]
	 * @param {any[]}  ...anything [description]
	 */
	message(message: string, ...anything: any[]): void;

	/**
	 * Opens a help file describing the object, if it exists
	 */
	help(): void;

	/**
	 * If the object contains a patcher, this function returns a (Javascript) Patcher object. The optional index is used for specifying an instance number, which only applies to poly~ objects. If the object does not contain a subpatcher, a nil value is returned.
	 * @param  {number}  index [description]
	 * @return {Patcher}       [description]
	 */
	subpatcher(index: number): Patcher;

	/**
	 * Returns a Boolean value if the object has an entry in its message list for the message specified by the string. If the entry is not a message that can be sent by a user within Max (i.e., it's a C-level “untyped” message), false is returned. This doesn’t work for messages which are dynamically dispatched with the “anything” message, as is the case for instances of js, jsui, lcd, and others.
	 * @param  {string}  message [description]
	 * @return {boolean}         [description]
	 */
	understands(message: string): boolean;
 }


/**
 * The Patcher object is a Javascript representation of a Max patcher. You can find, create, modify, and iterate through objects within a patcher, send messages to a patcher that you would use with the thispatcher object, etc.
 * https://docs.cycling74.com/max7/vignettes/jspatcherobject
 */
declare class Patcher {
	/**
	 * Uses 100, 100, 400, 400 as default window coordinates
	 */
	constructor();
	
	/**
	 * left, top, bottom, right: global screen coordinates of the Patcher window
	 * @param {number} left   [description]
	 * @param {number} top    [description]
	 * @param {number} bottom [description]
	 * @param {number} right  [description]
	 */
	constructor(left: number, top: number, bottom: number, right: number);

	/**
	 * If the patcher is a subpatcher, the box property returns the Maxobj that contains it.
	 * @type {Maxobj}
	 */
	box: Maxobj;

	/**
	 * Number of objects in the patcher
	 * @type {number}
	 */
	count: number;

	/**
	 * The patcher’s file path on disk
	 * @type {string}
	 */
	filepath: string;

	/**
	 * If the patcher contains objects, this is the first one in its list. You can iterate through all objects in a patcher using the nextobject property of a Maxobj.
	 * @type {Maxobj}
	 */
	firstobject: Maxobj;

	/**
	 * The patcher's name (its window title, without any brackets that appear for subpatchers)
	 * @type {string}
	 */
	name: string;

	/**
	 * The patcher's locked state. This property is read-only in the runtime version of Max.
	 * @type {boolean}
	 */
	locked: boolean;

	/**
	 * Returns "patcher"
	 * @type {string}
	 */
	maxclass: string;

	/**
	 * Returns the Max class name of the parent object if this is a subpatcher, or a nil value if this is a top-level patcher.
	 * @type {string}
	 */
	parentclass: string;

	/**
	 * If the patcher is a subpatcher, this returns the parent patcher. Otherwise it returns a nil value.
	 * @type {Patcher}
	 */
	parentpatcher: Patcher;

	/**
	 * X/Y coordinate array for the scroll offset of a patcher is window
	 * @type {number[]}
	 */
	scrolloffset: number[];

	/**
	 * X/Y coordinate array for the patcher's fixed origin
	 * @type {number[]}
	 */
	scrollorigin: number[];

	/**
	 * A Javascript representation of the window associated with the patcher. For more information, see the Wind Object.
	 * @type {Wind}
	 */
	wind: Wind;

	/**
	 * Creates a new object of Max class classname in a patcher using the specified parameters and returns a Maxobj (see below) that represents it.
	 * @param  {string} classname [description]
	 * @param  {any[]}  ...params [description]
	 * @return {Maxobj}           [description]
	 */
	newobject(classname:string, ...params: any[]): Maxobj;

	/**
	 * Creates a new object of class classname in a patcher using the specified parameters and return a Maxobj (see below) that represents it.
	 * @param  {number} left      [description]
	 * @param  {number} top       [description]
	 * @param  {string} classname [description]
	 * @param  {any[]}  ...args   [description]
	 * @return {Maxobj}           [description]
	 */
	newdefault(left: number, top: number, classname:string, ...args: any[]): Maxobj;
	
	// TODO: Are from_object: any actually strings, or Maxobjs?

	/**
	 * Connects two objects (of type Maxobj) in a patcher. Indices for the outlet and inlet arguments start at 0 for the leftmost inlet or outlet.
	 * @param {any}    from_object [description]
	 * @param {number} outlet      [description]
	 * @param {any}    to_object   [description]
	 * @param {number} inlet       [description]
	 */
	connect(from_object: any, outlet: number, to_object: any, inlet: number): void;

	/**
	 * Connects two objects (of type Maxobj) in a patcher with a hidden patch cord. Arguments are the same as for the connect message above.
	 * @param {any}    from_object [description]
	 * @param {number} outlet      [description]
	 * @param {any}    to_object   [description]
	 * @param {number} inlet       [description]
	 */
	hiddenconnect(from_object: any, outlet: number, to_object: any, inlet: number): void;

	/**
	 * Disconnects an existing connection between two objects (of type Maxobj) in a patcher. Indices for the outlet and inlet arguments start at 0 for the leftmost inlet or outlet.
	 * @param {any}    from_object [description]
	 * @param {number} outlet      [description]
	 * @param {any}    to_object   [description]
	 * @param {number} inlet       [description]
	 */
	disconnect(from_object: any, outlet: number, to_object: any, inlet: number): void;

	/**
	 * For all objects in a patcher, calls the function with the each object's Maxobj as an argument. Does not recurse into subpatchers.
	 * @param {any} func [description]
	 */
	apply(func: any): void;

	/**
	 * For all objects in a patcher, calls the function with the each object's Maxobj as an argument.
	 * Same as apply() except that applydeep() recurses into subpatchers (depth first).
	 * @param {any} func [description]
	 */
	applydeep(func: any): void;

	/**
	 * For all objects in a patcher, run the test_function for each object's Maxobj as an argument. If the test_function returns true, the action_function is executed with the Maxobj as an argument. Does not recurse into subpatchers.
	 * @param {any} action_function [description]
	 * @param {any} test_function   [description]
	 */
	applyif(action_function: any, test_function: any): void;

	/**
	 * For all objects in a patcher, run the test_function for each object's Maxobj as an argument. If the test_function returns true, the action_function is executed with the Maxobj as an argument.
	 * Same as applyif() except that applydeepif() recurses into subpatchers
	 * @param {any} action_function [description]
	 * @param {any} test_function   [description]
	 */
	applydeepif(action_function: any, test_function: any): void;

	/**
	 * Removes the object (a Maxobj passed as an argument) from a patcher
	 * @param {any} obj [description]
	 */
	remove(obj: any): void;

	/**
	 * Returns the first object found in a patcher with the given name. The name is a local name as specified by the Name... dialog in a patcher, not the name of a send or receive object. You can also set an object's name using the varname property of a Maxobj.
	 * @param  {string} name [description]
	 * @return {Maxobj}      [description]
	 */
	getnamed(name: string): Maxobj;

	/**
	 * Calls the function on each object in a patcher, passing it as a Maxobj argument to the function. If the function returns true, the iteration stops and the Maxobj object is returned as the value of the getlogical() method. Otherwise getlogical() returns a nil value. Please note that access to patcher attributes in global code is not supported. This requires the use of loadbang().
	 * @param {any} func [description]
	 */
	getlogical(func: any): void;

	/**
	 * Moves the object to the front of the current layer to which it is assigned (either background or foreground). You can change the layer by setting the background property of a Maxobj.
	 * @param {any} obj [description]
	 */
	bringtofront(obj: any): void;

	/**
	 * Moves the object to the back of the current layer to which it is assigned (either background or foreground). You can change the layer by setting the background property of a Maxobj.
	 * @param {any} obj [description]
	 */
	sendtoback(obj: any): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// PolyBuffer                                                                                                         // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jspolybuffer

/**
 * The PolyBuffer object in JS is a companion to the polybuffer~ object you create in a Max patcher. It provides the ability to access a group of buffer~ objects associated with a name.
 */
declare class PolyBuffer {

	/**
	 * If no name is provided as an argument then instantiation will fail.
	 * @param {string} name [description]
	 */
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

	/**
	 * Return an array containing index, name, path, duration, channel, and sample rate.
	 * @return {string[]} [description]
	 */
	dump(): string[]; 	
	
	/**
	 * Return an array containing names of the buffer~ objects and file names.
	 * @param  {string}   filename [description]
	 * @return {string[]}          [description]
	 */
	getshortname(filename: string): string[]; 	

	/**
	 * Return an array containing names of all the buffer~ objects.
	 * @param {string} filename [description]
	 */
	getbufferlist(filename: string): void;
 }


/**
 * A task is a function that can be scheduled or repeated. You can set the arguments to the function as well as the object that will be this when the function is called.
 * https://docs.cycling74.com/max7/vignettes/jstaskobject
 */
declare class Task {

	/**
	 * The object argument represents the this during the execution of the function. Use the this keyword (referring to the jsthis object) to be able to use outlets and other js object features. The function argument represents the function you want to execute, and arguments (an array) represents the arguments to pass to the function. The object and arguments arguments are optional. If not present, the parent of the function object (typically jsthis) will be assumed, and there will be no arguments supplied to the function.
	 * @param {any}   func    [description]
	 * @param {any}   obj     [description]
	 * @param {any[]} ...args [description]
	 */
	constructor(func: any, obj?: any, ...args: any[]);

	/**
	 * The arguments passed to the task function. arguments[0] is the first argument.
	 * @type {any[]}
	 */
	arguments: any[];

	/**
	 * The function that is executed in the Task. You can even change this within the task function itself.
	 * @type {any}
	 */
	function: any;

	/**
	 * Whether the Task is running or not. Within a function executing within a task, this will always be 1.
	 * @type {boolean}
	 */
	running: boolean;

	/**
	 * The time in milliseconds between repeats of the task function. The default interval is 500 ms.
	 * See documentation for an example.
	 * @type {number}
	 */
	interval: number;

	/**
	 * The object that is assigned to be the this in the task function. Most often this will be your jsthis object, so you can, for example access the outlet() method. You set up your jsthis object to be the this by creating a task with the keyword this as the first argument.
	 * See documentation for an example.
	 * @type {any}
	 */
	object: any;

	/**
	 * The number of times the task function has been called. Outside of a task function, the value of iterations is always 0. The value resets each time the task is started (using the repeat(), execute(), or schedule() methods.
	 * @type {number}
	 */
	iterations: number;

	/**
	 * Repeat a task function. The optional number argument specifies the number of repetitions. If the argument is not present or is negative, the task repeats until it is cancelled. The optional initialdelay argument sets the delay in milliseconds until the first iteration.
	 * See documentation for an example.
	 * @param {number} times [description]
	 */
	repeat(times: number): void;

	/**
	 * Run the task once, right now. Equivalent to calling the task function with its arguments.
	 */
	execute(): void;

	/**
	 * Run the task once, with a delay. The optional delay argument sets the time (in milliseconds) before the task function will be executed.
	 * @param {number} delay [description]
	 */
	schedule(delay?: number): void;

	/**
	 * If a task is scheduled or repeating, any future executions are cancelled. This method can be used within a task function for a self-canceling Task. 
	 * See documentation for an example.
	 */
	cancel(): void;
}


/**
 * The Wind object is a property of a Patcher that represents its window. You cannot create a new Wind or access other types of windows such as that of a Max table object.
 * https://docs.cycling74.com/max7/vignettes/jswindobj
 */
declare class Wind {

	/**
	 * The Patcher object associated with the window.
	 * @type {Patcher}
	 */
	assoc: Patcher;

	/**
	 * The Max class of the object associated with the window.
	 * @type {string}
	 */
	assocclass: string;

	/**
	 * Has the window’s contents been modified? This property is read-only in the runtime version of Max.
	 * @type {boolean}
	 */
	dirty: boolean;

	/**
	 * Does the window have a grow area?
	 * @type {boolean}
	 */
	hasgrow: boolean;

	/**
	 * Does the window have a horizontal scroll bar?
	 * @type {boolean}
	 */
	hashorizscroll: boolean;

	/**
	 * Does the window have a vertical scroll bar?
	 * @type {boolean}
	 */
	hasvertscroll: boolean;

	/**
	 * Does the window have a zoom box?
	 * @type {boolean}
	 */
	haszoom: boolean;

	/**
	 * Does the window have a window title bar?
	 * @type {boolean}
	 */
	hastitlebar: boolean;

	/**
	 * An array of four coordinates (left, top, right, bottom) representing the window’s location in global coordinates.
	 * @type {number[]}
	 */
	location: number[];

	/**
	 * The Wind object of the next patcher visible in the application’s list of windows The first Wind object can be accessed using the frontpatcher property of the Max object (as max.frontpatcher.wind).
	 * @type {Wind}
	 */
	next: Wind;

	/**
	 * An array of two coordinates (width, height) representing the window’s size.
	 * @type {number[]}
	 */
	size: number[];

	/**
	 * The window’s title.
	 * @type {string}
	 */
	title: string;

	/**
	 * Can you see the window?
	 * @type {boolean}
	 */
	visible: boolean;

	/**
	 * Move the window in front of all other windows.
	 */
	bringtofront(): void;

	/**
	 * Scroll the window so that x and y are at the top-left corner.
	 * @param {number} x [description]
	 * @param {number} y [description]
	 */
	scrollto(x: number, y: number): void;

	/**
	 * Moves the window behind all other windows.
	 */
	sendtoback(): void;

	/**
	 * Set the global location of the window according to the coordinates passed in as arguments.
	 * @param {number} left   [description]
	 * @param {number} top    [description]
	 * @param {number} bottom [description]
	 * @param {number} right  [description]
	 */
	setlocation(left: number, top: number, bottom: number, right: number): void;
 }


/**
 * The SQLite object provides access to the SQLite database system (see http://www.sqlite.org for more information). A companion object, SQLResult, is required for most database operations.
 * https://docs.cycling74.com/max7/vignettes/jssqliteobject
 */
declare class SQLite {

	/**
	 * No arguments are required for the instantiation of an SQLite object. However, all future calls to the database will be through this instance of the object.
	 */
	constructor();

	/**
	 * Open an SQLite-format file for database operations. The required filename argument is the file to access. The optional on_disk argument determines if the file should be memory-based (0) or disk-based (1). The optional must_exist argument, if non-zero, requires the file to exist to be opened. If zero, then a file will be created if it does not exist.
	 * This method returns an error code if unsuccessful, or a zero if the call results in an opened database.
	 * @param  {string} filename   [description]
	 * @param  {number} on_disk    [description]
	 * @param  {number} must_exist [description]
	 * @return {number}            [description]
	 */
	open(filename: string, on_disk: number, must_exist: number): number;

	/**
	 * Closes a previously opened SQLite database.
	 */
	close(): void;

	/**
	 * Perform an SQL command on the database. This command must be in standard SQL language syntax, limited to the operations that SQLite supports. The result argument will return with an SQLResult object with any applicable results.
	 * The method returns an error code if unsuccessful, or a zero if the call results in a completed operation.
	 * See documentation for an example.
	 * @param  {string} command [description]
	 * @param  {any}    result  [description]
	 * @return {number}         [description]
	 */
	exec(command: string, result: any): number;

	/**
	 * Start an SQL transaction on the database. This allows you to batch database updates, and to roll back sets of changes if they do not all complete. When you are done with batch updates, a call to endtransaction() should be executed.
	 */
	begintransaction(): void;

	/**
	 * Complete a transaction and flush all database writes to the file.
	 */
	endtransaction(): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SQLResult                                                                                                          // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jssqlresultobject

/**
 * An SQLResult object is a container for results obtained in an SQLite.exec call. Not every exec() call will produce results, but any database query (SELECT in particular) will generate an SQLResult object even if the result is empty.
 * https://docs.cycling74.com/max7/vignettes/jssqlresultobject
 */
declare class SQLResult {
	constructor();

	/**
	 * Returns the number of records that were returned in the SQLResult object.
	 * @return {number} [description]
	 */
	numrecords(): number;

	/**
	 * Returns the number of fields in the dataset returned in the SQLResult object.
	 * @return {number} [description]
	 */
	numfields(): number;

	/**
	 * Returns the name of a column at the requested index.
	 * @param  {number} index [description]
	 * @return {string}       [description]
	 */
	fieldname(index: number): string;	

	/**
	 * Returns the value of the column identified by index, and in the record identified by record_no.
	 * See documentation for an example.
	 * @param  {number} index     [description]
	 * @param  {number} record_no [description]
	 * @return {any}              [description]
	 */
	value(index: number, record_no: number): any;				
}