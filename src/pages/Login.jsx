import { NavLink } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="mb-10 flex flex-col items-center gap-10">
      <h1 className="my-10 text-center text-2xl font-bold tracking-wider text-white lg:text-4xl ">
        Logowanie
      </h1>
      <LoginForm />
      <div>
        <span className="text-lg font-semibold tracking-wide text-white">
          Nie masz konta?{' '}
          <NavLink to="/rejestracja" className="underline underline-offset-4">
            Zarejestruj się!
          </NavLink>
        </span>
      </div>
    </div>
  );
};
export default Login;
