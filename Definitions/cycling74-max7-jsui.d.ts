////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSUI                                                                                                               // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSUI: https://docs.cycling74.com/max7/vignettes/jsuiobject

declare var mgraphics: MGraphics;
declare var sketch: Sketch;
declare function refresh(): void;


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MGraphics                                                                                                          // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// https://docs.cycling74.com/max7/vignettes/jsmgraphics

declare class MGraphics {
	constructor();
	autofill: number;
	relative_coords: number;
	autosketch: number;
	init(): void;
	redraw(): void;
	copy_path(): void;
	append_path(path: any): void;
	close_path(): void;
	path_roundcorners(radius: number): void;
	get_current_point(): number[];
	arc(x_center: number, y_center: number, radius: number, angle1: number, angle2: number): void;
	arc_negative(x_center: number, y_center: number, radius: number, angle1: number, angle2: number): void;
	ovalarc(x_center: number, y_center: number, radius_x: number, radius_y: number,	angle1: number, angle2: number): void;
	curve_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
	rel_curve_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;
	line_to(x: number, y: number): void;
	rel_line_to(x: number, y: number): void;
	move_to(x: number, y: number): void;
	rel_move_to(x: number, y: number): void;
	rectangle(x: number, y: number, width: number, height: number): void;
	rectangle_rounded(x: number, y: number, width: number, height: number, ovalwidth: number, ovalheight: number): void;
	ellipse(x: number, y: number, width: number, height: number): void;
	select_font_face(fontname: string): void;
	set_font_size(size: number): void;
	show_text(text: string): void;
	text_path(text: string): void;
	font_extents(): number[];
	text_measure(): number[];
	getfontlist(): string[];
	pattern_create_rgba(red: number, green: number, blue: number, alpha: number): any;
	pattern_create_for_surface(image: Image): any;
	pattern_create_linear(x1: number, y1: number, x2: number, y2: number): any;
	pattern_create_radial(x1: number, y1: number, rad1: number, x2: number, y2: number, rad2: number): any;
	translate(x: number, y: number): void;
	scale(scale_x: number, scale_y: number): void;
	rotate(rad: number): void;
	transform(xx: number, xy: number, yx: number, yy: number, x0: number, y0: number): void;
	set_matrix(xx: number, xy: number, yx: number, yy: number, x0: number, y0: number): void;
	get_matrix(): number[];
	identity_matrix(): void;
	user_to_device(pos: number[]): number[];
	device_to_user(pos: number[]): number[];
	save(): void;
	restore(): void;
	push_group(): void;
	pop_group(): Image;
	set_source_rgba(rgba: number[]): void;
	set_source_rgba(rgb: number[], alpha: number): void;
	set_source_rgba(red: number, green: number, blue: number, alpha: number): void;
	set_source_rgb(rgb: number[]): void;
	set_source_rgb(red: number, green: number, blue: number): void;
	set_source(pattern: any): void;
	set_source_surface(surface: any): void;
	scale_source_rgba(red: number, green: number, blue: number): void;
	translate_source_rgba(red: number, green: number, blue: number): void;
	set_line_cap(line_cap: "butt" | "round" | "square"): void;
	get_line_cap(): "butt" | "round" | "square";
	set_line_join(line_join: "miter" | "round" | "bevel"): void;
	get_line_join(): "miter" | "round" | "bevel";
	set_line_width(width: number): void;
	get_line_width(): number;
	fill(): void;
	fill_preserve(): void;
	fill_with_alpha(alpha: number): void;
	fill_preserve_with_alpha(alpha: number): void;
	image_surface_draw(myImage: Image): void;
	image_surface_draw(myImage: Image, source_top: number, source_left: number, source_width: number, source_height: number): void;
	svg_render(filename: string): void;
	in_fill(...args: any[]): number;
	fill_extent(): number[];	
	stroke(): void;
	stroke_preserve(): void;
	stroke_with_alpha(alpha: number): void;
	stroke_preserve_with_alpha(alpha: number): void;
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