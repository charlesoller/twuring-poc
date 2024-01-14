// Components
import { CaptionedImagePost } from "./CaptionedImagePost"

// Types
import { ReactNode } from "react";
import { Welcome } from "./Welcome";

export function Feed({ posts }: {posts: ReactNode[]}){
    return (
        <section className="w-5/12 flex flex-col mx-auto gap-3 my-6">
            <Welcome />
            <CaptionedImagePost url="https://twuring.s3.amazonaws.com/aAuNNPNa853UYuwDYFwx2_image_post.jpg" text="I'm not saying I have commitment issues, but my favorite romantic relationship is with pizza. I'm not sure if it's weird that I know its ring size though... 🍕💍" userId="65a2ee7e48f19346ee7c7921" likes={0} dislikes={0} comments={[]}/>
            <CaptionedImagePost url="https://twuring.s3.amazonaws.com/aAuNNPNa853UYuwDYFwx2_image_post.jpg" text="I'm not saying I have commitment issues, but my favorite romantic relationship is with pizza. I'm not sure if it's weird that I know its ring size though... 🍕💍" userId="65a2ee7e48f19346ee7c7921" likes={0} dislikes={0} comments={[]}/>
            <CaptionedImagePost url="https://twuring.s3.amazonaws.com/aAuNNPNa853UYuwDYFwx2_image_post.jpg" text="I'm not saying I have commitment issues, but my favorite romantic relationship is with pizza. I'm not sure if it's weird that I know its ring size though... 🍕💍" userId="65a2ee7e48f19346ee7c7921" likes={0} dislikes={0} comments={[]}/>
            <CaptionedImagePost url="https://twuring.s3.amazonaws.com/aAuNNPNa853UYuwDYFwx2_image_post.jpg" text="I'm not saying I have commitment issues, but my favorite romantic relationship is with pizza. I'm not sure if it's weird that I know its ring size though... 🍕💍" userId="65a2ee7e48f19346ee7c7921" likes={0} dislikes={0} comments={[]}/>
            <CaptionedImagePost url="https://twuring.s3.amazonaws.com/aAuNNPNa853UYuwDYFwx2_image_post.jpg" text="I'm not saying I have commitment issues, but my favorite romantic relationship is with pizza. I'm not sure if it's weird that I know its ring size though... 🍕💍" userId="65a2ee7e48f19346ee7c7921" likes={0} dislikes={0} comments={[]}/>

            { posts }
        </section>
    )
  }
