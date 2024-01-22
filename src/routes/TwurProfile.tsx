import { getTwur } from "../backend/api"
import { useState, useEffect } from "react"
import { emptyTwur } from "../utils/helper"
import { TwurInterface } from "../utils/types"
import { useParams } from "react-router-dom"

export function TwurProfile(){
    const [ twur, setTwur ] = useState<TwurInterface>(emptyTwur)
    let { id } = useParams();

    useEffect(() => {
        const loadTwur = async(id: string) => {
            const res = await getTwur(id)
            setTwur(res)
        }

        loadTwur(id!)
    }, [])

    console.log(twur)
    return (
        <section className="w-3/4 h-full ml-auto my-6 text-white px-8">
            <div className="flex gap-8 items-center">
                <img src={twur.profile_pic} className="w-40 rounded-full"/>
                <div>
                    <h3 className="text-white/90 text-3xl">{twur.name}</h3>
                    <p className="text-white/60">@{twur.user_name}</p>
                </div>
            </div>

            <p className="text-white/80 indent-4 mt-4">{twur.description}</p>
        </section>
    )
}
