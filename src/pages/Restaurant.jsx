import { twMerge } from 'tailwind-merge';
import { useState } from 'react';

const soups = [
  'Zupa grzybowa, 15zł',
  'Zupa pomidorowa, 12zł',
  'Zupa ogórkowa, 12zł',
  'Zupa krem z dyni, 15zł',
  'Zupa krem z pomidorów, 15zł',
];
const mainCourses = [
  'Kotlet schabowy, 25zł',
  'Pierogi ruskie, 20zł',
  'Kurczak po węgiersku, 25zł',
  'Naleśniki, 10zł',
  'Pizza, 20zł',
  'Spaghetti, 20zł',
];
const desserts = [
  'Sernik, 15zł',
  'Tort czekoladowy, 20zł',
  'Tort truskawkowy, 20zł',
  'Tort bezowy, 20zł',
  'Tort kawowy, 20zł',
  'Tort cytrynowy, 20zł',
  'Tort malinowy, 20zł',
];
const drinks = [
  'Woda, 5zł',
  'Cola, 7zł',
  'Sok, 7zł',
  'Kawa, 7zł',
  'Herbata, 7zł',
  'Piwo, 7zł',
  'Wino, 7zł',
  'Drink, 10zł',
  'Drink bezalkoholowy, 10zł',
];
const birthdayCakes = [
  'Tort czekoladowy, 20zł',
  'Tort truskawkowy, 20zł',
  'Tort bezowy, 20zł',
  'Tort kawowy, 20zł',
  'Tort cytrynowy, 20zł',
  'Tort malinowy, 20zł',
];
const snacks = [
  'Kanapka z serem, 10zł',
  'Kanapka z szynką, 10zł',
  'Kanapka z jajkiem, 10zł',
  'Kanapka z tuńczykiem, 10zł',
  'Kanapka z łososiem, 10zł',
];

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
    <div className="mb-10 ">
      <div className="absolute left-1/2 top-44 flex w-fit -translate-x-1/2 flex-col items-start gap-4 rounded-xl border-4 border-white text-lg font-semibold tracking-wide text-white lg:left-20  lg:translate-x-0">
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
      <div className="mt-96 flex w-full justify-center lg:mt-0">
        <div className="mt-6 flex w-2/3 flex-wrap justify-center gap-6 lg:mt-0">
          {index === 0 &&
            soups.map((item) => (
              <div key={item} className="flex flex-col gap-2">
                <div className="h-60 w-80 rounded-xl bg-white"></div>
                <p className="text-center font-semibold text-white">{item}</p>
              </div>
            ))}
          {index === 1 &&
            mainCourses.map((item) => (
              <div key={item} className="flex flex-col gap-2">
                <div className="h-60 w-80 rounded-xl bg-white"></div>
                <p className="text-center font-semibold text-white">{item}</p>
              </div>
            ))}
          {index === 2 &&
            desserts.map((item) => (
              <div key={item} className="flex flex-col gap-2">
                <div className="h-60 w-80 rounded-xl bg-white"></div>
                <p className="text-center font-semibold text-white">{item}</p>
              </div>
            ))}
          {index === 3 &&
            drinks.map((item) => (
              <div key={item} className="flex flex-col gap-2">
                <div className="h-60 w-80 rounded-xl bg-white"></div>
                <p className="text-center font-semibold text-white">{item}</p>
              </div>
            ))}
          {index === 4 &&
            birthdayCakes.map((item) => (
              <div key={item} className="flex flex-col gap-2">
                <div className="h-60 w-80 rounded-xl bg-white"></div>
                <p className="text-center font-semibold text-white">{item}</p>
              </div>
            ))}
          {index === 5 &&
            snacks.map((item) => (
              <div key={item} className="flex flex-col gap-2">
                <div className="h-60 w-80 rounded-xl bg-white"></div>
                <p className="text-center font-semibold text-white">{item}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
export default Restaurant;
