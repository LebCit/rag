// Import the `createResponsiveAttributesFile` function from the `responsiveAttributes.js` file.
import { createResponsiveAttributesFile } from "./responsiveAttributes.js"
// Import the `getClickedRow` function from the "getClickedRow.js" file
import { getClickedRow } from "./helpers/getClickedRow.js"

// Add an event listener to the document that will trigger when the DOM content is fully loaded.
document.addEventListener("DOMContentLoaded", () => {
	// Select all labels within the grid
	const labels = document.querySelectorAll("#grid label")

	labels.forEach((label) => {
		// Select the label's input element
		const radio = label.previousElementSibling
		// Check if the radio is checked and display instructions
		if (radio.checked) getClickedRow(label)
		// Attach input event listener to the radio
		radio.addEventListener("input", () => {
			getClickedRow(label) // Call the getClickedRow function when an input is checked
		})
		// Always display instructions below the label even if the device orientation changes
		window.addEventListener("resize", () => {
			if (radio.checked) getClickedRow(label)
		})
	})

	// Call the `createResponsiveAttributesFile` function, passing in the CSS selector '[data-btn="generate-responsive-attributes"]' as an argument.
	// This function creates a file containing responsive attributes for use in styling.
	createResponsiveAttributesFile('[data-btn="generate-responsive-attributes"]')
})
