import './Input.css'

function Input({placeholderText, inputType}) {

  const inputUpdate = (e) => {
    console.log(e.target.value)
  }

  return (
    <>
      <input className="inputMain" onChange={inputUpdate} type={inputType} placeholder={placeholderText} />
    </>
  )
}

export default Input;