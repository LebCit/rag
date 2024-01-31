/**
 * Open Props breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} xxs - Breakpoint for smartwatch screens (0px or greater).
 * @property {[number, string]} xs - Breakpoint for small phone screens (240px or greater).
 * @property {[number, string]} sm - Breakpoint for mobile screens (360px or greater).
 * @property {[number, string]} md - Breakpoint for phablet screens (480px or greater).
 * @property {[number, string]} lg - Breakpoint for tablet screens (768px or greater).
 * @property {[number, string]} xl - Breakpoint for laptop & desktop screens (1024px or greater).
 * @property {[number, string]} xxl - Breakpoint for extra large desktop screens (1440px or greater).
 */
export const openPropsBreakpoints = {
	xxs: [0, "Smartwatch"], // Viewport width is 0px or greater
	xs: [240, "Small Phone"], // Viewport width is 240px or greater
	sm: [360, "Mobile"], // Viewport width is 360px or greater
	md: [480, "Phablet"], // Viewport width is 480px or greater
	lg: [768, "Tablet"], // Viewport width is 768px or greater
	xl: [1024, "Laptop & Desktop"], // Viewport width is 1024px or greater
	xxl: [1440, "Extra Large Desktop"], // Viewport width is 1440px or greater
}
