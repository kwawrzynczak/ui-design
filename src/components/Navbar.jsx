import { twMerge } from 'tailwind-merge';
import '../styles/Burger.css';
import { useState } from 'react';

const Navbar = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="flex h-20 items-center justify-between border-b px-6 lg:px-16">
      <span className="text-2xl font-bold tracking-wider text-amber-500">Bajkolandia</span>
      <nav
        className={twMerge(
          'absolute right-0 top-[80px] flex h-screen flex-col gap-2 bg-white p-4 transition lg:static lg:h-auto lg:flex-row lg:gap-6 lg:bg-transparent lg:p-0',
          checked ? 'translate-x-0' : 'translate-x-full max-lg:hidden lg:translate-x-0',
        )}
      >
        <a>Link 1</a>
        <a>Link 2</a>
        <a>Link 3</a>
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
  );
};

export default Navbar;
