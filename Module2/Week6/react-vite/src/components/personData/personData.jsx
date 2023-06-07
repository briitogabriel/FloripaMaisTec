import PropTypes from 'prop-types';

const PersonData = (props) => {
  return (
    <div className='container alert alert-primary' role='alert'>
      <h1>Hello, my name is <strong>{props.name}</strong>! I'm <strong>{props.age}</strong> years old.</h1>
      <p>And I like to <strong>{props.hobbie}</strong>.</p>
    </div>
  )
}

PersonData.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  hobbie: PropTypes.string,
}

export default PersonData;