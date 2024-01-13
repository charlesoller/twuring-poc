import { HfInference } from '@huggingface/inference'

export const hf = new HfInference(import.meta.env.VITE_HUGGINGFACEHUB_PRO_API_KEY)
