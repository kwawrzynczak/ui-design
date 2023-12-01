import '../styles/Burger.css';
import { twMerge } from 'tailwind-merge';
import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const tabs = [
  { name: 'Strona główna', path: '/' },
  { name: 'Bilety', path: '/bilety' },
  { name: 'Galeria', path: '/galeria' },
  { name: 'Restauracja', path: '/restauracja' },
  { name: 'Rezerwacja', path: '/rezerwacja' },
];

const Navbar = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex justify-center border-b">
      <div className="flex h-20 w-full items-center justify-between bg-primary px-8 lg:w-3/4">
        <Link to={'/'} className="text-3xl font-bold tracking-widest text-white lg:text-4xl">
          Bajkolandia
        </Link>
        <nav
          className={twMerge(
            'absolute right-0 top-[80px] flex h-screen flex-col gap-2 p-4 text-lg font-semibold tracking-wider text-white transition duration-300 lg:static lg:h-auto lg:flex-row lg:items-center lg:gap-8 lg:p-0',
            checked ? 'translate-x-0' : 'translate-x-full lg:translate-x-0',
          )}
        >
          {tabs.map(({ name, path }) => (
            <NavLink key={name} to={path}>
              {name}
            </NavLink>
          ))}

          <NavLink
            to="/logowanie"
            className="mt-2 rounded-full border-2 border-white px-3.5 py-2 text-center lg:mt-0"
          >
            Logowanie
          </NavLink>

          <NavLink to="/konto" className="lg:hidden">
            Zarządzaj kontem
          </NavLink>
          <NavLink to="/historia" className="lg:hidden">
            Historia rezerwacji
          </NavLink>
          <NavLink
            to="/"
            className="mt-2 rounded-full border-2 border-white px-3.5 py-2 text-center lg:mt-0 lg:hidden"
          >
            Wyloguj się
          </NavLink>
        </nav>
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
