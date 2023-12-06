import TicketPricing from '../components/TicketPricing';
import TicketModal from '../components/TicketModal';
import { useState } from 'react';

const Tickets = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleBuy = () => {
    setOpenModal(true);
  };
  return (
    <div>
      <p>Bilety</p>
      <TicketPricing onBuy={handleBuy} />
      <TicketModal open={openModal} />
    </div>
  );
};
export default Tickets;
