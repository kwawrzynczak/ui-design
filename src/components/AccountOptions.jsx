// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const AccountOptions = ({ shown }) => {
  return (
    <div
      className={twMerge(
        'absolute right-72 -z-50 hidden flex-col gap-2 text-lg font-semibold tracking-wider text-white transition duration-300 ease-in-out lg:flex',
        shown ? 'translate-y-[90%]' : '-translate-y-6',
      )}
    >
      <NavLink to="/konto">Zarządzaj kontem</NavLink>
      <NavLink to="/historia" className="mb-2">
        Historia rezerwacji
      </NavLink>
      <button className="rounded-full border-2 border-white px-3.5 py-2 text-center lg:mt-0">
        Wyloguj się
      </button>
    </div>
  );
};

export default AccountOptions;
