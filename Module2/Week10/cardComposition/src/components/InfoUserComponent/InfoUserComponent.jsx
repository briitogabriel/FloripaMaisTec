import PropTypes from 'prop-types'

const InfoUserComponent = ({ userdata }) => {

  return (
    <div className='userData'>
      <h1>{userdata.username}</h1>
      <p>{userdata.role}</p>
      <p>{userdata.email}</p>
      <p>{userdata.phoneNumber}</p>
    </div>
  )
}

InfoUserComponent.propTypes = {
  userdata: PropTypes.object
}

export default InfoUserComponent
