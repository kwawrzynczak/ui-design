import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AccountOptions = () => {
  const [optionsShown, setOptionsShown] = useState(false);
  return (
    <>
      <button onClick={() => setOptionsShown((prev) => !prev)} className="hidden lg:block">
        <UserCircleIcon className="h-8 w-8 self-end text-white" />
      </button>
      <NavLink to="/konto" className="lg:hidden">
        Zarządzaj kontem
      </NavLink>
      <NavLink to="/historia" className="lg:hidden">
        Historia rezerwacji
      </NavLink>
      <button className="mt-2 rounded-full border-2 border-white px-3.5 py-2 text-center lg:mt-0 lg:hidden">
        Wyloguj się
      </button>
    </>
  );
};

export default AccountOptions;
