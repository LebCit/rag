/**
 * KNACSS breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} sm - Breakpoint for mobile screens (0px or greater).
 * @property {[number, string]} md - Breakpoint for tablet screens (576px or greater).
 * @property {[number, string]} lg - Breakpoint for laptop & desktop screens (992px or greater).
 * @property {[number, string]} xl - Breakpoint for large desktop screens (1330px or greater).
 */
export const knaCSSBreakpoints = {
	sm: [0, "Mobile"], // Viewport width is 0px or greater
	md: [576, "Tablet"], // Viewport width is 576px or greater
	lg: [992, "Laptop & Desktop"], // Viewport width is 992px or greater
	xl: [1330, "Large Desktop"], // Viewport width is 1330px or greater
}
