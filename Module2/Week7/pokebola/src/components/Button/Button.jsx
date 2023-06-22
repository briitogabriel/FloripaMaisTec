function Button({btnText, btnNumber}) {

  const event = () => {
    console.log('Você apertou o botão ' + btnNumber)
  }

  return (
    <button onClick={event} type="button" className="btn btn-light">
      {btnText} {btnNumber}
    </button>
  )
}

Button.defaultProps = {
  btnText: 'Botão',
  btnNumber: '0'
}

export default Button;