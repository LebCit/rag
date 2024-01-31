/**
 * Pure breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} xs - Breakpoint for mobile screens (0px or greater).
 * @property {[number, string]} sm - Breakpoint for phablet screens (568px or greater).
 * @property {[number, string]} md - Breakpoint for tablet screens (768px or greater).
 * @property {[number, string]} lg - Breakpoint for laptop & desktop screens (1024px or greater).
 * @property {[number, string]} xl - Breakpoint for large desktop screens (1280px or greater).
 * @property {[number, string]} xxl - Breakpoint for extra large desktop screens (1920px or greater).
 * @property {[number, string]} xxxl - Breakpoint for ultra large desktop screens (2560px or greater).
 * @property {[number, string]} x4k - Breakpoint for cinematic desktop screens (3840px or greater).
 */
export const pureBreakpoints = {
	xs: [0, "Mobile"], // Viewport width is 0px or greater
	sm: [568, "Phablet"], // Viewport width is 568px or greater
	md: [768, "Tablet"], // Viewport width is 768px or greater
	lg: [1024, "Laptop & Desktop"], // Viewport width is 1024px or greater
	xl: [1280, "Large Desktop"], // Viewport width is 1280px or greater
	xxl: [1920, "Extra Large Desktop"], // Viewport width is 1920px or greater
	xxxl: [2560, "Ultra Large Desktop"], // Viewport width is 2560px or greater
	x4k: [3840, "Cinematic Desktop"], // Viewport width is 3840px or greater
}
