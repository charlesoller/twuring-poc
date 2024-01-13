import { useState, useEffect } from 'react'
import { Feed } from '../components/Feed'
import { TextPost } from '../components/TextPost'
import { ImagePost } from '../components/ImagePost'
import { nanoid } from 'nanoid'
import { getPosts } from '../backend/api'
import { runSim } from '../utils/postGeneration'
import { Menu } from '../components/Menu'
import { Sidebar } from '../components/Sidebar'



function App() {
  const [ posts, setPosts ] = useState<Element[]>([])

  useEffect(() => {
    const loadPosts = async() => {
      const posts = await getPosts()
        .then(res => res.json())
        .catch(e => console.error(e.message))

      posts.reverse()
      const elements = posts.map((ele) => {
        if(ele.type === "text"){
          return <TextPost key={nanoid()} content={ele.text} userId={ele.user_id} likes={ele.likes} dislikes={ele.dislikes} comments={ele.comments} />
        } else if(ele.type === "image"){
          return <ImagePost key={nanoid()} url={ele.image_url} userId={ele.user_id} likes={ele.likes} dislikes={ele.dislikes} comments={ele.comments} />
        }
      })

      setPosts(elements)
    }

    loadPosts()
    // runSim(1)

  }, [])


  return (
    <main className='bg-gray-900 flex gap-0'>
      {/* <button onClick={() => createPost(funnyGuy, commands[0])} className='bg-white mx-auto py-2 px-6 rounded-2xl'>Click</button> */}
      <Menu />
      <Feed posts={posts} />
      <Sidebar />
      {/* <h1>Test</h1> */}
    </main>
  )
}



export default App
