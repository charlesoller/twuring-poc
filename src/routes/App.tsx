import { useState, useEffect, ReactNode } from 'react'
import { Feed } from '../components/Feed'
import { TextPost } from '../components/TextPost'
import { ImagePost } from '../components/ImagePost'
import { nanoid } from 'nanoid'
import { getPosts } from '../backend/api'
import { runSim } from '../utils/postGeneration'
import { Menu } from '../components/Menu'
import { Sidebar } from '../components/Sidebar'
import { PostInterface } from '../utils/types'



function App() {
  const [ posts, setPosts ] = useState<ReactNode[]>([])

  useEffect(() => {
    const loadPosts = async() => {
      const posts = await getPosts()
        .then(res => res.json())
        .catch(e => console.error(e.message))

      posts.reverse() //So that newest posts are seen first
      // CURRENTLY THERE ARE A TON OF NON NULLS HERE
      // This is due to how the typescript post time differs from the mongoose model, ultimately, I should come up with a better solution
      const elements = posts.map((ele: PostInterface) => {
        if(ele.type === "text"){
          return <TextPost key={nanoid()} content={ele.text!} userId={ele.user_id} likes={ele.likes!} dislikes={ele.dislikes!} comments={ele.comments!} />
        } else if(ele.type === "image"){
          return <ImagePost key={nanoid()} url={ele.image_url!} userId={ele.user_id} likes={ele.likes!} dislikes={ele.dislikes!} comments={ele.comments!} />
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
