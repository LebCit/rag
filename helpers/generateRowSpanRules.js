/**
 * Generates CSS rules for grid-row-span with a specified number of rows.
 *
 * @param {string} breakpointPrefix - The prefix for the breakpoint (e.g., "sm", "md", "lg").
 * @param {number} [maxRows=8] - The maximum number of rows to generate rules for (defaults to 8).
 * @returns {string} A string containing the generated CSS rules for grid-row-span.
 */
export const generateRowSpanRules = (breakpointPrefix, maxRows = 8) => {
	const rowSpanRules = []

	for (let i = 2; i <= maxRows; i++) {
		rowSpanRules.push(`
	[data-${breakpointPrefix}~="rowSpan${i}"] {
		grid-row: span ${i};
    }`)
	}

	// Join rules without extra newlines and trim whitespace
	return rowSpanRules.join("").trim()
}
