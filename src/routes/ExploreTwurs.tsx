import { getTwurs } from "../backend/api"
import { useState, useEffect, ReactNode } from "react"
import { TwurCard } from "../components/TwurCard"
import { nanoid } from "nanoid"
import { TwurInterface } from "../utils/types"
import { ExploreTwursLayout } from "../components/ExploreTwursLayout"

export function ExploreTwurs(){
    const [ twurs, setTwurs ] = useState<ReactNode[]>([])

    useEffect(() => {
        const loadTwurs = async() => {
            const res = await getTwurs()
                .catch(e => console.error(e.message));

            console.log(res)
            const elements = res.map((twur: TwurInterface) => {
                return <TwurCard key={nanoid()} name={twur.name} profile_pic={twur.profile_pic!} id={twur._id}/>
            })

            setTwurs(elements)
        }

        loadTwurs()
    }, [])

    console.log(twurs)

    return (
        <section className="w-3/4 h-full ml-auto my-6">
            <ExploreTwursLayout twurs={twurs} />
        </section>
    )
}
