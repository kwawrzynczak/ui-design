// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';
useState;

const AccountOptions = () => {
  return (
    <div
      className={twMerge(
        'absolute right-60 top-[90px] flex-col gap-2 bg-black/20 text-lg font-semibold tracking-wider text-white lg:flex',
      )}
    >
      <NavLink to="/konto" className="">
        Zarządzaj kontem
      </NavLink>
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
