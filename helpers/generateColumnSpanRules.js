/**
 * Generates CSS rules for grid-column-span with a specified number of columns.
 *
 * @param {string} breakpointPrefix - The prefix for the breakpoint (e.g., "sm", "md", "lg").
 * @param {number} [maxColumns=8] - The maximum number of columns to generate rules for (defaults to 8).
 * @returns {string} A string containing the generated CSS rules for grid-column-span.
 */
export const generateColumnSpanRules = (breakpointPrefix, maxColumns = 8) => {
	const columnSpanRules = []

	for (let i = 2; i <= maxColumns; i++) {
		columnSpanRules.push(`
	[data-${breakpointPrefix}~="colSpan${i}"] {
        grid-column: span ${i};
    }`)
	}

	// Join rules without extra newlines and trim whitespace
	return columnSpanRules.join("").trim()
}
