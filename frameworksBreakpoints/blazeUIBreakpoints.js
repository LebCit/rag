/**
 * Blaze UI breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} xxs - Breakpoint for small phone screens (0px or greater).
 * @property {[number, string]} xs - Breakpoint for mobile screens (320px or greater).
 * @property {[number, string]} sm - Breakpoint for phablet screens (480px or greater).
 * @property {[number, string]} md - Breakpoint for tablet screens (768px or greater).
 * @property {[number, string]} lg - Breakpoint for laptop & desktop screens (1024px or greater).
 * @property {[number, string]} xl - Breakpoint for large desktop screens (1248px or greater).
 * @property {[number, string]} xxl - Breakpoint for extra large desktop screens (1856px or greater).
 */
export const blazeUIBreakpoints = {
	xxs: [0, "Small Phone"], // Viewport width is 0px or greater
	xs: [320, "Mobile"], // Viewport width is 320px or greater
	sm: [480, "Phablet"], // Viewport width is 480px or greater
	md: [768, "Tablet"], // Viewport width is 768px or greater
	lg: [1024, "Laptop & Desktop"], // Viewport width is 1024px or greater
	xl: [1248, "Large Desktop"], // Viewport width is 1248px or greater
	xxl: [1856, "Extra Large Desktop"], // Viewport width is 1856px or greater
}
