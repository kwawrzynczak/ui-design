import { NavLink } from 'react-router-dom';

const ReservationTabs = () => {
  return (
    <div className="flex justify-center">
      <div className="flex w-fit justify-center gap-4 self-center rounded-xl border-4 border-white text-lg font-semibold tracking-wide text-white">
        <NavLink
          className={({ isActive }) =>
            isActive ? 'rounded-lg bg-amber-500 p-2' : 'rounded-lg p-2'
          }
          to={'/bilety'}
        >
          Bilety
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'rounded-lg bg-amber-500 p-2' : 'rounded-lg p-2'
          }
          to="/rezerwacja"
        >
          Rezerwacja sali
        </NavLink>
      </div>
    </div>
  );
};

export default ReservationTabs;
