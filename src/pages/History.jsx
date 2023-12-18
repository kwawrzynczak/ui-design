import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const tab = [
  { id: 0, name: 'Bilety' },
  { id: 1, name: 'Rezerwacje' },
];

const History = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="mb-10">
      <div className="absolute left-1/2 top-44 flex w-fit -translate-x-1/2 items-start gap-4 rounded-xl border-4 border-white text-lg font-semibold tracking-wide text-white lg:left-20 lg:translate-x-0 lg:flex-col">
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
      <h1 className="my-10 mb-24 text-center text-2xl font-bold tracking-wider text-white lg:text-4xl">
        {index === 1 ? 'Historia rezerwacji' : 'Historia biletów'}
      </h1>
      {index === 0 && (
        <div className=" flex flex-col gap-6 ">
          <div className="mx-6 flex flex-col gap-2 rounded-xl bg-white p-6 text-lg lg:mt-0 lg:w-1/3 lg:self-center">
            <p className="text-xl font-semibold">Bilet normalny</p>
            <p>Ważny do: 26 grudnia 2023</p>
            <p>Data zakupu: 27.11.2023 </p>
            <div className="flex w-fit cursor-pointer self-end rounded-lg border-2 border-primary p-2 font-semibold text-primary transition hover:bg-primary hover:text-white">
              Drukuj bilet
            </div>
          </div>
          <div className="mx-6  flex flex-col gap-2 rounded-xl bg-white p-6 text-lg lg:mt-0 lg:w-1/3 lg:self-center">
            <p className="text-xl font-semibold">Bilet normalny</p>
            <p>Ważny do: 26 grudnia 2023</p>
            <p>Data zakupu: 27.11.2023 </p>
          </div>
          <div className="mx-6  flex flex-col gap-2 rounded-xl bg-white p-6 text-lg lg:mt-0 lg:w-1/3 lg:self-center">
            <p className="text-xl font-semibold">Bilet ulgowy</p>
            <p>Ważny do: 26 grudnia 2023</p>
            <p>Data zakupu: 27.11.2023 </p>
          </div>
          <div className="mx-6 flex flex-col gap-2 rounded-xl bg-white p-6 text-lg lg:mt-0 lg:w-1/3 lg:self-center">
            <p className="text-xl font-semibold">Bilet grupowy</p>
            <p>Ważny do: 26 grudnia 2023</p>
            <p>Data zakupu: 27.11.2023 </p>
          </div>
        </div>
      )}
      {index === 1 && (
        <div className=" flex flex-col gap-6 ">
          <div className="mx-6 flex flex-col gap-2 rounded-xl bg-white p-6 text-lg lg:mt-0 lg:w-1/3 lg:self-center">
            <p className="text-xl font-semibold">Sala &quot;Piotruś Pan&quot;</p>
            <p>26 grudnia 2023, 13:00 - 14:00</p>
            <p>12 osób</p>
            <p>Data zakupu: 27.11.2023 </p>
            <div className="flex w-fit cursor-pointer self-end rounded-lg border-2 border-primary p-2 font-semibold text-primary transition hover:bg-primary hover:text-white">
              Drukuj potwierdzenie
            </div>
          </div>
          <div className="mx-6 flex flex-col gap-2 rounded-xl bg-white p-6 text-lg lg:mt-0 lg:w-1/3 lg:self-center">
            <p className="text-xl font-semibold">Sala &quot;Pasikonik&quot;</p>
            <p>26 grudnia 2023</p>
            <p>W godzinach 13:00 - 14:00</p>
            <p>12 osób</p>
            <p>Data zakupu: 27.11.2023 </p>
          </div>
        </div>
      )}
    </div>
  );
};
export default History;
