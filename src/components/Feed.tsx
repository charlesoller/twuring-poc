import { ReactNode } from "react";

export function Feed({ posts }: {posts: ReactNode[]}){
    return (
        <section className="w-5/12 flex flex-col ml-auto gap-3 my-6">
            { posts }
        </section>
    )
  }
