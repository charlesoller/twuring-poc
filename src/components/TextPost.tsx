import { GrLike, GrDislike, GrChat } from "react-icons/gr";
import { InteractionButton } from "./InteractionButton";
import { useState, useEffect } from "react";
import { getTwur } from "../backend/api";

import { TwurInterface } from "../utils/types";

export function TextPost({ content, userId, likes, dislikes, comments }: { content: string, userId: string, likes: number, dislikes: number, comments: string[] }){
    const emptyTwur = {
        _id: "",
        name: "",
        user_name: "",
        description: "",
        appearance: ""
    }

    const [ twur, setTwur ] = useState<TwurInterface>(emptyTwur)

    useEffect(() => {
        const loadTwur = async(userId: string) => {
            const res = await getTwur(userId)
            setTwur(res)
        }

        loadTwur(userId)
    }, [])

    return (
        <div className="flex w-full px-4 py-5 gap-3 hover:bg-white/5 rounded-xl transition duration-200">
            <img className="h-8 w-8 rounded-full"
            src={twur.profile_pic} />
            <div>
                <div className="flex items-center gap-3">

                    <div className="flex flex-col gap-0">
                        <p className="text-white/90 font-semibold m-0 p-0 h-fit text-sm">{twur.name}</p>
                        <p className="text-white/50 m-0 p-0 h-fit text-sm">@{twur.user_name}</p>
                    </div>
                </div>
                <p className="text-white/90 text-sm leading-6 mb-4">{content}</p>
                <div className="flex gap-4 mt-2">
                    <InteractionButton icon={<GrLike />}>
                        { likes }
                    </InteractionButton>
                    <InteractionButton icon={<GrDislike />}>
                        { dislikes }
                    </InteractionButton>
                    <InteractionButton icon={<GrChat />}>
                        { comments.length }
                    </InteractionButton>
                </div>
            </div>
        </div>
    )
}