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
  { name: 'Bilety', path: '/bilety' },
  { name: 'Galeria', path: '/galeria' },
  { name: 'Restauracja', path: '/restauracja' },
  { name: 'Rezerwacja', path: '/rezerwacja' },
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
      <div className="flex h-20 w-full items-center justify-between bg-primary px-8 lg:w-3/4">
        <Link
          to={'/'}
          className="text-3xl font-bold tracking-widest text-white lg:text-4xl"
          style={{ fontFamily: 'Fredoka, sans-serif' }}
        >
          Bajkolandia
        </Link>
        <nav
          className={twMerge(
            'absolute right-0 top-[80px] flex h-screen w-[215px] flex-col gap-2 bg-primary p-4 text-lg font-semibold tracking-wider text-white transition duration-300 lg:static lg:h-auto lg:w-auto lg:flex-row lg:items-center lg:gap-8 lg:p-0',
            checked ? 'translate-x-0' : 'translate-x-full lg:translate-x-0',
          )}
        >
          {tabs.map(({ name, path }) => (
            <NavLink key={name} to={path}>
              {name}
            </NavLink>
          ))}

          {/* Niezalogowany */}

          {!isLogged && (
            <NavLink
              to="/logowanie"
              className="mt-2 rounded-full border-2 border-white px-3.5 py-2 text-center lg:mt-0 lg:px-6"
            >
              Logowanie
            </NavLink>
          )}

          {/* Zalogowany */}

          {isLogged && (
            <>
              <NavLink to="/konto" className="lg:hidden">
                Zarządzanie kontem
              </NavLink>
              <NavLink to="/historia" className="lg:hidden">
                Historia rezerwacji
              </NavLink>
              <button
                onClick={(e) => handleLogout(e)}
                to="/logowanie"
                className="mt-2 rounded-full border-2 border-white px-3.5 py-2 text-center lg:hidden"
              >
                Wyloguj się
              </button>

              <button onClick={() => setOptionsShown((prev) => !prev)} className="hidden lg:block">
                <UserCircleIcon className="h-8 w-8 self-end text-white" />
              </button>
            </>
          )}
        </nav>

        <AccountOptions shown={optionsShown} />

        <label className="burger lg:hidden" htmlFor="burger">
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
