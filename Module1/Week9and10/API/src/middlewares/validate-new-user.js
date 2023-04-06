const yup = require('yup');   // library for VALIDATIONS

const validation = yup.object().shape({
  name: yup
    .string('Name must be a string')
    .required('MID Name is mandatory'),   // VERIFY!!!!!! NOT WORKING!!!!!!!!!!!!!!
  password: yup
    .string('Password must be a string')
    .min(8, 'Password must have at least 8 characteres')
    .required('Password is mandatory')
})

function validateNewUser(req, res, next){
  console.log(req.body)
  try {
    validation.validateSync(req.body);  //async method
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

}
module.exports = validateNewUser;