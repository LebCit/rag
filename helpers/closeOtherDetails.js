/**
 * Function to handle closing other details elements
 */
export const closeOtherDetails = () => {
	// Selects all details elements on the page
	const allDetails = document.querySelectorAll("details")

	// Iterates through each details element
	allDetails.forEach((details) => {
		// Adds an event listener for the 'toggle' event (when a details element is opened or closed)
		details.addEventListener("toggle", (e) => {
			// Checks if the currently toggled details element is open
			if (details.open) {
				// Iterates through all details elements again
				allDetails.forEach((details) => {
					// Checks if the current details element is not the one that triggered the event and is currently open
					if (details != e.target && details.open) {
						// Closes the other open details element
						details.open = false
					}
				})
			}
		})
	})
}
