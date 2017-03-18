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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JitterReposUtils                                                                                                   // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// http://max-javascript-reference.tim-schenk.de/symbols/JitterReposUtils.html

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


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JitterListener                                                                                                     // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// http://max-javascript-reference.tim-schenk.de/symbols/JitterListener.html

declare class JitterListener extends JitterObject {
	constructor(object_name: string, callback: Object);
	function: Object;
	object: JitterObject;
	subjectname: string;
} 	


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JitterGUIUtils                                                                                                     // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// http://max-javascript-reference.tim-schenk.de/symbols/JitterGUIUtils.html

declare class JitterGUIUtils { 	
	static trackers: JitterGUITracker[];
	static add_client(dest, newclient): any;
	static add_tracker(dest): any;
	static delete_bogus_clients(dest): any;
	static init(dest): any;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JitterGUITracker                                                                                                   // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// http://max-javascript-reference.tim-schenk.de/symbols/JitterGUITracker.html

declare class JitterGUITracker {
 	constructor(dest: any);
	add_client(newclient): any;
	delete_bogus_clients(): any;
	delete_duplicate_clients(newclient): any;
	make_listener(): any;
} 	


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JitterEvent                                                                                                        // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// http://max-javascript-reference.tim-schenk.de/symbols/JitterEvent.html

declare class JitterEvent {
	args: any;
	eventname: string;
	subjectname: string;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JitterGUIElement                                                                                                   // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// http://max-javascript-reference.tim-schenk.de/symbols/JitterGUIElement.html

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
	unblockable: boolean;
	unique_index: any;
	val: number;
	was_frontmost: any;
	worldint: number[];	
	drawto(destination: any): void;
	free(): any;
	get_intersect(raystart: any, rayend: any, p1: any): any;
	handle_event(event: JitterEvent): any;
	init(destination: any): any;
	set_attr_args(...args: any[]);
	set_unique_index(k: any): any;
	update(): any;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Jitter3dUtils                                                                                                      // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// http://max-javascript-reference.tim-schenk.de/symbols/Jitter3dUtilsInterface.html
// /jsextensions/jitter/Jitter3DUtils.js

declare class Jitter3DUtils {
	static add_quats(q1: number[], q2: number[], q3: number[]): void;
	static axis_to_quat(axis: number[], quat: number[]): void;
	static build_rotmatrix(m: number[], q: number[]): void;
	static closest_line_sphere(line_a: number[], line_b: number[], center: number[], r: number, p1: number[]): void;
	static intersect_line_quad(line_a: number[], line_b: number[], pos: number[], rot: number[], scale: number[],
		p1: number[], p2: number[]): boolean;
	static intersect_line_sphere(line_a: number[], line_b: number[], center: number[], r: number, p1: number[]): boolean;
	static normalize_quat(q: number[]): void;
	static quat_to_axis(quat: number[], axis: number[]): void;
	static transform_point(p_in: number[], m: number[]): void;
	static vadd(src1: number[], src2: number[], dst: number[]): void;
	static vcopy(v1: number[], v2: number[]): void;
	static vcross(v1: number[], v2: number[], cross: number[]): void;
	static vdiv(src1: number[], src2: number[], dst: number[]): void;
	static vdot(v1: number[], v2: number[]): number;
	static vlength(v: number[]): number; 	
	static vlength2(v: number[]): number;
	static vmul(src1: number[], src2: number[], dst: number[]): void;
	static vnormal(v: number[]): void;
	static vscale(v: number[], div: number): void;
	static vset(v: number[], x: number, y: number, z: number): void;
	static vsub(src1: number[], src2: number[], dst: number[]): void;
	static vzero(v: number[]): void;
	static xyz_to_axis(xyz: number[], axis: number[]): void;
}

