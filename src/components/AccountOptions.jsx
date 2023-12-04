// import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const AccountOptions = () => {
  return (
    <>
      <NavLink to="/konto">Zarządzaj kontem</NavLink>
      <NavLink to="/historia">Historia rezerwacji</NavLink>
      <button className="mt-2 rounded-full border-2 border-white px-3.5 py-2 text-center lg:mt-0">
        Wyloguj się
      </button>
    </>
  );
};

export default AccountOptions;
