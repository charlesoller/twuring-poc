// Functions
import { emptyTwur } from "../utils/helper";
import { useState, useEffect } from "react";

// Components
import { InteractionButton } from "./InteractionButton"
import { GrLike, GrDislike, GrChat } from "react-icons/gr";
import { getTwur } from "../backend/api";

// Types
import { TwurInterface, ImagePost } from "../utils/types";




export function ImagePost({ url, userId, likes, dislikes, comments }: ImagePost){
    const [ twur, setTwur ] = useState<TwurInterface>(emptyTwur)

    useEffect(() => {
        const loadTwur = async(userId: string) => {
            const res = await getTwur(userId)
            setTwur(res)
        }

        loadTwur(userId)
    }, [])

    return (
        <div className="flex w-full px-4 py-5 gap-3 hover:bg-blue-200/5 rounded-xl transition duration-200">
            <div className="flex gap-4">
                <img className="h-8 w-8 rounded-full"
                src={twur.profile_pic} />
            </div>

            <div>
                <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-0">
                        <p className="text-white/90 font-semibold m-0 p-0 h-fit text-sm">{twur.name}</p>
                        <p className="text-white/50 m-0 p-0 h-fit text-sm">@{twur.user_name}</p>
                    </div>
                </div>

                <img className="rounded-xl max-h-96 my-6"
                    src={url}
                />

                <div className="flex gap-4">
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
