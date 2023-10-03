import InputMask from 'react-input-mask';
import { useForm } from 'react-hook-form';

export const LoginPage = () => {

  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="login">Login</label>
          <InputMask
            id="login"
            mask="999.999.999-99"
            placeholder="Insert your login"
            {...register('login', {
              required: 'Login field is mandatory'
            })} />
            { errors?.login && <p>{ errors?.login?.message } </p> }
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Insert your password"
            {...register('password', {
              required: 'Password field is mandatory',
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters'
              }
            })} />
            { errors?.password && <p>{ errors?.password?.message } </p> }
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  )
}
