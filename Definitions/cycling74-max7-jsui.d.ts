/*
 * JSUI: https://docs.cycling74.com/max7/vignettes/jsuiobject
 */

declare var mgraphics: MGraphics;
declare var sketch: Sketch;
declare function refresh(): void;


/**
 * https://docs.cycling74.com/max7/vignettes/jsmgraphics
 */
declare class MGraphics {
	constructor();

	/**
	 * When autosketch is set to 1, the drawing commands will immediately be drawn without waiting a drawing execution command. While this is convenient, it is less flexible than working with autosketch set to 0.
	 * @type {number}
	 */
	autosketch: number;

	/**
	 * As described in the narrative above, the relative_coords setting determines whether the locations in the drawing area range from 0,0 through the size in pixels (relative_coords = 0), or if the drawing area ranges from (-aspect, 1.0) through (aspect, -1.0).
	 * @type {number}
	 */
	relative_coords: number;

	/**
	 * When autofill is set to 1, any shape command will immediately be filled without requiring a fill execution command. While this is convenient, it is less flexible than working with autofill set to 0.
	 * @type {number}
	 */
	autofill: number;

	/**
	 * The init routine is the first thing that an mgraphics-based Javascript program needs to call. It initializes the library, sets up the internal mgraphics variables and prepares the jsui object for drawing.
	 */
	init(): void;

	/**
	 * Force a redraw of the display area by calling the paint() function.
	 */
	redraw(): void;

	/**
	 * Returns a copy of the current path to be stored and reused at a later time.
	 */
	copy_path(): void;

	/**
	 * Appends a stored path to the current path at the current end point.
	 * @param {any} path [description]
	 */
	append_path(path: any): void;

	/**
	 * Create a line that connects the current path point to the origin of the path, thereby closing the path into a fill-able shape.
	 */
	close_path(): void;

	/**
	 * Using the current path, round the corners to the radius provided (or as close as possible given the path’s angle).
	 * @param {number} radius [description]
	 */
	path_roundcorners(radius: number): void;

	/**
	 * Returns an array with the current X and Y coordinates of the path ending position.
	 * @return {number[]} [description]
	 */
	get_current_point(): number[];

	/**
	 * Add a circular, clockwise, arc to the current path.
	 * @param {number} x_center The horizontal coordinate of the arc's center.
	 * @param {number} y_center The vertical coordinate of the arc's center.
	 * @param {number} radius   The radius of the arc.
	 * @param {number} angle1   The starting angle of the arc in radians. Zero radians is center right (positive x axis).
	 * @param {number} angle2   The terminal angle of the arc in radians. Zero radians is center right (positive x axis).
	 */
	arc(x_center: number, y_center: number, radius: number, angle1: number, angle2: number): void;

	/**
	 * Add a circular, counter-clockwise, arc to the current path.
	 * @param {number} x_center The horizontal coordinate of the arc's center.
	 * @param {number} y_center The vertical coordinate of the arc's center.
	 * @param {number} radius   The radius of the arc.
	 * @param {number} angle1   The starting angle of the arc in radians. Zero radians is center right (positive x axis).
	 * @param {number} angle2   The terminal angle of the arc in radians. Zero radians is center right (positive x axis).
	 */
	arc_negative(x_center: number, y_center: number, radius: number, angle1: number, angle2: number): void;

	/**
	 * Add a non-circular arc to the current path.
	 * @param {number} x_center The horizontal coordinate of the arc's center.
	 * @param {number} y_center The vertical coordinate of the arc's center.
	 * @param {number} radius_x The horizontal radius of the arc.
	 * @param {number} radius_y The vertical radius of the arc.
	 * @param {number} angle1   The starting angle of the arc in radians. Zero radians is center right (positive x axis).
	 * @param {number} angle2   The terminal angle of the arc in radians. Zero radians is center right (positive x axis).
	 */
	ovalarc(x_center: number, y_center: number, radius_x: number, radius_y: number,	angle1: number, angle2: number): void;

	/**
	 * Add a cubic Bezier spline to the current path.
	 * @param {number} x1 The first control point.
	 * @param {number} y1 The first control point.
	 * @param {number} x2 The second control point.
	 * @param {number} y2 The second control point.
	 * @param {number} x3 The destination point.
	 * @param {number} y3 The destination point.
	 */
	curve_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

	/**
	 * Add a cubic Bezier spline to the current path, using coordinates relative to the current point.
	 * @param {number} x1 The first control point.
	 * @param {number} y1 The first control point.
	 * @param {number} x2 The second control point.
	 * @param {number} y2 The second control point.
	 * @param {number} x3 The destination point.
	 * @param {number} y3 The destination point.
	 */
	rel_curve_to(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number): void;

	/**
	 * Add a line segment to the current path.
	 * @param {number} x The destination point.
	 * @param {number} y The destination point.
	 */
	line_to(x: number, y: number): void;

	/**
	 * Add a line segment to the current path, using coordinates relative to the current point.
	 * @param {number} x The destination point.
	 * @param {number} y The destination point.
	 */
	rel_line_to(x: number, y: number): void;

	/**
	 * Move the cursor to a new point and begin a new subpath.
	 * @param {number} x The new location.
	 * @param {number} y The new location.
	 */
	move_to(x: number, y: number): void;

	/**
	 * Move the cursor to a new point and begin a new subpath, using coordinates relative to the current point.
	 * @param {number} x The new location.
	 * @param {number} y The new location.
	 */
	rel_move_to(x: number, y: number): void;

	/**
	 * Add a closed rectangle path in the context.
	 * @param {number} x      The horizontal origin.
	 * @param {number} y      The vertical origin.
	 * @param {number} width  The width of the rect.
	 * @param {number} height The height of the rect.
	 */
	rectangle(x: number, y: number, width: number, height: number): void;

	/**
	 * Add a closed rounded-rectangle path in the context.
	 * @param {number} x      The horizontal origin.
	 * @param {number} y      The vertical origin.
	 * @param {number} width  The width of the rect.
	 * @param {number} height The height of the rect.
	 * @param {number} ovalwidth  The width of the oval used for the round corners.
	 * @param {number} ovalheight The height of the oval used for the round corners.
	 */
	rectangle_rounded(x: number, y: number, width: number, height: number, ovalwidth: number, ovalheight: number): void;

	/**
	 * Add a closed elliptical path in the context.
	 * @param {number} x      The horizontal origin.
	 * @param {number} y      The vertical origin.
	 * @param {number} width  The width of the rect.
	 * @param {number} height The height of the rect.
	 */
	ellipse(x: number, y: number, width: number, height: number): void;

	/**
	 * Sets the current font face by name.
	 * @param {string} fontname [description]
	 */
	select_font_face(fontname: string): void;

	/**
	 * Sets the current font size, using either an integer or floating-point value.
	 * @param {number} size [description]
	 */
	set_font_size(size: number): void;

	/**
	 * Places the display text in the drawing area at the current location, and using the current font and size. Since a path is not being created, it does not conform to the transformations otherwise available with paths.
	 * @param {string} text [description]
	 */
	show_text(text: string): void;

	/**
	 * Create a path that uses the display text, the current font and the current size. The result is subject to all of the transforms ordinarily available to paths.
	 * @param {string} text [description]
	 */
	text_path(text: string): void;

	/**
	 * Returns an array with three values: ascent, descent and height.
	 * @return {number[]} [description]
	 */
	font_extents(): number[];

	/**
	 * Returns an array with two values: width and height. This is the measurement of the provided text using the current font and size.
	 * @return {number[]} [description]
	 */
	text_measure(): number[];

	/**
	 * Returns a Javascript array where each value is the text name of a font installed on your system. You can determine the length of the array by using the variable fontlist.length.
	 * @return {string[]} [description]
	 */
	getfontlist(): string[];

	/**
	 * Create a solid color pattern.
	 * @param  {number}  red   [description]
	 * @param  {number}  green [description]
	 * @param  {number}  blue  [description]
	 * @param  {number}  alpha [description]
	 * @return {Pattern}       [description]
	 */
	pattern_create_rgba(red: number, green: number, blue: number, alpha: number): Pattern;

	/**
	 * Create a pattern using an image for the background. Repeating patterns depends on the extend value set using the set_extend() function.
	 * @param  {Image}   image [description]
	 * @return {Pattern}       [description]
	 */
	pattern_create_for_surface(image: Image): Pattern;

	/**
	 * Create a linear gradient, with an influence point for each gradient section. When in relative_coordinate mode, these influence points still need to be defined in pixels rather than relative coordinates.
	 * @param  {number}  x1 [description]
	 * @param  {number}  y1 [description]
	 * @param  {number}  x2 [description]
	 * @param  {number}  y2 [description]
	 * @return {Pattern}    [description]
	 */
	pattern_create_linear(x1: number, y1: number, x2: number, y2: number): Pattern;

	/**
	 * Create a radial gradient, with an influence point for each gradient section. When in relative_coordinate mode, these influence points still need to be defined in pixels rather than relative coordinates.
	 * @param  {number}  x1   [description]
	 * @param  {number}  y1   [description]
	 * @param  {number}  rad1 [description]
	 * @param  {number}  x2   [description]
	 * @param  {number}  y2   [description]
	 * @param  {number}  rad2 [description]
	 * @return {Pattern}      [description]
	 */
	pattern_create_radial(x1: number, y1: number, rad1: number, x2: number, y2: number, rad2: number): Pattern;

	/**
	 * Modifies the transform matrix by moving it by absolute (positive or negative) delta amounts.
	 * @param {number} x [description]
	 * @param {number} y [description]
	 */
	translate(x: number, y: number): void;

	/**
	 * Modifies the transform matrix that scales all X and Y values by the values provided.
	 * Note: This affects everything from size to location, and also scales line widths.
	 * @param {number} scale_x [description]
	 * @param {number} scale_y [description]
	 */
	scale(scale_x: number, scale_y: number): void;

	/**
	 * Modifies the transform matrix by rotating it. The rotation values is in radians (2-pi for a complete rotation).
	 * @param {number} rad [description]
	 */
	rotate(rad: number): void;

	/**
	 * Directly modify the transform matrix (and therefore the user space) using six values. The xx and yy values provide scaling support, xy and yx provide rotational warping, and x0 and y0 provide location offset.
	 * @param {number} xx [description]
	 * @param {number} xy [description]
	 * @param {number} yx [description]
	 * @param {number} yy [description]
	 * @param {number} x0 [description]
	 * @param {number} y0 [description]
	 */
	transform(xx: number, xy: number, yx: number, yy: number, x0: number, y0: number): void;

	/**
	 * Directly set the tranform matrix for the current drawing context.
	 * @param {number} xx [description]
	 * @param {number} xy [description]
	 * @param {number} yx [description]
	 * @param {number} yy [description]
	 * @param {number} x0 [description]
	 * @param {number} y0 [description]
	 */
	set_matrix(xx: number, xy: number, yx: number, yy: number, x0: number, y0: number): void;

	/**
	 * Retrieve the current transform matrix for the current drawing context.
	 * @return {number[]} [description]
	 */
	get_matrix(): number[];

	/**
	 * Revert the transform matrix to default (normal) values.
	 */
	identity_matrix(): void;

	/**
	 * Given a user location (such as from get_current_point()), returns the device location. This helps find one’s position even with transform matrices in place.
	 * @param  {number[]} pos [description]
	 * @return {number[]}     [description]
	 */
	user_to_device(pos: number[]): number[];

	/**
	 * Given a device position, returns the user space location. This will determine a location despite user space deformation (using matrix transforms).
	 * @param  {number[]} pos [description]
	 * @return {number[]}     [description]
	 */
	device_to_user(pos: number[]): number[];

	/**
	 * Save the current Mgraphics state for later restoration. This is particularly useful when doing multiple transformations or matrix manipulation of the user space.
	 */
	save(): void;

	/**
	 * Restore the Mgraphics system to a previously saved state.
	 */
	restore(): void;

	/**
	 * Define a starting point for a path execution group. This group can be used for creating an image from a set of path functions without actually drawing the results to the screen.
	 */
	push_group(): void;

	/**
	 * Complete a path execution group, returning the results as an Image object. This image can be used for later drawing of the group results.
	 * @return {Image} [description]
	 */
	pop_group(): Image;

	/**
	 * Set the color and alpha channels to be used for drawing routines.
	 * @param {number[]} rgba [description]
	 */
	set_source_rgba(rgba: number[]): void;

	/**
	 * Set the color and alpha channels to be used for drawing routines.
	 * @param {number[]} rgb   [description]
	 * @param {number}   alpha [description]
	 */
	set_source_rgba(rgb: number[], alpha: number): void;

	/**
	 * Set the color and alpha channels to be used for drawing routines.
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 * @param {number} alpha [description]
	 */
	set_source_rgba(red: number, green: number, blue: number, alpha: number): void;

	/**
	 * Set the color channels to be used for drawing routines. Since the alpha channel is not provide, it is defaulted to completely opaque.
	 * @param {number[]} rgb [description]
	 */
	set_source_rgb(rgb: number[]): void;

	/**
	 * Set the color channels to be used for drawing routines. Since the alpha channel is not provide, it is defaulted to completely opaque.
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 */
	set_source_rgb(red: number, green: number, blue: number): void;

	/**
	 * Sets the pattern to be used for the next fill() call. The name parameter must be a previously created pattern.
	 * @param {Pattern} pattern [description]
	 */
	set_source(pattern: Pattern): void;

	/**
	 * Sets the provided surface as the source for drawing routines.
	 * TODO: Surface type?
	 * @param {any} surface [description]
	 */
	set_source_surface(surface: any): void;

	/**
	 * Create a transform for the color and alpha channels using scale amounts to determine a color multiplier (either positive or negative). Note: One of the set_source_* routines must be called to apply this transform to an actual color.
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 * @param {number} alpha [description]
	 */
	scale_source_rgba(red: number, green: number, blue: number, alpha: number): void;

	/**
	 * Set the color channels to be used for drawing routines. Since the alpha channel is not provide, it is defaulted to completely opaque.
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 */
	scale_source_rgb(red: number, green: number, blue: number): void;

	/**
	 * Create a transform for the color and alpha channels by absolute delta amounts to determine a color offset (either positive or negative). Note: One of the set_source_* routines must be called to apply this transform to an actual color.
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 * @param {number} alpha [description]
	 */
	translate_source_rgba(red: number, green: number, blue: number, alpha: number): void;

	/**
	 * Set the appearance of the end-point of a drawn line. The options are butt, round, or square.
	 * @param {"butt" | "round" | "square"} line_cap [description]
	 */
	set_line_cap(line_cap: "butt" | "round" | "square"): void;

	/**
	 * Retrieve the appearance attribute of the current line_cap setting. The returned value is the same as the values used by set_line_cap.
	 */
	get_line_cap(): "butt" | "round" | "square";

	/**
	 * Set the appearance of the connection point between lines. The options are miter, round, or bevel.
	 * @param {"miter" | "round" | "bevel"} line_join [description]
	 */
	set_line_join(line_join: "miter" | "round" | "bevel"): void;

	/**
	 * Retrieve the appearance attribute of the current line_join setting. The returned value is the same as the values used by set_line_join.
	 */
	get_line_join(): "miter" | "round" | "bevel";

	/**
	 * Set the width of path lines drawn using the stroke() function. The width value is dependent on the coordinate system in use.
	 * @param {number} width [description]
	 */
	set_line_width(width: number): void;

	/**
	 * Retrieve the current line width as a floating-point number.
	 * @return {number} [description]
	 */
	get_line_width(): number;

	/**
	 * Fill the path with the current source color. When the fill is completed, the path will be destroyed.
	 */
	fill(): void;

	/**
	 * Fill the path with the current source color, but do not destroy the path when the fill is completed.
	 */
	fill_preserve(): void;

	/**
	 * Fill the path with the current source color, but override the alpha value for a fill-specific transparency.
	 * @param {number} alpha [description]
	 */
	fill_with_alpha(alpha: number): void;

	/**
	 * A combination of the two previous routines, this fills the path with the source color, but overrides the alpha value. It does not destroy the path when the fill is complete.
	 * @param {number} alpha [description]
	 */
	fill_preserve_with_alpha(alpha: number): void;

	/**
	 *  @param {Image} myImage [description]
	 */
	image_surface_draw(myImage: Image): void;

	/**
	 * Place an image (typically stored as an Image object) into the current surface. The drawing is placed at the top-left of the drawing context, changeable using a transform matrix or translate function. You can also choose the section of the image to draw using four optional arguments that describe a rectangle taken from the image.
	 * @param {Image}  myImage       [description]
	 * @param {number} source_top    optional
	 * @param {number} source_left   optional
	 * @param {number} source_width  optional
	 * @param {number} source_height optional
	 */
	image_surface_draw(myImage: Image, source_top?: number, source_left?: number, source_width?: number, source_height?: number): void;

	/**
	 * Render an SVG file into the current user context.
	 * @param {string} filename [description]
	 */
	svg_render(filename: string): void;

	/**
	 * Given a fillable path, determine if a point is within the fill zone. Returns 0 (false) or 1 (true).
	 * @param  {any[]}  ...args [description]
	 * @return {number}         [description]
	 */
	in_fill(...args: any[]): number;

	/**
	 * Determine the enclosing rectangle for the current fill area. Returns an array that contains the top/left and bottom/right points of the fill area.
	 * @return {number[]} [description]
	 */
	fill_extent(): number[];

	/**
	 * Draw the outline of the path with the color and line size chosen. When the drawing is complete, the path is deleted.
	 */
	stroke(): void;

	/**
	 * Draw the outline of the path with the color and line size chosen, but do not destroy the path when completed. This is useful for situations where you need to both fill a path and draw its outline.
	 */
	stroke_preserve(): void;

	/**
	 * Draw the outline of the path with the color and line size chosen, but override the alpha value of the color with a new alpha channel value. This allows you to change transparency without resetting the color values.
	 * @param {number} alpha [description]
	 */
	stroke_with_alpha(alpha: number): void;

	/**
	 * A combination of the above two routines, this will draw the line, preserve the path, and override the alpha value in a single routine call.
	 * @param {number} alpha [description]
	 */
	stroke_preserve_with_alpha(alpha: number): void;
}


/**
 * No Constructor. Object created by different MGraphics functions.
 * http://max-javascript-reference.tim-schenk.de/symbols/Pattern.html
 */
declare class Pattern {
	/**
	 * A function called on a previously created pattern, the add_color_stop_rgba will define a color value for one of the influence points of the pattern.
	 * @param {number} index [description]
	 * @param {number} red   [description]
	 * @param {number} green [description]
	 * @param {number} blue  [description]
	 * @param {number} alpha [description]
	 */
	add_color_stop_rgba(index: number, red: number, green: number, blue: number, alpha: number): void;

	/**
	 * Returns the extend value of the pattern.
	 * @return {string} [description]
	 */
	get_extend(): string;

	/**
	 * Returns the current transform matrix for the pattern
	 * @return {number[]} [description]
	 */
	get_matrix(): number[];

	/**
	 * Returns the type of pattern that was created.
	 * @return {string} [description]
	 */
	get_type(): string;

	/**
	 * Revert the user space transform matrix to its default (normal) orientation.
	 */
	identity_matrix(): void;

	/**
	 * Apply a rotation transform on the user space in which the pattern is displayed.
	 * @param {number} rotation [description]
	 */
	rotate(rotation: number): void;

	/**
	 * Scale the pattern by a factor in both X and Y coordinate spaces.
	 * @param {number} x [description]
	 * @param {number} y [description]
	 */
	scale(x: number, y: number): void;

	/**
	 * Determines how the pattern will be created when there is more space than available information.
	 * @param {string} extend_type [description]
	 */
	set_extend(extend_type: string): void;

	/**
	 * set_matrix(xx, xy, yx, yy, x0, y0)
	 * @param {number} xx [description]
	 * @param {number} xy [description]
	 * @param {number} yx [description]
	 * @param {number} yy [description]
	 * @param {number} x0 [description]
	 * @param {number} y0 [description]
	 */
	set_matrix(xx: number, xy: number, yx: number, yy: number, x0: number, y0: number): void; 

	/**
	 * Apply a translation transform (spatial offset) on the user space in which the pattern is displayed.
	 * @param {number} x [description]
	 * @param {number} y [description]
	 */
	translate(x: number, y: number): void;
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
	setpixel(x: number, y: number, red: number, green: number, blue: number, alpha?: number): void;	
	setpixel(x: number, y: number, rgba: number[]): void;	
	setpixel(x: number, y: number, rgb: number[], a?: number): void;	
	setpixel(position: number[], red: number, green: number, blue: number, alpha: number): void;	
	setpixel(position: number[], rgba: number[]): void;	
	setpixel(position: number[], rgb: number[], a?: number): void;	
	swapxy(): void;
	tonamedmatrix(matrixname: string): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// MaxCanvas                                                                                                          // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class MaxCanvas {
	// TODO: 
	// if (!jsui || !(jsui instanceof js)) {
	//      post("missing or wrong argument for MaxCanvas, call \"new MaxCanvas(this);\"\n");
	//      return;
	// }
	constructor(jsui: Object);
	getContext(type: "max-2d"): CanvasRenderingContext2D;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CanvasRenderingContext2D                                                                                           // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class CanvasRenderingContext2D {
	constructor(maxCanvas: MaxCanvas);
	save(): void;
	restore(): void;
	scale(x: number, y: number): void;
	rotate(x: number): void;
	translate(x: number, y: number): void;
	transform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
	setTransform(m11: number, m12: number, m21: number, m22: number, dx: number, dy: number): void;
	createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient;
	createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient;
	createPattern(image: Image, repetition: "repeat" | "repeat-x" | "repeat-y" | "no-repeat"): CanvasPattern;
	clearRect(x: number, y: number, w: number, h: number): void;
	fillRect(x: number, y: number, w: number, h: number): void;
	strokeRect(x: number, y: number, w: number, h: number): void;
	beginPath(): void;
	closePath(): void;
	moveTo(x: number, y: number): void;
	lineTo(x: number, y: number): void;
	quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void;
	bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void;
	arcTo(x1: number, y1: number, x2: number, y2: number, radius: number);
	rect(x: number, y: number, w: number, h: number): void;
	arc(x: number, y: number, r: number, startAngle: number, endAngle: number, anticlockwise: number): void;
	fill(): void;
	stroke(): void;
	isPointInPath(x: number, y: number): boolean;
	fillText(text: string, x: number, y: number, maxWidth: number): void;
	strokeText(text: string, x: number, y: number, maxWidth: number): void;
	measureText(text: string): number;
	drawImage(image: Image, dx: number, dy: number): void;
	drawImage(image: Image, dx: number, dy: number, dw: number, dh: number): void;
    drawImage(image: Image, sx: number, sy: number, sw: number, sh: number,
    	dx: number, dy: number, dw: number, dh: number): void;
    createImageData(sw: number, sh: number): ImageData;
    createImageData(imagedata: ImageData): ImageData;
    //getImageData(): ... not yet implemented in CanvasExtension.js
    putImageData(imagedata: ImageData, dx: number, dy: number, not_used_dirtyX: number, not_used_dirtyY: number,
    	not_used_dirtyWidth: number, not_used_dirtyHeight: number): void;
	redraw(): void;
	paint(): void;
	roundedRect(x: number, y: number, w: number, h: number, ow: number, oh: number): void;
	setTimeout(expression: Object, timeout: number): Task;
	clearInterval(task: Task): void;
	setSource(style: CanvasPattern | CanvasGradient | string): void;
	parseFontString(font: string): any[];
	getTextAlign(textString: string): number;
	getTextBaseline(): number;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CanvasGradient                                                                                                     // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class CanvasGradient {
	constructor(patternObj: Pattern, radiHelper: any); 	// TODO: radiHelper: any ?
	addColorStop(offset: number, color: any);			// TODO: color: any ?
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CanvasPattern                                                                                                      // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class CanvasPattern {
	constructor(pat: any, rep: any); // TODO: any?
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ImageData                                                                                                          // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class ImageData {
	constructor(sketchimage: any); // TODO: any?
	set(index: number, value: number): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// CanvasPixelArray                                                                                                   // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class CanvasPixelArray {
	readonly length: number;
	array(index: number): number;
	array(index: number, value: number): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// RGBAColor                                                                                                          // 
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

declare class RGBAColor {
	constructor(color: string, globalAlpha: number);
	readonly ok: boolean;
	r: number;
	g: number;
	b: number;
	a: number;
	toRGB(): string;
	toHex(): string;
}

declare function hslToRgba(h: number, s: number, l: number, a: number): number[];