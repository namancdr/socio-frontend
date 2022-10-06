import { useState } from "react"
import { usePost } from "../context/post/postContext"
import { useNavigate } from "react-router-dom"
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const CreatePost = () => {

    const {createPost} = usePost()
    const navigate = useNavigate()

    const [postData, setPostData] = useState({
        postData : ''
    })

    const handleChange = (e) => {
        setPostData({...postData, [e.target.name]: e.target.value})
    }

    const [imageUpload, setImageUpload] = useState(null)
    // const [imageUrl, setImageUrl] = useState()
    const handleSubmit = async(e) => { 
        e.preventDefault()

        if(imageUpload ){
            const imageRef = ref(storage, `images/${imageUpload.name}`)
            await uploadBytes(imageRef, imageUpload).then(() => {
                console.log('image uploaded')
            });

            const image = await getDownloadURL(imageRef).then((url) => {
                return url
            })
            
            image && createPost(image, postData.textData)
        }

        if(imageUpload === null){
            createPost('', postData.textData)
        }


        navigate('/')
    }

  return (
    <div className='container' style={{marginTop: "80px"}}>
        <h2>Create Post</h2>
        <hr />
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input type="file" className="form-control" id="exampleInputImage1" name="image" aria-describedby="imageHelp" 
                onChange={(event) => {setImageUpload(event.target.files[0])}} />
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