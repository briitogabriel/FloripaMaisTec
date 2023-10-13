// import InputMask from 'react-input-mask';
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/AuthHook";
import { AuthService } from "../../services/AuthService";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, register, formState: { errors }, reset } = useForm();

  const { login } = useAuth();

  const onSubmit = async (data) => {
    await AuthService.Auth(data).then(async (response) => {
      const { data, message } = await response.json();

      if (response.status === 200) {
        login(data);
      }

      alert(message);
      reset();
    });
  };

  useEffect(() => {
    AuthService.Get() && navigate("/");
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="email">Login</label>
          <input
            type="email"
            id="email"
            placeholder="Insert your login email"
            {...register('email', {
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
