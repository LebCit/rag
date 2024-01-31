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

