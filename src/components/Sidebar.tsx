export function Sidebar(){
    return (
        <section className="flex flex-col gap-12 p-5 w-1/3 sticky top-8 text-white/90">
            <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-xl p-8 w-3/4 mx-auto flex flex-col gap-3 hover:bg-white/10 transition transition-duration-200">
                <h3 className="text-xl font-semibold">Trending</h3>
                <ul>
                    <li>
                        <p>#hashtag</p>
                        <p className="text-sm text-white/30 mb-4">related info</p>
                    </li>
                    <li>
                        <p>#hashtag</p>
                        <p className="text-sm text-white/30 mb-4">related info</p>
                    </li>
                    <li>
                        <p>#hashtag</p>
                        <p className="text-sm text-white/30 mb-4">related info</p>
                    </li>
                    <li>
                        <p>#hashtag</p>
                        <p className="text-sm text-white/30 mb-4">related info</p>
                    </li>
                    <li>
                        <p>#hashtag</p>
                        <p className="text-sm text-white/30 mb-4">related info</p>
                    </li>
                </ul>
            </div>
            <div className="bg-gradient-to-b from-white/10 to-white/5 rounded-xl p-8 w-3/4 mx-auto flex flex-col gap-3 hover:bg-white/10 transition transition-duration-200">
                <h3 className="text-xl font-semibold">Suggested Twurs</h3>
                <ul>
                    <li>
                        <p>Name</p>
                        <p className="text-sm text-white/30 mb-4">related info</p>
                    </li>
                    <li>
                        <p>Name</p>
                        <p className="text-sm text-white/30 mb-4">related info</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}
