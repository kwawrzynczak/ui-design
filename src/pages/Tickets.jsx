import TicketPricing from '../components/TicketPricing';
import { useState } from 'react';
import ReservationTabs from '../components/ReservationTabs';
import { Modal } from 'flowbite-react';
import dayjs from 'dayjs';

const Tickets = () => {
  const [isOpen, setIsOpen] = useState(false);
  const validUntil = dayjs().add(30, 'day').format('DD.MM.YYYY');

  const handleBuyTicket = (data) => {
    setIsOpen(data);
  };

  return (
    <div className="mb-10">
      <h1 className="my-10 text-center text-2xl font-bold tracking-wider text-white lg:text-4xl">
        Bilety
      </h1>
      <ReservationTabs />
      <p className="mx-5 my-10 text-center text-lg font-semibold text-white lg:text-xl">
        Bilety są ważne przez miesiąc od momentu zakupu. Dla grup powyżej 10 osób wymagana jest
        rezerwacja sali.
      </p>
      <div className="flex flex-col flex-wrap items-center justify-center gap-6 lg:flex-row lg:items-stretch xl:gap-10">
        <TicketPricing
          name="Bilet ulgowy"
          desc="Dla naszych najmłodszych gości mamy przygotowany bilet ulgowy, zapewniający pełen dostęp do radości i przygód w naszej kolorowej sali zabaw. To doskonała okazja dla maluchów do odkrywania nowych przyjaciół i czerpania radości "
          price={'25zł'}
          handleBuy={handleBuyTicket}
        />
        <TicketPricing
          name="Bilet normalny"
          desc="Bilet normalny to klucz do szerokiego wachlarza atrakcji dla dzieci w różnym wieku. Zawiera dostęp do wszystkich kreatywnych zakątków i przyjaznych dla dzieci aktywności, tworząc niezapomnianą przygodę pełną uśmiechów."
          price={'40zł'}
          handleBuy={handleBuyTicket}
        />
        <TicketPricing
          name="Bilet grupowy (do 10 osób)"
          desc="Planujesz wizytę z grupą przyjaciół czy przedszkolaków? Skorzystaj z naszego atrakcyjnego biletu grupowego, który gwarantuje fantastyczną zabawę w towarzystwie. Zapraszamy do wspólnego odkrywania przyjemności płynącej z naszych unikalnych stref rozrywki."
          price={'15zł/os'}
          handleBuy={handleBuyTicket}
        />

        <Modal dismissible show={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Header>Dokonano zakupu</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <p>Pomyślniie dokonano zakupu biletu. Bilet jest ważny do {validUntil}</p>
            </div>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
export default Tickets;
