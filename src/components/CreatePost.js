import { useState } from "react"
import { usePost } from "../context/post/postContext"
import { useNavigate } from "react-router-dom"

const CreatePost = () => {

    const {createPost} = usePost()
    const navigate = useNavigate()

    const [postData, setPostData] = useState({
        image: '',
        textData: ''
    })

    const handleChange = (e) => {
        setPostData({...postData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => { 
        e.preventDefault()
        await createPost(postData.image, postData.textData)
        navigate('/')
    }

  return (
    <div className='container' style={{marginTop: "80px"}}>
        <h2>Create Post</h2>
        <hr />
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input type="text" className="form-control" id="exampleInputImage1" name="image" aria-describedby="imageHelp" 
                onChange={handleChange} value={postData.image} />
            </div>
            <div className="mb-3">
                <label htmlFor="text" className="form-label"></label>
                <textarea type="text" className="form-control" name="textData" id="textData" 
                onChange={handleChange} value={postData.textData} placeholder="Enter your thoughts here!" required/>
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
        </form>
    </div>
  )
}

export default CreatePost