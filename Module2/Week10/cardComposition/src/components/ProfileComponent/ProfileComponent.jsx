import PropTypes from 'prop-types'
import './ProfileComponent.css';

const ProfileComponent = ({ imageSource, infoUser }) => {

  return (
    <div className='card'>
      <img src={imageSource} alt="Profile picture" />
      { infoUser }
    </div>
  )
}

ProfileComponent.propTypes = {
  imageSource: PropTypes.any.isRequired,
  infoUser: PropTypes.node.isRequired,
}

export default ProfileComponent

