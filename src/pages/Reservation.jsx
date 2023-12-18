import ReservationTabs from '../components/ReservationTabs';
import { useState } from 'react';
import { Modal } from 'flowbite-react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { XCircleIcon } from '@heroicons/react/24/outline';
import { twMerge } from 'tailwind-merge';

const weekDays = [
  { day: '', date: '' },
  { day: 'Poniedziałek', date: '18.12' },
  { day: 'Wtorek', date: '19.12' },
  { day: 'Środa', date: '20.12' },
  { day: 'Czwartek', date: '21.12' },
  { day: 'Piątek', date: '22.12' },
  { day: 'Sobota', date: '23.12' },
];

const Reservation = () => {
  const [people, setPeople] = useState(10);
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [room, setRoom] = useState('');
  const [button, setButton] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-10 w-full text-white">
      <h1 className="my-10 text-center text-2xl font-bold tracking-wider text-white lg:text-4xl">
        Rezerwacja
      </h1>
      <ReservationTabs />
      <div className="mt-10 flex w-full justify-center">
        <div className="flex w-full flex-col text-lg font-semibold md:mx-10 lg:w-2/3">
          <div className="mb-4 ml-4 flex flex-col gap-10 md:m-0">
            <p className="lg:text-2xl">1. Podaj liczbę osób</p>
            <div className="mb-10 flex gap-3 self-center text-black md:self-start">
              <button
                onClick={() => setPeople((prev) => prev - 1)}
                className="h-10 w-10 rounded-full bg-white text-center text-2xl font-bold text-primary transition hover:bg-amber-300"
              >
                -
              </button>
              <div className="w-12 text-center text-4xl font-semibold text-white ">{people}</div>
              <button
                onClick={() => setPeople((prev) => prev + 1)}
                className="h-10 w-10 rounded-full bg-white text-center text-2xl font-bold text-primary transition hover:bg-amber-300"
              >
                +
              </button>
            </div>
          </div>
          <div className="mb-10 flex flex-col justify-center gap-10">
            <div>
              <p className="ml-4 md:m-0 lg:text-2xl">2. Wybierz salę</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 md:flex-row lg:gap-8">
              <div className="mx-6 flex flex-col items-center gap-4">
                <img
                  onClick={() => setRoom('Sala "Piotruś Pan"')}
                  src="/attraction4.jpg"
                  alt="room"
                  className={twMerge(
                    'cursor-pointer rounded-xl  lg:m-0 lg:w-full',
                    room === 'Sala "Piotruś Pan"' && 'scale-110 border-4 border-amber-500',
                  )}
                />
                <p>Sala &quot;Piotruś Pan&quot;</p>
              </div>
              <div className="mx-6 flex flex-col items-center gap-4">
                <img
                  onClick={() => setRoom('Sala "Królowej Diany"')}
                  src="/attraction4.jpg"
                  alt="room"
                  className={twMerge(
                    'cursor-pointer rounded-xl  lg:m-0 lg:w-full',
                    room === 'Sala "Królowej Diany"' && 'scale-110 border-4 border-amber-500',
                  )}
                />
                <p>Sala &quot;Królowej Diany&quot;</p>
              </div>
              <div className="flex h-full w-full flex-col items-center  gap-4 px-6">
                <img
                  onClick={() => setRoom('Sala atrakcji "Pasikonik"')}
                  src="/attraction4.jpg"
                  alt="room"
                  className={twMerge(
                    'cursor-pointer rounded-xl  lg:m-0 lg:w-full',
                    room === 'Sala atrakcji "Pasikonik"' && 'scale-110 border-4 border-amber-500',
                  )}
                />
                <p>Sala &quot;Pasikonik&quot;</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-10">
            <p className="ml-4 md:m-0 lg:text-2xl">3. Wybierz datę i godzinę</p>
            <div className="place-items grid grid-cols-7 grid-rows-5 place-self-center border-4 border-amber-500 bg-white text-sm text-black  xl:text-lg">
              {weekDays.map((day) => (
                <div
                  className="flex items-center justify-center border px-4 text-center md:block md:px-0 md:py-8"
                  key={day.day}
                >
                  <p className="hidden md:block">{day.day}</p>
                  <p>{day.date}</p>
                </div>
              ))}
              <div className="flex items-center border px-4 text-center">11:00 - 12:00</div>
              <div className=" border px-4 text-center">
                <button
                  className="h-full w-full"
                  onClick={() => {
                    setButton(1);
                    setDate('18 grudnia');
                    setHour('11:00 - 12:00');
                  }}
                >
                  {button === 1 ? (
                    <>
                      <span className="flex justify-center">
                        <XCircleIcon className="text-primary" />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="flex justify-center">
                        <XMarkIcon className="text-amber-500" />
                      </span>
                    </>
                  )}
                </button>
              </div>
              <div className=" border px-4 text-center">
                <button
                  className="h-full w-full"
                  onClick={() => {
                    setButton(2);
                    setDate('19 grudnia');
                    setHour('11:00 - 12:00');
                  }}
                >
                  {button === 2 ? (
                    <>
                      <span className="flex justify-center">
                        <XCircleIcon className="text-primary" />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="flex justify-center">
                        <XMarkIcon className="text-amber-500" />
                      </span>
                    </>
                  )}
                </button>
              </div>
              <div className=" border px-4 text-center"></div>
              <div className=" border px-4 text-center">
                <button
                  className="h-full w-full"
                  onClick={() => {
                    setButton(3);
                    setDate('21 grudnia');
                    setHour('11:00 - 12:00');
                  }}
                >
                  {button === 3 ? (
                    <>
                      <span className="flex justify-center">
                        <XCircleIcon className="text-primary" />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="flex justify-center">
                        <XMarkIcon className="text-amber-500" />
                      </span>
                    </>
                  )}
                </button>
              </div>
              <div className=" border px-4 text-center"></div>
              <div className=" border px-4 text-center"></div>
              <div className="flex items-center border px-4 py-2 text-center">12:00 - 13:00</div>
              <div className=" border px-4 text-center"></div>
              <div className=" border px-4 text-center">
                <button
                  className="h-full w-full"
                  onClick={() => {
                    setButton(4);
                    setDate('19 grudnia');
                    setHour('12:00 - 13:00');
                  }}
                >
                  {button === 4 ? (
                    <>
                      <span className="flex justify-center">
                        <XCircleIcon className="text-primary" />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="flex justify-center">
                        <XMarkIcon className="text-amber-500" />
                      </span>
                    </>
                  )}
                </button>
              </div>
              <div className=" border px-4 text-center"></div>
              <div className=" border px-4 text-center"></div>
              <div className=" border px-4 text-center"></div>
              <div className=" border px-4 text-center">
                <button
                  className="h-full w-full"
                  onClick={() => {
                    setButton(5);
                    setDate('23 grudnia');
                    setHour('12:00 - 13:00');
                  }}
                >
                  {button === 5 ? (
                    <>
                      <span className="flex justify-center">
                        <XCircleIcon className="text-primary" />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="flex justify-center">
                        <XMarkIcon className="text-amber-500" />
                      </span>
                    </>
                  )}
                </button>
              </div>
              <div className="flex items-center border px-4 text-center">
                <span>13:00 - 14:00</span>
              </div>
              <div className=" border px-4 text-center">
                <button
                  className="h-full w-full"
                  onClick={() => {
                    setButton(6);
                    setDate('18 grudnia');
                    setHour('13:00 - 14:00');
                  }}
                >
                  {button === 6 ? (
                    <>
                      <span className="flex justify-center">
                        <XCircleIcon className="text-primary" />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="flex justify-center">
                        <XMarkIcon className="text-amber-500" />
                      </span>
                    </>
                  )}
                </button>
              </div>
              <div className=" border px-4 text-center"></div>
              <div className=" border px-4 text-center">
                <button
                  className="h-full w-full"
                  onClick={() => {
                    setButton(7);
                    setDate('20 grudnia');
                    setHour('13:00 - 14:00');
                  }}
                >
                  {button === 7 ? (
                    <>
                      <span className="flex justify-center">
                        <XCircleIcon className="text-primary" />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="flex justify-center">
                        <XMarkIcon className="text-amber-500" />
                      </span>
                    </>
                  )}
                </button>
              </div>
              <div className=" border px-4 text-center">
                <button
                  className="h-full w-full"
                  onClick={() => {
                    setButton(8);
                    setDate('21 grudnia');
                    setHour('13:00 - 14:00');
                  }}
                >
                  {button === 8 ? (
                    <>
                      <span className="flex justify-center">
                        <XCircleIcon className="text-primary" />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="flex justify-center">
                        <XMarkIcon className="text-amber-500" />
                      </span>
                    </>
                  )}
                </button>
              </div>
              <div className=" border px-4 text-center"></div>
              <div className=" border px-4 text-center"></div>
              <div className="flex items-center border px-4 text-center">14:00 - 15:00</div>
              <div className=" border px-4 text-center"></div>
              <div className=" border px-4 text-center"></div>
              <div className=" border px-4 text-center"></div>
              <div className=" border px-4 text-center">
                <button
                  className="h-full w-full"
                  onClick={() => {
                    setButton(9);
                    setDate('21 grudnia');
                    setHour('14:00 - 15:00');
                  }}
                >
                  {button === 9 ? (
                    <>
                      <span className="flex justify-center">
                        <XCircleIcon className="text-primary" />
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="flex justify-center">
                        <XMarkIcon className="text-amber-500" />
                      </span>
                    </>
                  )}
                </button>
              </div>
              <div className=" border px-4 text-center"></div>
              <div className=" border px-4 text-center"></div>
            </div>
          </div>
          <div className="mt-10 w-[340px] self-center rounded-xl bg-white p-8 text-black md:w-[400px]">
            <p className="mb-5 text-3xl font-bold">Podsumowanie</p>
            <p>Liczba osób: {people}</p>
            <p>Dzień: {date}</p>
            <p>Godzina: {hour}</p>
            <p>Sala: {room}</p>
            <div className="mt-4 flex w-full flex-col items-center gap-4">
              <p className="text-2xl font-bold">Cena: {100 + people * 30}zł</p>
              <button
                onClick={() => setIsOpen(true)}
                className="rounded-xl bg-amber-500 p-3 px-8 text-center text-white transition hover:bg-amber-400"
              >
                Rezerwuj
              </button>
            </div>
          </div>
        </div>
      </div>
      <Modal dismissible show={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Header>Dokonano rezerwacji</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <p className="md:text-lg">
              Pomyślnie dokonano rezerwacji {room} na {people} osób na dzień {date} w godzinach{' '}
              {hour}!
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};
export default Reservation;
