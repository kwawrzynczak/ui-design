import React, { useState } from 'react';

const RestaurantTabs = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="flex flex-col items-start gap-4 text-lg font-semibold tracking-wide text-white">
      <button onClick={() => setIndex(0)}>Zupy</button>
      <button>Dania główne</button>
      <button>Słodycze</button>
      <button>Napoje</button>
      <button>Torty urodzinowe</button>
      <button>Przekąski</button>
    </div>
  );
};

export default RestaurantTabs;
