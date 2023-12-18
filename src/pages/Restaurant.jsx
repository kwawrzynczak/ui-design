import { twMerge } from 'tailwind-merge';
import RestaurantTabs from '../components/RestaurantTabs';
import { useState } from 'react';

const tab = [
  { id: 0, name: 'Zupa' },
  { id: 1, name: 'Danie główne' },
  { id: 2, name: 'Słodycze' },
  { id: 3, name: 'Napoje' },
  { id: 4, name: 'Torty urodzinowe' },
  { id: 5, name: 'Przekąski' },
];
const Restaurant = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="">
      <div className="absolute left-10 flex w-fit flex-col items-start gap-4 rounded-xl border-4 border-white text-lg font-semibold tracking-wide text-white">
        {tab.map((item) => (
          <button
            key={item.id}
            onClick={() => setIndex(item.id)}
            className={twMerge(index === item.id && 'bg-amber-500 ', 'w-full rounded-lg p-2')}
          >
            {item.name}
          </button>
        ))}
      </div>

      <h1 className="my-10 w-full text-center text-2xl font-bold tracking-wider text-white lg:text-4xl">
        Restauracja
      </h1>
      <div></div>
    </div>
  );
};
export default Restaurant;
