import Button from "../Button/Button";
import Input from "../Input/Input";

import './Form.css'

function Form({btnText, btnNumber, placeholderText, inputType}) {
  return (
    <div className="formComponent">
      <Input placeholderText={placeholderText} inputType={inputType}/>
      <Button btnText={btnText} btnNumber={btnNumber} />
    </div>
  )
}

export default Form;