import likeIcon from '../assets/like.png'
import commentIcon from '../assets/comment.png'
import shareIcon from '../assets/share.png'

const PostCard = (props) => {
    const {post} = props
    return(
        <>
        <div className="container post-card d-flex flex-column justify-content-center mt-4">  
            <div className="post-header d-flex align-items-center mt-2">
                <div className="post-profile-pic-container">
                    <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' className="post-profile-pic img-fluid" alt="profile" />
                </div>
                <div className="mx-3" style={{lineHeight: "1.1"}}>
                    <span style={{fontSize: "16px"}}>{post.user.name}</span><br />
                    <span style={{fontSize: "12px"}} className="small text-muted">12 mins ago</span>
                </div>

            </div>

            {post.image && <div className="post-img mt-3">
                 <img src={post.image} className="img-fluid" alt="post" /> 
            </div>
            }
            <div className="post-text">
                <p className='my-3'>{post.textData}</p>
            </div>
            <div className="post-footer">
                <div className="d-flex mt-2">
                    <img className='me-2' src={likeIcon} alt="like" />
                    <img className='mx-2' src={commentIcon} alt="like" />
                    <img className='mx-2' src={shareIcon} alt="like" />
                </div>
                <div className="d-flex mt-3">
                    <p className='small'>200 <span className='text-muted'>likes</span> &nbsp;&nbsp; • &nbsp;&nbsp; 45 <span className='text-muted'>comments</span></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default PostCard