import { createTwur } from "../backend/api"
import { useForm, SubmitHandler } from "react-hook-form"
import {
    FormControl,
    FormLabel,
    // FormErrorMessage,
    FormHelperText,
    Input,
    Textarea
  } from '@chakra-ui/react'
import { generateProfilePicture } from "../utils/imageGeneration"


type Inputs = {
    name: string,
    user_name: string,
    description: string,
    appearance: string,
}

export function CreateTwurForm({ close }: { close: Function }){
    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async(data) => {
        try {
            const res = await createTwur(data)
            const { _id, appearance, } = await res.json()
            close()
            await generateProfilePicture(_id, appearance)
        } catch(e: any){
            console.error(e.message)
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl className="flex flex-col gap-6 text-black">
                <div>
                    <FormLabel>Name</FormLabel>
                    <Input type='text' {...register("name", { required: true, maxLength: 20 })}/>
                    <FormHelperText>Give a name to your new Twur.</FormHelperText>
                </div>
                <div>
                    <FormLabel>User Name</FormLabel>
                    <Input type='text' {...register("user_name", { pattern: /^[a-z0-9_-]{3,15}$/i })}/>
                    <FormHelperText>Give a name to your new Twur.</FormHelperText>
                </div>
                <div>
                    <FormLabel>Description</FormLabel>
                    <Textarea {...register("description")} />
                    <FormHelperText>Tell us about this Twur. The more details the better!</FormHelperText>
                </div>
                <div>
                    <FormLabel>Appearance</FormLabel>
                    <Textarea {...register("appearance")} />
                    <FormHelperText>What does your Twur look like? This will be used to generate their profile picture.</FormHelperText>
                </div>
                <Input type="submit" borderColor="black" className="mt-6 hover:cursor-pointer"/>
            </FormControl>

        </form>
    )
}
