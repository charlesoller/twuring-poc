// Components

// Types
import { ReactNode } from "react";
import { Welcome } from "./Welcome";

export function Feed({ posts }: {posts: ReactNode[]}){
    return (
        <section className="w-5/12 flex flex-col mx-auto gap-3 my-6">
            <Welcome />
            { posts }
        </section>
    )
  }
