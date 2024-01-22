export function Sidebar(){
    return (
        <section className="fixed right-0 top-0 flex flex-col gap-12 px-10 py-8 w-1/3 text-white/90">
            <div className="bg-blue-300/10 rounded-xl p-8 w-3/4 ml-auto flex flex-col gap-3 hover:bg-blue-100/10 transition duration-300 drop-shadow-2xl">
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
            <div className="bg-blue-300/10 rounded-xl p-8 w-3/4 ml-auto flex flex-col gap-3 hover:bg-blue-100/10 transition duration-300 drop-shadow-2xl">
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
