////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JitterObject                                                                                                       // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// http://max-javascript-reference.tim-schenk.de/symbols/JitterObject.html

declare class JitterObject extends Maxobj {
	constructor(object_name: string, ...params: any[]);
	freepeer(): void;
	getregisteredname(): string;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JitterMatrix                                                                                                       // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// http://max-javascript-reference.tim-schenk.de/symbols/JitterMatrix.html

declare class JitterMatrix extends JitterObject {
	constructor(...args: any[]);  	// TODO:
									// From JitterReposUtils.js:
									// var s = new JitterMatrix(2, "long", x, y);

	adapt: number;
	dim: any; // TODO: Probably number[] for this and the following.
	dimstride: any;
	dstdimend: any;
	dstdimstart: any;
	interp: number;
	name: string;
	planecount: number;
	planemap: any;
	size: number;
	srcdimend: any;
	srcdimstart: any;
	type: string;
	usedstdim: number;
	usesrcdim: number;

	bang(): void;
	clear(): void;
	exportimage(filename: string, file_type: string, use_dialog: 0 | 1): void;
	exportmovie(filename: string, FPS: number, codec: string, quality: string, timescale: number): void;
	exprfill(plane: number, expression: string): void;
	fillplane(plane: number, value: number): void;
	float(values: number[]): void;
	getcell(position: number[]): void;
	importmovie(filename: string, time_offset: number): void;
	int(values: number[]): void;
	jit_gl_texture(texture_name: string): void;
	list(values: number[]): void;
	op(...params: any[]): void;
	read(filename: string): void;
	setall(values: number[]): void;
	setcell(position: number[], plane: number, plane_number: number, val: number | number[], values: number[]): void;
	setcell1d(...params: number[]): void;
	setcell2d(...params: number[]): void;
	setcell3d(...params: number[]): void;
	setplane1d(...params: number[]): void;
	setplane2d(...params: number[]): void;
	setplane3d(...params: number[]): void;
	val(...params: number[]): void;
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

