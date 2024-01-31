/**
 * Skeleton breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} xxs - Breakpoint for mobile screens (0px or greater).
 * @property {[number, string]} xs - Breakpoint for phablet screens (400px or greater).
 * @property {[number, string]} sm - Breakpoint for tablet screens (550px or greater).
 * @property {[number, string]} md - Breakpoint for laptop screens (750px or greater).
 * @property {[number, string]} lg - Breakpoint for desktop screens (1000px or greater).
 * @property {[number, string]} xl - Breakpoint for large desktop screens (1200px or greater).
 */
export const skeletonBreakpoints = {
	xxs: [0, "Mobile"], // Viewport width is 0px or greater
	xs: [400, "Phablet"], // Viewport width is 400px or greater
	sm: [550, "Tablet"], // Viewport width is 550px or greater
	md: [750, "Laptop"], // Viewport width is 750px or greater
	lg: [1000, "Desktop"], // Viewport width is 1000px or greater
	xl: [1200, "Large Desktop"], // Viewport width is 1200px or greater
}
