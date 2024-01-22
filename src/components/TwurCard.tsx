import { Link } from "react-router-dom";

export function TwurCard({ name, profile_pic, id }: {name: string, profile_pic: string, id: string}){
    return (
        <Link to={`/twurs/${id}`}>
            <article className="h-96 rounded-xl overflow-hidden text-white/60 relative hover:cursor-pointer hover:text-white/80 transition duration-300">
                <div className="bg-cover bg-no-repeat bg-center h-full w-full rounded-xl relative hover:scale-110 transition duration-300" style={{backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(${profile_pic})`}} />

                <div className="absolute bottom-2 ml-2">
                    <h3 className="text-white/90 text-2xl w-fit my-auto">{name}</h3>
                    <p>Lorem ipsum dolor</p>
                </div>
            </article>
        </Link>
    )
}
