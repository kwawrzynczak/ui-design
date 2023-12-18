import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const tab = [
  { id: 0, name: 'Bilety' },
  { id: 1, name: 'Rezerwacje' },
];

const History = () => {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <div className="absolute left-10 flex w-fit flex-col items-start gap-4 rounded-xl border-4 border-white text-lg font-semibold tracking-wide text-white">
        {tab.map((item) => (
          <button
            key={item.id}
            onClick={() => setIndex(item.id)}
            className={twMerge(index === item.id && 'bg-amber-500 ', 'w-full rounded-lg p-2 px-6')}
          >
            {item.name}
          </button>
        ))}
      </div>
      <h1 className="my-10 text-center text-2xl font-bold tracking-wider text-white lg:text-4xl">
        Historia zakupów
      </h1>
      {index === 0 && <div></div>}
    </div>
  );
};
export default History;
