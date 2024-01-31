// Import the object that holds predefined breakpoint definitions for different frameworks
import { predefinedBreakpoints } from "./predefinedBreakpoints.js"
// Import functions for generating CSS grid rules
import { generateColumnRules } from "./helpers/generateColumnRules.js"
import { generateColumnSpanRules } from "./helpers/generateColumnSpanRules.js"
import { generateRowSpanRules } from "./helpers/generateRowSpanRules.js"
import { generateOrderRules } from "./helpers/generateOrderRules.js"

/**
 * Generates CSS grid rules based on provided breakpoints.
 *
 * @param {Object<string, [number, string]>} breakpoints - An object defining breakpoints prefixes and their corresponding widths in pixels with an optional label for the breakpoint.
 * @returns {string} The generated CSS grid rules.
 */
const createGridRules = (breakpoints) => {
	// Stores all generated CSS grid rules.
	let allRules = ""

	// Adds copyright and root rules to the beginning of the generated CSS.
	allRules += `/* 
Responsive Attributes
By Matthew James Taylor

Full documentation:
https://matthewjamestaylor.com/responsive-attributes
*/

:root {
    /* padding */
    --pad: calc(8px + 1.5625vw);
    --pad2: calc(var(--pad) * 2);

    /* gutters */
    --gap: calc(8px + 1.5625vw);
    --gap2: calc(var(--gap) * 2);
}

`

	// Iterates through each breakpoint and generates corresponding CSS grid rules.
	for (const [breakpointPrefix, breakpointWidth] of Object.entries(breakpoints)) {
		const rules = `/* ${breakpointWidth[1]} rules */
@media (min-width: ${breakpointWidth[0]}px) {
    /* default to one column */
    [data-${breakpointPrefix}*="column"] {
        display: grid;
        grid-template-columns: 1fr;
        margin: 0;
    }
        
    /* remove leading/trailing margins on columns */
    [data-${breakpointPrefix}*="column"] > * {
        margin: 0;
    }

    /* remove leading/trailing margins on content within columns */
    [data-${breakpointPrefix}*="column"] > * > :first-child {
        margin-top: 0;
    }
    [data-${breakpointPrefix}*="column"] > * > :last-child {
        margin-bottom: 0;
    }
    
    /* padding */
    [data-${breakpointPrefix}~="pad"] {
        padding: var(--pad);
    }
    [data-${breakpointPrefix}~="pad2"] {
        padding: var(--pad2);
    }

    [data-${breakpointPrefix}] > [data-${breakpointPrefix}~="noPad"],
    [data-${breakpointPrefix}~="noPad"] {
        padding: 0;
    }

    [data-${breakpointPrefix}~="childPad"] > * {
        padding: var(--pad);
    }
    [data-${breakpointPrefix}~="childPad2"] > * {
        padding: var(--pad2);
    }

    /* gutter */
    [data-${breakpointPrefix}~="gap"] {
        gap: var(--gap);
    }
    [data-${breakpointPrefix}~="gap2"] {
        gap: var(--gap2);
    }

    [data-${breakpointPrefix}] > [data-${breakpointPrefix}~="noGap"],
    [data-${breakpointPrefix}~="noGap"] {
        gap: 0;
    }

    /* columns */
    ${generateColumnRules(breakpointPrefix)}

    /* column spans */
    ${generateColumnSpanRules(breakpointPrefix)}

    /* row spans */
    ${generateRowSpanRules(breakpointPrefix)}

    /* order */
    ${generateOrderRules(breakpointPrefix)}

    /* horizontal align */
    [data-${breakpointPrefix}~="left"] {
        justify-self: start;
    }
    [data-${breakpointPrefix}~="center"] {
        justify-self: center;
    }
    [data-${breakpointPrefix}~="right"] {
        justify-self: end;
    }
    [data-${breakpointPrefix}~="noHA"] {
        justify-self: unset;
    }

    /* vertical align */
    [data-${breakpointPrefix}~="top"] {
        align-self: start;
    }
    [data-${breakpointPrefix}~="middle"] {
        align-self: center;
    }
    [data-${breakpointPrefix}~="bottom"] {
        align-self: end;
    }
    [data-${breakpointPrefix}~="noVA"] {
        align-self: unset;
    }

    /* text align */
    [data-${breakpointPrefix}~="textL"] {
        text-align: left;
    }
    [data-${breakpointPrefix}~="textC"] {
        text-align: center;
    }
    [data-${breakpointPrefix}~="textR"] {
        text-align: right;
    }
    [data-${breakpointPrefix}~="noTA"] {
        text-align: unset;
    }

    /* hide element */
    [data-${breakpointPrefix}*="hide"] {
        display: none;
    }

    /* show element */
    [data-${breakpointPrefix}*="show"] {
        display: block;
    }

    /* responsive image */
    [data-${breakpointPrefix}*="rspImg"] {
        height: auto;
        width: 100%;
    }
}

`

		// Appends the generated rules for the current breakpoint to the overall rules string.
		allRules += rules
	}

	// Returns the final generated CSS grid rules string.
	return allRules
}

/**
 * Generates CSS grid rules based on provided breakpoints and prompts the user to save them as a CSS file.
 *
 * @param {Object<string, [number, string]>} breakpoints - An object defining breakpoints prefixes and their corresponding widths in pixels with an optional label for the breakpoint.
 * @param {string} [desiredFilePath] - An optional starting directory for the save file picker. Defaults to "desktop".
 * @returns {Promise<void>} A promise that resolves when the styles are successfully written to a file, or rejects if an error occurs.
 */
async function generateAndWriteStylesToFile(breakpoints, desiredFilePath) {
	try {
		// Generates the CSS grid rules content.
		const styles = createGridRules(breakpoints)

		// Creates a Blob (Binary Large Object) to represent the CSS content as a file.
		const cssBlob = new Blob([styles], { type: "text/css" })

		// Handle file saving based on browser compatibility:
		let fileHandle
		if (window.showSaveFilePicker) {
			// Use File System Access API for compatible browsers
			fileHandle = await window.showSaveFilePicker({
				types: [{ description: "CSS files", accept: { "text/css": [".css"] } }],
				startIn: desiredFilePath || "desktop", // Optional starting directory
				suggestedName: "responsive-attributes.css", // Optional suggested filename
			})
		} else {
			// Use a temporary link for Firefox
			const link = document.createElement("a")
			link.href = URL.createObjectURL(cssBlob)
			link.download = "responsive-attributes.css"
			link.click()
			URL.revokeObjectURL(link.href)
			return // No need to continue for Firefox
		}

		// Writes the CSS content to the selected file if a file handle is obtained (for File System Access API).
		if (fileHandle !== null) {
			const writableStream = await fileHandle.createWritable()
			await writableStream.write(cssBlob)
			await writableStream.close()
			console.log("Styles successfully written to file!")
		}
	} catch (error) {
		console.error("Error writing styles to file:", error)
	}
}

/**
 * Retrieves data based on the selection of a radio button group.
 *
 * @param {string} name The name attribute of the radio button group.
 * @param {object} valueMap An object mapping radio button values to their corresponding data.
 * @returns {any} The data associated with the selected radio button, or undefined if no selection is made.
 */
function getValueFromSelection(name, valueMap) {
	// Get the selected radio button value
	const selectedValue = document.querySelector(`input[name="${name}"]:checked`)?.value

	// Check if a selection is made and return the corresponding value
	return selectedValue ? valueMap[selectedValue] : undefined
}

