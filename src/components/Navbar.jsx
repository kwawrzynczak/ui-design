import '../styles/Burger.css';
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import AccountOptions from './AccountOptions';
import { useAuthContext } from '../hooks/useAuthContext';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useLocation } from 'react-router-dom';

const tabs = [
  { name: 'Strona główna', path: '/' },
  { name: 'Galeria', path: '/galeria' },
  { name: 'Restauracja', path: '/restauracja' },
  { name: 'Rezerwacja', path: '/bilety' },
];

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  const { authUser, setAuthUser, isLogged, setIsLogged } = useAuthContext();
  const [optionsShown, setOptionsShown] = useState(false);
  const router = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setChecked(false);
    setOptionsShown(false);
  }, [location]);

  const handleLogout = (e) => {
    e.preventDefault();
    setAuthUser(null);
    setIsLogged(false);
    router('/');
  };

  return (
    <div className="flex justify-center border-b">
      <div className="flex h-20 w-full items-center justify-between bg-primary px-8">
        <Link
          to={'/'}
          className="text-3xl font-bold tracking-widest text-white xl:text-4xl"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          Bajkolandia
        </Link>
        <nav
          className={twMerge(
            'absolute right-0 top-[80px] z-40 flex w-[215px] flex-col gap-2 border-y border-l bg-primary p-4 text-lg font-semibold tracking-wider text-white transition duration-300 xl:static xl:h-auto xl:w-auto xl:flex-row xl:items-center xl:gap-8 xl:border-none xl:p-0',
            checked ? 'translate-x-0' : 'translate-x-full xl:translate-x-0',
          )}
        >
          {tabs.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              className={({ isActive }) => (isActive ? 'underline underline-offset-2' : '')}
            >
              {name}
            </NavLink>
          ))}

          {/* Niezalogowany */}

          {!isLogged && (
            <NavLink
              to="/logowanie"
              className="mt-2 rounded-full border-2 border-white px-3.5 py-2 text-center transition hover:bg-white hover:text-primary xl:mt-0 xl:px-6"
            >
              Logowanie
            </NavLink>
          )}

          {/* Zalogowany */}

          {isLogged && (
            <>
              <NavLink to="/historia" className="xl:hidden">
                Historia rezerwacji
              </NavLink>
              <button
                onClick={(e) => handleLogout(e)}
                className="mt-2 rounded-full border-2 border-white px-3.5 py-2 text-center transition hover:bg-white hover:text-primary xl:hidden"
              >
                Wyloguj się
              </button>

              <button onClick={() => setOptionsShown((prev) => !prev)} className="hidden xl:block">
                <UserCircleIcon className="h-8 w-8 self-end text-white" />
              </button>
            </>
          )}
        </nav>

        {optionsShown && <AccountOptions />}

        <label className="burger xl:hidden" htmlFor="burger">
          <input
            type="checkbox"
            id="burger"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </div>
  );
};

export default Navbar;
