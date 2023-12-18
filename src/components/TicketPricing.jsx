import { Card } from 'flowbite-react';

const TicketPricing = ({ name, desc, price, handleBuy }) => {
  return (
    <Card className="mx-5 max-w-sm">
      <h5 className="mb-4  text-xl font-semibold tracking-wide">{name}</h5>
      <p className="h-[168px] text-justify">{desc}</p>
      <div className="flex items-baseline justify-center text-gray-900 dark:text-white">
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
      </div>
      <button
        onClick={() => handleBuy(true)}
        type="button"
        className="rounded-xl bg-amber-500 p-3 px-8 text-center text-lg font-semibold text-white transition hover:bg-amber-400"
      >
        Kup bilet
      </button>
    </Card>
  );
};

export default TicketPricing;
