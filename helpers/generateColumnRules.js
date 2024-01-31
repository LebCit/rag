/**
 * Generates CSS rules for grid-template-columns with a specified number of columns.
 *
 * @param {string} breakpointPrefix - The prefix for the breakpoint (e.g., "sm", "md", "lg").
 * @param {number} [maxColumns=8] - The maximum number of columns to generate (defaults to 8).
 * @returns {string} A string containing the generated CSS rules for grid-template-columns.
 */
export const generateColumnRules = (breakpointPrefix, maxColumns = 8) => {
	const columnRules = []

	for (let i = 1; i <= maxColumns; i++) {
		columnRules.push(`
	[data-${breakpointPrefix}~="${i}column"] {
        grid-template-columns: repeat(${i}, 1fr);
    }`)
	}

	// Join rules without extra newlines and trim whitespace
	return columnRules.join("").trim()
}
