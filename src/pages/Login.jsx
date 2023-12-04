import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-2xl font-semibold tracking-wider text-white lg:text-3xl">Logowanie</h1>
      <LoginForm />
    </div>
  );
};
export default Login;
