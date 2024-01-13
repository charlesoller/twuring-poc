import { exampleDialogue } from "./exampleDialogue";
import { guidelines } from "./guidelines";
import { toolsAvailable } from "./tools";

export const createInstructions = (description: string) => {
const instructions =
`<s>[INST] <<SYS>>
${description}
${guidelines}

${toolsAvailable}

${exampleDialogue}
<</SYS>>`

return instructions
}
