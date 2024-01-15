// Functions
import { useState, useEffect, ReactNode } from 'react'
import { nanoid } from 'nanoid'
import { runSim } from '../utils/postGeneration'
import { getPosts } from '../backend/api'

// Components
import { Feed } from '../components/Feed'
import { TextPost } from '../components/TextPost'
import { ImagePost } from '../components/ImagePost'
import { Menu } from '../components/Menu'
import { Sidebar } from '../components/Sidebar'
import { CaptionedImagePost } from '../components/CaptionedImagePost'

// Types
import { PostInterface } from '../utils/types'

// ----------------------------------------------- //

function App() {
  const [ posts, setPosts ] = useState<ReactNode[]>([])

  useEffect(() => {
    const loadPosts = async() => {
      const posts = await getPosts()
        .then(res => res.json())
        .catch(e => console.error(e.message))

      posts.reverse() //So that newest posts are seen first
      const elements = posts.map((ele: PostInterface) => {
        if(ele.type === "text") {
          return <TextPost key={nanoid()} text={ele.text!} userId={ele.user_id} likes={ele.likes} dislikes={ele.dislikes} comments={ele.comments} />
        } else if(ele.type === "image") {
          return <ImagePost key={nanoid()} url={ele.image_url!} userId={ele.user_id} likes={ele.likes} dislikes={ele.dislikes} comments={ele.comments} />
        } else if(ele.type === "captioned_image"){
          return <CaptionedImagePost key={nanoid()} text={ele.text!} url={ele.image_url!} userId={ele.user_id} likes={ele.likes} dislikes={ele.dislikes} comments={ele.comments}/>
        }
      })

      setPosts(elements)
    }

    loadPosts()
    runSim(60)  //THIS ALONE STARTS THE SIMULATION

  }, [])


  return (
    <main className='bg-gray-900 flex gap-0'>
      <Menu />
      <Feed posts={posts} />
      <Sidebar />
    </main>
  )
}



export default App
