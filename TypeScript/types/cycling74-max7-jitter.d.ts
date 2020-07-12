/*
 * Documentation is property of Cycling '74 and published with permission.
 */



/**
 * JitterObject
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterObject.html
 */
declare class JitterObject extends Maxobj {
	/**
	 * Creates Jitter objects. (use JitterMatrix for jit.matrix) 
	 * @param {string} object_name [description]
	 * @param {any[]}  ...params   [description]
	 */
	constructor(object_name: string, ...params: any[]);

	/**
	 * Deletes the JitterObject
	 */
	freepeer(): void;

	/**
	 * [getregisteredname description]
	 * @return {string} [description]
	 */
	getregisteredname(): string;
}


/**
 * JitterMatrix
 * The jit.matrix object is a named matrix which may be used for data storage and retrieval, resampling, and matrix type and planecount conversion operations.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterMatrix.html
 */
declare class JitterMatrix extends JitterObject {
	constructor(...args: any[]);  	// TODO:
									// From JitterReposUtils.js:
									// var s = new JitterMatrix(2, "long", x, y);

	/**
	 * Matrix adaptation flag.
	 * @type {number}
	 */
	adapt: number;

	// TODO: Probably number[] for this and the following {any}.

	/**
	 * The dimensions of matrix data.
	 * @type {any}
	 */
	dim: any;

	/**
	 * The byte stride per dimension.
	 * @type {any}
	 */
	dimstride: any;

	/**
	 * The destination dimension end position.
	 * @type {any}
	 */
	dstdimend: any;

	/**
	 * The destination dimension start position.
	 * @type {any}
	 */
	dstdimstart: any;

	/**
	 * Matrix interpolation flag.
	 * @type {number}
	 */
	interp: number;

	/**
	 * The name of the matrix.
	 * @type {string}
	 */
	name: string;

	/**
	 * The number of planes in matrix data.
	 * @type {number}
	 */
	planecount: number;

	/**
	 * Maps input places to output planes.
	 * @type {any}
	 */
	planemap: any;

	/**
	 * Total byte size of matrix.
	 * @type {number}
	 */
	size: number;

	/**
	 * The source dimension end position.
	 * @type {any}
	 */
	srcdimend: any;

	/**
	 * The source dimension start position.
	 * @type {any}
	 */
	srcdimstart: any;

	/**
	 * The matrix data type.
	 * @type {string}
	 */
	type: string;

	/**
	 * Destdim use flag.
	 * @type {number}
	 */
	usedstdim: number;

	/**
	 * Srcdim use flag.
	 * @type {number}
	 */
	usesrcdim: number;

	/**
	 * Outputs the currently stored matrix.
	 */
	bang(): void;

	/**
	 * Sets all matrix values to zero.
	 */
	clear(): void;

	/**
	 * Export the current frame as an image file with the name specified by the first argument.
	 * @param {string} filename  [description]
	 * @param {string} file_type [description]
	 * @param {0   |         1}           use_dialog [description]
	 */
	exportimage(filename: string, file_type: string, use_dialog: 0 | 1): void;

	/**
	 * Exports a matrix as a QuickTime movie.
	 * @param {string} filename  [description]
	 * @param {number} FPS       [description]
	 * @param {string} codec     [description]
	 * @param {string} quality   [description]
	 * @param {number} timescale [description]
	 */
	exportmovie(filename: string, FPS: number, codec: string, quality: string, timescale: number): void;

	/**
	 * exprfill(plane, expression)
	 * @param {number} plane      [description]
	 * @param {string} expression [description]
	 */
	exprfill(plane: number, expression: string): void;

	/**
	 * The word fillplane, followed by an integer that specifies a plane number and a value, will fill the specified plane with the single value.
	 * @param {number} plane [description]
	 * @param {number} value [description]
	 */
	fillplane(plane: number, value: number): void;

	/**
	 * Sets all cells to the value specified by value(s) and output the data.
	 * @param {number[]} values [description]
	 */
	float(values: number[]): void;

	/**
	 * Sends the value(s) in the cell specified by position out the right outlet of the object as a list in the form cell cell-position0.
	 * @param {number[]} position [description]
	 */
	getcell(position: number[]): void;

	/**
	 * Imports a QuickTime movie into the matrix.
	 * @param {string} filename    [description]
	 * @param {number} time_offset [description]
	 */
	importmovie(filename: string, time_offset: number): void;

	/**
	 * Sets all cells to the value specified by value(s) and output the data.
	 * @param {number[]} values [description]
	 */
	int(values: number[]): void;

	/**
	 * Copies the texture specified by texture-name to the matrix.
	 * @param {string} texture_name [description]
	 */
	jit_gl_texture(texture_name: string): void;

	/**
	 * Sets all cells to the value specified by value(s) and output the data.
	 * @param {number[]} values [description]
	 */
	list(values: number[]): void;

	/**
	 * The word op, followed by the name of a jit.op object operator and a set of values, is equivalent to including a jit.op object with the specified operator set as an attribute and this jit.matrix object specified as the output matrix.
	 * @param {any[]} ...params [description]
	 */
	op(...params: any[]): void;

	/**
	 * Reads Jitter binary data files (.jxf) into a matrix set.
	 * @param {string} filename [description]
	 */
	read(filename: string): void;

	/**
	 * Sets all cells to the value specified by value(s).
	 * @param {number[]} values [description]
	 */
	setall(values: number[]): void;

	/**
	 * Sets the cell specified by position to the value specified by value.
	 * @param {number[]}  position     [description]
	 * @param {number}    plane        [description]
	 * @param {number}    plane_number [description]
	 * @param {number |            number[]}    val [description]
	 * @param {number[]}  values       [description]
	 */
	setcell(position: number[], plane: number, plane_number: number, val: number | number[], values: number[]): void;

	/**
	 * The word setcell1d, followed by a number specifying an x coordinate and a list of values, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (1) is fixed.
	 * @param {number[]} ...params [description]
	 */
	setcell1d(...params: number[]): void;

	/**
	 * The word setcell2d, followed by a pair of numbers specifying x and y coordinates and a list of values, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (2) is fixed.
	 * @param {number[]} ...params [description]
	 */
	setcell2d(...params: number[]): void;

	/**
	 * The word setcell3d, followed by three numbers specifying x, y, and z coordinates and a list of values, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (3) is fixed.
	 * @param {number[]} ...params [description]
	 */
	setcell3d(...params: number[]): void;
	
	/**
	 * The word setplane1d, followed by a number specifying an x coordinate, a number specifying a plane, and a value, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (1) is fixed, or use the "plane" token to specify which plane to set.
	 * @param {number[]} ...params [description]
	 */
	setplane1d(...params: number[]): void;

	/**
	 * The word setplane2d, followed by a pair of numbers specifying x and y coordinates, a number specifying a plane, and a value, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (2) is fixed, or use the "plane" token to specify which plane to set.
	 * @param {number[]} ...params [description]
	 */
	setplane2d(...params: number[]): void;

	/**
	 * The word setplane3d, followed by three numbers specifying x, y, and z coordinates, a number specifying a plane, and a value, is similar to the setcell message but without the need to use a "val" token to separate the coordinates from the value since the dimension count (1) is fixed, or use the "plane" token to specify which plane to set.
	 * @param {number[]} ...params [description]
	 */
	setplane3d(...params: number[]): void;

	/**
	 * Sets all cells to the value specified by value(s).
	 * @param {number[]} ...params [description]
	 */
	val(...params: number[]): void;

	/**
	 * Writes matrix set as a Jitter binary data file (.jxf).
	 * @param {string} filename [description]
	 */
	write(filename: string): void;
}


/**
 * JitterReposUtils
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterReposUtils.html
 */
declare class JitterReposUtils {
	static interpbits: number;

	static cartopolmatrix2dfloat32(impulse: JitterMatrix, xs: number, ys: number, issigned: boolean) : JitterMatrix;
	static genkernel2dfloat32(): JitterMatrix;
	static makemap_cartopol(x: number, y: number, xscale: number, yscale: number) : JitterMatrix;
	static makemap_multi(x: number, y: number, xscale: number, yscale: number) : JitterMatrix;
	static makemap_normal(x: number, y: number) : JitterMatrix;
	static makemap_pinch(x: number, y: number, kx: number, ky: number, xpinch: number, ypinch: number, xamp: number,
		yamp: number, power: number) : JitterMatrix;
	static pack2plane(uno: JitterMatrix, dos: JitterMatrix) : JitterMatrix;
	static pinch2dfloat32(impulse: JitterMatrix, xpinch: number, ypinch: number, xamp: number, yamp: number,
		power: number) : JitterMatrix;
	static rel2abs(rela: JitterMatrix) : JitterMatrix;
	static unpack2plane(cero: JitterMatrix, uno: JitterMatrix, dos: JitterMatrix) : void;
	static upsample1d(inmat: JitterMatrix, l: number) : JitterMatrix;
	static upsample2d(inmat: JitterMatrix, x: number, y: number) : JitterMatrix;
}


/**
 * JitterListener
 * JitterListener objects take two arguments: the object that they “listen” to, and the function that will be called when the object triggers an event. Our JitterListener object is set to listen to our jit.window object (mywindow). The getregisteredname() property of a JitterObject object returns the name by which that object can be accessed by the JitterListener (in the case of jit.window objects, this will be the same as name of the drawing context). Whenever our jit.window object generates an event, a function called thecallback() will be triggered in our JavaScript code. Now that we’ve instantiated a JitterListener, we can (in most cases) leave it alone and simply deal with the mechanics of the callback function it triggers in response to an event from the object it listens to. 
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterListener.html
 */
declare class JitterListener extends JitterObject {
	/**
	 * JitterListener objects take two arguments: the object that they “listen” to, and the function that will be called when the object triggers an event.
	 * @param {string} object_name [description]
	 * @param {Object} callback    [description]
	 */
	constructor(object_name: string, callback: Object);

	/**
	 * The callback function to handle the event
	 * @type {Object}
	 */
	function: Object;

	/**
	 * The object to listen to.
	 * @type {JitterObject}
	 */
	object: JitterObject;

	/**
	 * Unknown
	 * @type {string}
	 */
	subjectname: string;
} 	


/**
 * JitterGUIUtils
 * classes for managing 3D UI objects.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterGUIUtils.html 
 */
declare class JitterGUIUtils { 	
	static trackers: JitterGUITracker[];
	static add_client(dest: any, newclient: any): any;
	static add_tracker(dest: any): any;
	static delete_bogus_clients(dest: any): any;
	static init(dest: any): any;
}


/**
 * JitterGUITracker
 * Data and interface are considered private. arbitrates between subclasses of JitterGUIElement on a given render destination.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterGUITracker.html
 */
declare class JitterGUITracker {
 	constructor(dest: any);
	add_client(newclient: any): any;
	delete_bogus_clients(): any;
	delete_duplicate_clients(newclient: any): any;
	make_listener(): any;
} 	


/**
 * JitterEvent
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterEvent.html
 */
declare class JitterEvent {
	/**
	 * depends on event type
	 * @type {any}
	 */
	args: any;

	/**
	 * Name of the event to be handled
	 * @type {string}
	 */
	eventname: string;

	/**
	 * The name of the object to listen to.
	 * @type {string}
	 */
	subjectname: string;
}


/**
 * JitterGUIElement
 * Subclass this to make a UI object.
 * http://max-javascript-reference.tim-schenk.de/symbols/JitterGUIElement.html
 */
declare class JitterGUIElement {
	constructor(mobj: any);
	delete_me: any;
	destination: any;
	frontmost: any;
	highlight: any;
	intersect: any;
	jitterobj: JitterObject;
	localint: number[];	 	
	maxobj: Maxobj;
	stilldown: any;

	/**
	 * set true to get events even if we are behind another object
	 * @type {boolean}
	 */	
	unblockable: boolean;
	unique_index: any;
	val: number;
	was_frontmost: any;
	worldint: number[];	
	drawto(destination: any): void;
	free(): any;

	/**
	 * return the intersection of the unit quad in world space with the line defined by raystart and rayend.
	 * @param  {any} raystart [description]
	 * @param  {any} rayend   [description]
	 * @param  {any} p1       [description]
	 * @return {any}          [description]
	 */
	get_intersect(raystart: any, rayend: any, p1: any): any;
	handle_event(event: JitterEvent): any;

	/**
	 * set the drawing destination.
	 * @param  {any} destination [description]
	 * @return {any}             [description]
	 */
	init(destination: any): any;

	/**
	 * parse jitter-style js arguments.
	 * @param {any[]} ...args [description]
	 */
	set_attr_args(...args: any[]): void;

	/**
	 * adding the unique_index property allows one js instance to own multiple JitterGUIElements
	 * @param  {any} k [description]
	 * @return {any}   [description]
	 */
	set_unique_index(k: any): any;
	update(): any;
}


/**
 * Jitter3dUtils
 * http://max-javascript-reference.tim-schenk.de/symbols/Jitter3dUtilsInterface.html
 * Max folder/jsextensions/jitter/Jitter3DUtils.js
 */

declare class Jitter3DUtils {
	/**
	 * add quats
	 * @param {number[]} q1 [description]
	 * @param {number[]} q2 [description]
	 * @param {number[]} q3 [description]
	 */
	static add_quats(q1: number[], q2: number[], q3: number[]): void;

	/**
	 * convert angle/axis rotation to quaternion.
	 * @param {number[]} axis [description]
	 * @param {number[]} quat [description]
	 */
	static axis_to_quat(axis: number[], quat: number[]): void;

	/**
	 * build rotation matrix m for the quaternion q.
	 * @param {number[]} m [description]
	 * @param {number[]} q [description]
	 */
	static build_rotmatrix(m: number[], q: number[]): void;

	/**
	 * set p1 to the point on sphere closest to line segment.
	 * @param {number[]} line_a [description]
	 * @param {number[]} line_b [description]
	 * @param {number[]} center [description]
	 * @param {number}   r      [description]
	 * @param {number[]} p1     [description]
	 */
	static closest_line_sphere(line_a: number[], line_b: number[], center: number[], r: number, p1: number[]): void;

	/**
	 * return true if the ray defined by the line's two points intersects the quad.
	 * @param  {number[]} line_a [description]
	 * @param  {number[]} line_b [description]
	 * @param  {number[]} pos    [description]
	 * @param  {number[]} rot    [description]
	 * @param  {number[]} scale  [description]
	 * @param  {number[]} p1     [description]
	 * @param  {number[]} p2     [description]
	 * @return {boolean}         [description]
	 */
	static intersect_line_quad(line_a: number[], line_b: number[], pos: number[], rot: number[], scale: number[],
		p1: number[], p2: number[]): boolean;

	/**
	 * if the ray defined by the line's two points intersects the sphere, set p1 to the closest point of intersection.
	 * @param  {number[]} line_a [description]
	 * @param  {number[]} line_b [description]
	 * @param  {number[]} center [description]
	 * @param  {number}   r      [description]
	 * @param  {number[]} p1     [description]
	 * @return {boolean}         [description]
	 */
	static intersect_line_sphere(line_a: number[], line_b: number[], center: number[], r: number, p1: number[]): boolean;
	
	/**
	 * [normalize_quat description]
	 * @param {number[]} q [description]
	 */
	static normalize_quat(q: number[]): void;

	/**
	 * convert quaternion to angle/axis rotation.
	 * @param {number[]} quat [description]
	 * @param {number[]} axis [description]
	 */
	static quat_to_axis(quat: number[], axis: number[]): void;

	/**
	 * [transform_point description]
	 * @param {number[]} p_in [description]
	 * @param {number[]} m    [description]
	 */
	static transform_point(p_in: number[], m: number[]): void;

	/**
	 * add src1 and src2, save the result in dst
	 * @param {number[]} src1 [description]
	 * @param {number[]} src2 [description]
	 * @param {number[]} dst  [description]
	 */
	static vadd(src1: number[], src2: number[], dst: number[]): void;

	/**
	 * copy the three indicies from v1 to v2
	 * @param {number[]} v1 [description]
	 * @param {number[]} v2 [description]
	 */
	static vcopy(v1: number[], v2: number[]): void;

	/**
	 * create the cross product of v1 and v2?
	 * @param {number[]} v1    [description]
	 * @param {number[]} v2    [description]
	 * @param {number[]} cross [description]
	 */
	static vcross(v1: number[], v2: number[], cross: number[]): void;

	/**
	 * divide src1 and src2, save the result in dst
	 * @param {number[]} src1 [description]
	 * @param {number[]} src2 [description]
	 * @param {number[]} dst  [description]
	 */
	static vdiv(src1: number[], src2: number[], dst: number[]): void;

	/**
	 * [vdot description]
	 * @param  {number[]} v1 [description]
	 * @param  {number[]} v2 [description]
	 * @return {number}      [description]
	 */
	static vdot(v1: number[], v2: number[]): number;

	/**
	 * distance-squared function
	 * @param  {number[]} v [description]
	 * @return {number}     [description]
	 */
	static vlength(v: number[]): number; 	

	/**
	 * cheaper distance-squared function
	 * @param  {number[]} v [description]
	 * @return {number}     [description]
	 */
	static vlength2(v: number[]): number;

	/**
	 * multiply src1 and src2, save the result in dst
	 * @param {number[]} src1 [description]
	 * @param {number[]} src2 [description]
	 * @param {number[]} dst  [description]
	 */
	static vmul(src1: number[], src2: number[], dst: number[]): void;

	/**
	 * [vnormal description]
	 * @param {number[]} v [description]
	 */
	static vnormal(v: number[]): void;

	/**
	 * scale the vector
	 * @param {number[]} v   [description]
	 * @param {number}   div [description]
	 */
	static vscale(v: number[], div: number): void;

	/**
	 * set all three indicies of v to x, y, z
	 * @param {number[]} v [description]
	 * @param {number}   x [description]
	 * @param {number}   y [description]
	 * @param {number}   z [description]
	 */
	static vset(v: number[], x: number, y: number, z: number): void;

	/**
	 * subtract src1 and src2, save the result in dst
	 * @param {number[]} src1 [description]
	 * @param {number[]} src2 [description]
	 * @param {number[]} dst  [description]
	 */
	static vsub(src1: number[], src2: number[], dst: number[]): void;

	/**
	 * set all three indicies of v to 0.0
	 * @param {number[]} v [description]
	 */
	static vzero(v: number[]): void;

	/**
	 * convert rotation in Euler angles (xyz) to angle/axis rotation.
	 * @param {number[]} xyz  [description]
	 * @param {number[]} axis [description]
	 */
	static xyz_to_axis(xyz: number[], axis: number[]): void;
}

