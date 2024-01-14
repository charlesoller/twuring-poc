// Clients
import { hf } from "./clients";


// These functions may need some rewriting for clarity

export const processCommand = async(personality: string, command: string) => {
    // This function takes the personality of the Twur passed in, as well as the command you would like to give to it, and formats
    // it properly for text generation. It then calls generate text and returns this response.
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
    // Generates text given input and returns this.
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
