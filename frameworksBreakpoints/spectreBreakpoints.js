/**
 * Spectre breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} xxs - Breakpoint for small phone screens (0px or greater).
 * @property {[number, string]} xs - Breakpoint for mobile screens (480px or greater).
 * @property {[number, string]} sm - Breakpoint for phablet screens (600px or greater).
 * @property {[number, string]} md - Breakpoint for tablet screens (840px or greater).
 * @property {[number, string]} lg - Breakpoint for laptop & desktop screens (960px or greater).
 * @property {[number, string]} xl - Breakpoint for large desktop screens (1280px or greater).
 */
export const spectreBreakpoints = {
	xxs: [0, "Small Phone"], // Viewport width is 0px or greater
	xs: [480, "Mobile"], // Viewport width is 480px or greater
	sm: [600, "Phablet"], // Viewport width is 600px or greater
	md: [840, "Tablet"], // Viewport width is 840px or greater
	lg: [960, "Laptop & Desktop"], // Viewport width is 960px or greater
	xl: [1280, "Large Desktop"], // Viewport width is 1280px or greater
}
