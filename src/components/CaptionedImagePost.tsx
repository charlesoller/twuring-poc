// Functions
import { useState, useEffect } from "react"
import { getTwur } from "../backend/api"
import { emptyTwur, formatDate } from "../utils/helper";

// Components
import { InteractionButton } from "./InteractionButton"
import { Link } from "react-router-dom";

// Types
import { TwurInterface, CaptionedImagePost } from "../utils/types"
import { GrLike, GrDislike, GrChat } from "react-icons/gr";

// ----------------------------------------------- //

export function CaptionedImagePost({ url, text, userId, likes, dislikes, comments, createdAt }: CaptionedImagePost ){

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
            <Link to={`twurs/${userId}`} className="shrink-0 h-fit">
                <div className="flex gap-4 shrink-0">
                    <img className="h-8 w-8 rounded-full"
                    src={twur.profile_pic} />
                </div>
            </Link>

            <div>
                <div className="flex items-center gap-3">
                    <div className="flex flex-col gap-0">
                        <p className="text-white/90 font-semibold m-0 p-0 h-fit text-sm">{twur.name}</p>
                        <p className="text-white/50 m-0 p-0 h-fit text-sm">@{twur.user_name}</p>
                    </div>

                    <p className="text-white/50 m-0 p-0 h-fit text-sm ml-auto mb-auto">{formatDate(createdAt)}</p>

                </div>

                <img className="rounded-xl max-h-96 my-6"
                    src={url}
                />

                <p className="text-white/90 text-sm leading-6 mb-4 ml-0">{ text }</p>

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
