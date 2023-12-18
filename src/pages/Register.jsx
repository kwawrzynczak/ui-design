import RegisterForm from '../components/RegisterForm';
import { NavLink } from 'react-router-dom';

const Register = () => {
  return (
    <div className="mb-[74px] flex flex-col items-center gap-10">
      <h1 className="my-10 text-center text-2xl font-bold tracking-wider text-white lg:text-4xl">
        Rejestracja
      </h1>
      <RegisterForm />
      <div>
        <span className="text-lg font-semibold tracking-wide text-white">
          Masz juz konto?{' '}
          <NavLink to="/logowanie" className="underline underline-offset-4">
            Zaloguj się!
          </NavLink>
        </span>
      </div>
    </div>
  );
};
export default Register;
