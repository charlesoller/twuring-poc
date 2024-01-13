import { hf } from "./clients";

export const processCommand = async(personality: string, command: string) => {
    const user = `User: ${command} [/INST]\n`
    const prompt = personality + user;
    try {
        const output = await generateText(prompt, ["User:"])
        return output
    } catch (e: any) {
        throw new Error(e.message)
    }
}

const generateText = async(input: string, stop: string[]) => {
    try {
        const res = await hf.textGeneration({
            model: "meta-llama/Llama-2-70b-chat-hf",
            inputs: input,
            parameters: {
                stop_sequences: stop,
                temperature: 1.15,
                top_k: 200,
                repetition_penalty: 1.1,
                // @ts-ignore
                use_cache: false,   //This is VITAL but not recognized on the hf type
            }
        })

        return res.generated_text
    } catch (e: any) {
        throw new Error (e.message)
    }

}
