/**
 * Basscss breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} xs - Breakpoint for mobile screens (0px or greater).
 * @property {[number, string]} sm - Breakpoint for phablet screens (640px or greater).
 * @property {[number, string]} md - Breakpoint for tablet screens (832px or greater).
 * @property {[number, string]} lg - Breakpoint for desktop screens (1024px or greater).
 */
export const bassCSSBreakpoints = {
	xs: [0, "Mobile"], // Viewport width is 0px or greater
	sm: [640, "Phablet"], // Viewport width is 640px or greater
	md: [832, "Tablet"], // Viewport width is 832px or greater
	lg: [1024, "Desktop"], // Viewport width is 1024px or greater
}
