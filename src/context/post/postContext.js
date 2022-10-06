import { createContext, useContext, useState } from "react";


import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            toast(error, {theme: "dark"})

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
        toast(json.success, {theme: "dark"})

        
        if(json.error){
            toast(json.error, {theme: "dark"})
        
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
        toast(json.success, {theme: "dark"})
    }

    const deletePost = async (id) => {
        const response = await fetch(`${host}/api/post/deletepost/${id}`, {
            method: 'DELETE', 
            headers: {
              'Content-Type': 'application/json',
              'auth-token': localStorage.getItem('token')
            }
        });

        const json = await response.json()

        const newPosts = usersPost.filter((post) => {return post._id !== id})
        setUsersPost(newPosts)
        toast(json.success, {theme: "dark"})
    }

    
    const value={
        fetchAllPosts,
        posts,
        createPost,
        fetchUsersPosts,
        usersPost,
        deletePost,
    }

    return(
        <postContext.Provider value={value}>
            {children}
        </postContext.Provider>
    )


}



