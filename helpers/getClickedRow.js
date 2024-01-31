let previousEmptyRow // Reference to the previously added empty row (global to maintain state across calls)

/**
 * This function handles the following:
 * 1. Determines the row number where a clicked label is located within a grid.
 * 2. Adds an empty row below the clicked label.
 * 3. Displays text from a hidden element in the newly added row.
 *
 * @param {HTMLElement} label - The clicked label element.
 */
export const getClickedRow = (label) => {
	// **1. Get grid and label information:**
	const grid = document.getElementById("grid") // Get the grid element
	const visibleLabels = Array.from(grid.querySelectorAll("label")) // Get all visible labels in the grid
	const labelIndex = visibleLabels.indexOf(label) // Get the index of the clicked label

	// **2. Calculate row number:**
	const gridStyles = getComputedStyle(grid) // Get computed styles of the grid
	const columns = parseInt(gridStyles.gridTemplateColumns.split(" ").length) // Get number of columns
	//const gap = parseInt(gridStyles.gap) // Get gap between grid items
	const row = Math.floor(labelIndex / columns) + 1 // Calculate row based on label index, columns, and gap

	//console.log("Clicked label is in row:", row) // Log the row number

	// **3. Remove any existing empty row:**
	if (previousEmptyRow) {
		grid.removeChild(previousEmptyRow) // Remove the previous empty row if it exists
		previousEmptyRow = null // Reset the reference
	}

	// **4. Get hidden text and create a new empty row:**
	const hiddenInstructions = label.nextElementSibling // Get the hidden instructions element
	const hiddenHTML = hiddenInstructions.innerHTML // Get the inner HTML of the hidden instructions

	const emptyRow = document.createElement("div") // Create a new empty row element
	emptyRow.style.gridRow = row + 1 // Position the empty row below the clicked label
	emptyRow.style.gridColumn = "1 / -1" // Make the empty row span all columns
	grid.appendChild(emptyRow) // Add the empty row to the grid

	// **5. Add hidden instructions to the new row and update grid height:**
	//const textNode = document.createTextNode(hiddenHTML) // Create a text node with the hidden text
	emptyRow.insertAdjacentHTML("afterbegin", hiddenHTML) // Insert hiddenHTML into the empty row
	//emptyRow.appendChild(textNode) // Add the text node to the empty row

	// Update grid height to accommodate the new row
	grid.style.gridTemplateRows = `repeat(${row + 2}, auto)`

	// **6. Store reference to the newly added row:**
	previousEmptyRow = emptyRow // Store a reference for future removal
}
