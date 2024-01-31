// Import breakpoint definitions for various CSS frameworks from their respective files
import { antDesignBreakpoints } from "./frameworksBreakpoints/antDesignBreakpoints.js"
import { bassCSSBreakpoints } from "./frameworksBreakpoints/bassCSSBreakpoints.js"
import { blazeUIBreakpoints } from "./frameworksBreakpoints/blazeUIBreakpoints.js"
import { bootstrapBreakpoints } from "./frameworksBreakpoints/bootstrapBreakpoints.js"
import { bulmaBreakpoints } from "./frameworksBreakpoints/bulmaBreakpoints.js"
import { chotaBreakpoints } from "./frameworksBreakpoints/chotaBreakpoints.js"
import { defaultBreakpoints } from "./frameworksBreakpoints/defaultBreakpoints.js"
import { foundationBreakpoints } from "./frameworksBreakpoints/foundationBreakpoints.js"
import { knaCSSBreakpoints } from "./frameworksBreakpoints/knaCSSBreakpoints.js"
import { materializeBreakpoints } from "./frameworksBreakpoints/materializeBreakpoints.js"
import { materialUIBreakpoints } from "./frameworksBreakpoints/materialUIBreakpoints.js"
import { openPropsBreakpoints } from "./frameworksBreakpoints/openPropsBreakpoints.js"
import { picoBreakpoints } from "./frameworksBreakpoints/picoBreakpoints.js"
import { primerBreakpoints } from "./frameworksBreakpoints/primerBreakpoints.js"
import { pureBreakpoints } from "./frameworksBreakpoints/pureBreakpoints.js"
import { semanticUIBreakpoints } from "./frameworksBreakpoints/semanticUIBreakpoints.js"
import { skeletonBreakpoints } from "./frameworksBreakpoints/skeletonBreakpoints.js"
import { spectreBreakpoints } from "./frameworksBreakpoints/spectreBreakpoints.js"
import { tailwindBreakpoints } from "./frameworksBreakpoints/tailwindBreakpoints.js"
import { uikitBreakpoints } from "./frameworksBreakpoints/uikitBreakpoints.js"
import { vanillaBreakpoints } from "./frameworksBreakpoints/vanillaBreakpoints.js"

// Create an object to hold predefined breakpoint definitions for different frameworks
export const predefinedBreakpoints = {
	antDesign: antDesignBreakpoints,
	bassCSS: bassCSSBreakpoints,
	blazeUI: blazeUIBreakpoints,
	bootstrap: bootstrapBreakpoints,
	bulma: bulmaBreakpoints,
	chota: chotaBreakpoints,
	default: defaultBreakpoints,
	foundation: foundationBreakpoints,
	knaCSS: knaCSSBreakpoints,
	materialize: materializeBreakpoints,
	materialUI: materialUIBreakpoints,
	openProps: openPropsBreakpoints,
	pico: picoBreakpoints,
	primer: primerBreakpoints,
	pure: pureBreakpoints,
	semanticUI: semanticUIBreakpoints,
	skeleton: skeletonBreakpoints,
	spectre: spectreBreakpoints,
	tailwind: tailwindBreakpoints,
	uikit: uikitBreakpoints,
	vanilla: vanillaBreakpoints,
}
