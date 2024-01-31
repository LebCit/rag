/**
 * Primer breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} xs - Breakpoint for mobile screens (0px or greater).
 * @property {[number, string]} sm - Breakpoint for phablet screens (544px or greater).
 * @property {[number, string]} md - Breakpoint for tablet screens (768px or greater).
 * @property {[number, string]} lg - Breakpoint for laptop & desktop screens (1004px or greater).
 * @property {[number, string]} xl - Breakpoint for large desktop screens (1280px or greater).
 */
export const primerBreakpoints = {
	xs: [0, "Mobile"], // Viewport width is 0px or greater
	sm: [544, "Phablet"], // Viewport width is 544px or greater
	md: [768, "Tablet"], // Viewport width is 768px or greater
	lg: [1004, "Laptop & Desktop"], // Viewport width is 1004px or greater
	xl: [1280, "Large Desktop"], // Viewport width is 1280px or greater
}
