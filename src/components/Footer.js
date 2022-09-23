import homeIcon from '../assets/home.png'
import profileIcon from '../assets/profile.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer d-flex justify-content-between position-fixed bottom-0 start-0 col-md-12">
        <div className='home-icon-footer text-center  p-3 col-6'>
          <Link to='/'><img src={homeIcon} alt="home" /></Link>
        </div>
        <div className="profile-icon-footer text-center p-3 col-6">
          <Link to='/profile'><img src={profileIcon} alt="profile" /></Link>
        </div>
    </div>
  )
}

export default Footer