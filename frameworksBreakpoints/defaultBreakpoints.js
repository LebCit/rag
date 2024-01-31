/**
 * Default breakpoints for CSS grid generation, defining minimum viewport widths and optional labels for different layout variations.
 *
 * @type {Object.<string, [number, string]>}
 * @property {[number, string]} sm - Breakpoint for small screens (0px or greater).
 * @property {[number, string]} md - Breakpoint for medium screens (768px or greater).
 * @property {[number, string]} lg - Breakpoint for large screens (1024px or greater).
 * @property {[number, string]} xl - Breakpoint for extra large screens (1280px or greater).
 */
export const defaultBreakpoints = {
	sm: [0, "Mobile"], // Viewport width is 0px or greater
	md: [768, "Tablet"], // Viewport width is 768px or greater
	lg: [1024, "Desktop"], // Viewport width is 1024px or greater
	xl: [1280, "Large Desktop"], // Viewport width is 1280px or greater
}
