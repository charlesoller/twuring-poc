import { PostInterface, TwurCreateInterface } from "../utils/types.ts"

export const createPost = async(data: PostInterface) => {
    console.log("Creating a post from the following data: ", data)
    try {
        const res = await fetch("http://localhost:3000/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        return res
    } catch (e: any) {
        console.error("FAILED TO POST IN API")
        throw new Error("Failed to post to server.")
    }
}

export const getPosts = async() => {
    try {
        const res = await fetch("http://localhost:3000/posts")
        return res
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export const getPost = async(id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/posts/${id}`)
        return res
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export const createTwur = async(data: TwurCreateInterface) => {
    try {
        const res = await fetch("http://localhost:3000/twurs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        return res
    } catch(e: any) {
        throw new Error(e.message)
    }

}

export const getTwurs = async() => {
    try {
        const res = await fetch("http://localhost:3000/twurs")
        return res.json();
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export const getTwur = async(id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/twurs/${id}`)
        return res.json()
    } catch (e: any) {
        throw new Error(e.message)
    }
}

export const updateTwurProfilePicture = async(id: string, url: string) => {
    try {
        const res = await fetch(`http://localhost:3000/twurs/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
                'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS'
            },
            body: JSON.stringify({ profile_pic: url })
        })

        return res
    } catch(e: any) {
        throw new Error(e.message)
    }
}

export const updateTwurPosts = async(twur_id: string, post_id: string) => {
    try {
        const res = await fetch(`http://localhost:3000/twurs/${twur_id}/posts`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
                'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS'
            },
            body: JSON.stringify({ post_id })
        })

        return res
    } catch(e: any) {
        throw new Error(e.message)
    }
}
