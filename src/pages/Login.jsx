import { NavLink } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-2xl font-bold tracking-wider text-white lg:text-3xl">Logowanie</h1>
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
