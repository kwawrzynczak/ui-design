import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const AccountButton = () => {
  const [optionsShown, setOptionsShown] = useState(false);
  return (
    <button onClick={() => setOptionsShown((prev) => !prev)} className="hidden lg:block">
      <UserCircleIcon className="h-8 w-8 self-end text-white" />
    </button>
  );
};

export default AccountButton;
