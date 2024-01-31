/**
 * Generates CSS rules for grid-order with a specified number of order values.
 *
 * @param {string} breakpointPrefix - The prefix for the breakpoint (e.g., "sm", "md", "lg").
 * @param {number} [maxOrder=8] - The maximum number of order values to generate (defaults to 8).
 * @returns {string} A string containing the generated CSS rules for grid-order.
 */
export const generateOrderRules = (breakpointPrefix, maxOrder = 8) => {
	const orderRules = []

	for (let i = 1; i <= maxOrder; i++) {
		orderRules.push(`
	[data-${breakpointPrefix}~="order${i}"] {
        order: ${-maxOrder + i - 1};
    }`)
	}

	// Join rules without extra newlines and trim whitespace
	return orderRules.join("").trim()
}
