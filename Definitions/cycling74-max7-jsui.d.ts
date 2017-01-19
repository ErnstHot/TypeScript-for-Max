////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSUI                                                                                                               // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// JSUI: https://docs.cycling74.com/max7/vignettes/jsuiobject

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
	set_source_rgba(red: number, green: number, blue: number, alpha: number): void;
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

declare var mgraphics: MGraphics;