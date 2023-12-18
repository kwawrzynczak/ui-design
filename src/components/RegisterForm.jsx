import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext';

const RegisterForm = () => {
  const { authUser, setAuthUser, isLogged, setIsLogged } = useAuthContext();
  const router = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    setAuthUser({ name: 'John Doe' });
    setIsLogged(true);
    router('/');
  };
  return (
    <div className="flex flex-col items-center justify-center">
      <form className="flex flex-col gap-2 rounded-lg border-2 border-white px-16 py-10">
        <label className="text-lg text-white">E-mail</label>
        <input type="email" className="h-8 px-1.5" />
        <label className="mt-2 text-lg text-white">Hasło</label>
        <input type="password" className="h-8 px-1.5" />
        <label className="mt-2 text-lg text-white">Powtórz hasło</label>
        <input type="password" className="h-8 px-1.5" />
        <button
          className="mt-6 cursor-pointer rounded-full border-2 border-white px-3.5 py-2 text-center text-lg font-semibold tracking-wider text-white transition hover:bg-white hover:text-primary"
          onClick={(e) => handleLogin(e)}
        >
          Zarejestruj się
        </button>
      </form>
    </div>
  );
};
export default RegisterForm;
