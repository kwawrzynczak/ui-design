// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { useAuthContext } from '../hooks/useAuthContext';
import { useNavigate } from 'react-router-dom';
const AccountOptions = () => {
  const { authUser, setAuthUser, isLogged, setIsLogged } = useAuthContext();
  const router = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    setAuthUser(null);
    setIsLogged(false);
    router('/');
  };
  return (
    <div
      className={twMerge(
        'border-t-1 absolute right-0 top-[80px] flex-col gap-2 border-2 border-white bg-primary p-2 text-lg font-semibold tracking-wider text-white lg:flex',
      )}
    >
      <NavLink to="/historia" className="mx-2 my-2">
        Historia rezerwacji
      </NavLink>
      <button
        onClick={(e) => handleLogout(e)}
        className="rounded-full border-2 border-white px-3.5 py-2 text-center transition hover:bg-white hover:text-primary"
      >
        Wyloguj się
      </button>
    </div>
  );
};

export default AccountOptions;
