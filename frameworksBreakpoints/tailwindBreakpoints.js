/**
 * Tailwind breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} xs - Breakpoint for mobile screens (0px or greater).
 * @property {[number, string]} sm - Breakpoint for phablet screens (640px or greater).
 * @property {[number, string]} md - Breakpoint for tablet screens (768px or greater).
 * @property {[number, string]} lg - Breakpoint for laptop & desktop screens (1024px or greater).
 * @property {[number, string]} xl - Breakpoint for large desktop screens (1280px or greater).
 * @property {[number, string]} xxl - Breakpoint for extra large desktop screens (1536px or greater).
 */
export const tailwindBreakpoints = {
	xs: [0, "Mobile"], // Viewport width is 0px or greater
	sm: [640, "Phablet"], // Viewport width is 640px or greater
	md: [768, "Tablet"], // Viewport width is 768px or greater
	lg: [1024, "Laptop & Desktop"], // Viewport width is 1024px or greater
	xl: [1280, "Large Desktop"], // Viewport width is 1280px or greater
	xxl: [1536, "Extra Large Desktop"], // Viewport width is 1536px or greater
}
