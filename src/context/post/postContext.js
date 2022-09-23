import { createContext, useContext, useState } from "react";

const postContext = createContext()

export const usePost = () => {
    return useContext(postContext)
}

export const PostProvider = ({children}) => {
    const host = process.env.REACT_APP_HOST

    const [posts, setPosts] = useState()
    const [usersPost, setUsersPost] = useState()

    const fetchAllPosts = async() => {
        try {
                
            const response = await fetch(`${host}/api/post/fetchallposts`,{
                method: 'GET',
                header: {
                    'Content-Type': 'application/json'
                }
            })
            const json = await response.json()
            setPosts(json)

        } catch (error) {
            console.log(error)
        }
    }

    const createPost = async(image, textData) => {
          console.log(image, textData)
        const response = await fetch(`${host}/api/post/addpost`, {
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
            'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({image, textData})
        });
        const json = await response.json()
        
        if(json.error){
            console.error(json.error)
        }
    }

    const fetchUsersPosts = async () => {
        const response = await fetch(`${host}/api/post/fetchusersposts`, {
            method: 'GET', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            }
        });

        const json = await response.json()
        setUsersPost(json)
    }

    
    const value={
        fetchAllPosts,
        posts,
        createPost,
        fetchUsersPosts,
        usersPost
    }

    return(
        <postContext.Provider value={value}>
            {children}
        </postContext.Provider>
    )


}



