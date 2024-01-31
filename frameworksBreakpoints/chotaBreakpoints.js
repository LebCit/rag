/**
 * Chota breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} xs - Breakpoint for mobile screens (0px or greater).
 * @property {[number, string]} sm - Breakpoint for tablet screens (600px or greater).
 * @property {[number, string]} md - Breakpoint for laptop & desktop screens (900px or greater).
 * @property {[number, string]} lg - Breakpoint for large desktop screens (1200px or greater).
 */
export const chotaBreakpoints = {
	xs: [0, "Mobile"], // Viewport width is 0px or greater
	sm: [600, "Tablet"], // Viewport width is 600px or greater
	md: [900, "Laptop & Desktop"], // Viewport width is 900px or greater
	lg: [1200, "Large Desktop"], // Viewport width is 1200px or greater
}
