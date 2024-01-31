/**
 * Ant Design breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} xxs - Breakpoint for small mobile screens (0px or greater).
 * @property {[number, string]} xs - Breakpoint for mobile screens (0px or greater).
 * @property {[number, string]} sm - Breakpoint for phablet screens (576px or greater).
 * @property {[number, string]} md - Breakpoint for tablet screens (768px or greater).
 * @property {[number, string]} lg - Breakpoint for laptop & desktop screens (992px or greater).
 * @property {[number, string]} xl - Breakpoint for large desktop screens (1200px or greater).
 * @property {[number, string]} xxl - Breakpoint for extra large desktop screens (1600px or greater).
 */
export const antDesignBreakpoints = {
	xxs: [0, "Small Mobile"], // Viewport width is 0px or greater
	xs: [480, "Mobile"], // Viewport width is 0px or greater
	sm: [576, "Phablet"], // Viewport width is 576px or greater
	md: [768, "Tablet"], // Viewport width is 768px or greater
	lg: [992, "Laptop & Desktop"], // Viewport width is 992px or greater
	xl: [1200, "Large Desktop"], // Viewport width is 1200px or greater
	xxl: [1600, "Extra Large Desktop"], // Viewport width is 1600px or greater
}
