/**
 * Vanilla breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} xs - Breakpoint for mobile screens (0px or greater).
 * @property {[number, string]} sm - Breakpoint for phablet screens (460px or greater).
 * @property {[number, string]} md - Breakpoint for tablet screens (620px or greater).
 * @property {[number, string]} lg - Breakpoint for laptop & desktop screens (1036px or greater).
 * @property {[number, string]} xl - Breakpoint for extra large desktop screens (1681px or greater).
 */
export const vanillaBreakpoints = {
	xs: [0, "Mobile"], // Viewport width is 0px or greater
	sm: [460, "Phablet"], // Viewport width is 460px or greater
	md: [620, "Tablet"], // Viewport width is 620px or greater
	lg: [1036, "Laptop & Desktop"], // Viewport width is 1036px or greater
	xl: [1681, "Extra Large Desktop"], // Viewport width is 1681px or greater
}
