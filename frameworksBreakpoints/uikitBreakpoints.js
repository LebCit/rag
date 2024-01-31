/**
 * UIkit breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} sm - Breakpoint for mobile screens (0px or greater).
 * @property {[number, string]} md - Breakpoint for tablet screens (640px or greater).
 * @property {[number, string]} lg - Breakpoint for laptop & desktop screens (960px or greater).
 * @property {[number, string]} xl - Breakpoint for large desktop screens (1200px or greater).
 * @property {[number, string]} xxl - Breakpoint for extra large desktop screens (1600px or greater).
 */
export const uikitBreakpoints = {
	sm: [0, "Mobile"], // Viewport width is 0px or greater
	md: [640, "Tablet"], // Viewport width is 640px or greater
	lg: [960, "Laptop & Desktop"], // Viewport width is 960px or greater
	xl: [1200, "Large Desktop"], // Viewport width is 1200px or greater
	xxl: [1600, "Extra Large Desktop"], // Viewport width is 1600px or greater
}
