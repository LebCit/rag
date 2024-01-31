/**
 * Foundation breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} sm - Breakpoint for mobile screens (0px or greater).
 * @property {[number, string]} md - Breakpoint for tablet screens (576px or greater).
 * @property {[number, string]} lg - Breakpoint for laptop & desktop screens (1024px or greater).
 * @property {[number, string]} xl - Breakpoint for large desktop screens (1200px or greater).
 * @property {[number, string]} xxl - Breakpoint for extra large desktop screens (1440px or greater).
 */
export const foundationBreakpoints = {
	sm: [0, "Mobile"], // Viewport width is 0px or greater
	md: [640, "tablet"], // Viewport width is 576px or greater
	lg: [1024, "Laptop & Desktop"], // Viewport width is 1024px or greater
	xl: [1200, "Large Desktop"], // Viewport width is 1200px or greater
	xxl: [1440, "Extra Large Desktop"], // Viewport width is 1440px or greater
}
