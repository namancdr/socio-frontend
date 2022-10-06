import likeIcon from '../assets/like.png'
import commentIcon from '../assets/comment.png'
import shareIcon from '../assets/share.png'

const PostCard = (props) => {
    const {post} = props

    // function to format date in seconds/minutes/hours/days ago
    const timeSince = (date) => {
        if (typeof date !== 'object') {
          date = new Date(date);
        }
      
        const seconds = Math.floor((new Date() - date) / 1000);
        let intervalType;
      
        let interval = Math.floor(seconds / 31536000);
        if (interval >= 1) {
          intervalType = 'year';
        } else {
          interval = Math.floor(seconds / 2592000);
          if (interval >= 1) {
            intervalType = 'month';
          } else {
            interval = Math.floor(seconds / 86400);
            if (interval >= 1) {
              intervalType = 'day';
            } else {
              interval = Math.floor(seconds / 3600);
              if (interval >= 1) {
                intervalType = "hour";
              } else {
                interval = Math.floor(seconds / 60);
                if (interval >= 1) {
                  intervalType = "minute";
                } else {
                  interval = seconds;
                  intervalType = "second";
                }
              }
            }
          }
        }
      
        if (interval > 1 || interval === 0) {
          intervalType += 's'
        }
      
        return interval + ' ' + intervalType;
      };
    

    return(
        <>
        <div className="container post-card d-flex flex-column justify-content-center mt-2">  
            <div className="post-header d-flex align-items-center mt-2">
                <div className="post-profile-pic-container">
                    <img src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg' className="post-profile-pic img-fluid" alt="profile" />
                </div>
                <div className="mx-3" style={{lineHeight: "1.1"}}>
                    <span style={{fontSize: "16px"}}>{post.user.name}</span><br />
                    <span style={{fontSize: "12px"}} className="small text-muted">{timeSince(post.date)  + " ago"}</span>
                </div>

            </div>
            {post.image && <div className="post-img mt-2">
                 <img src={post.image} className="img-fluid" alt="post" /> 
            </div>
            }
            <div className="post-text">
                <p className='mt-3'>{post.textData}</p>
            </div>
            <div className="post-footer">
                <div className="d-flex">
                    <img className='me-2' src={likeIcon} alt="like" />
                    <img className='mx-2' src={commentIcon} alt="like" />
                    <img className='mx-2' src={shareIcon} alt="like" />
                </div>
                <div className="d-flex mt-2">
                    <p className='small'>200 <span className='text-muted'>likes</span> &nbsp;&nbsp; • &nbsp;&nbsp; 45 <span className='text-muted'>comments</span></p>
                </div>
            </div>
        </div><hr />
        </>
    )
}

export default PostCard