import MainTemplate from './templates/MainTemplate';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Account from './pages/Account';
import Gallery from './pages/Gallery';
import History from './pages/History';
import Login from './pages/Login';
import Register from './pages/Register';
import Reservation from './pages/Reservation';
import Restaurant from './pages/Restaurant';
import Tickets from './pages/Tickets';
import NotFound from './pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <MainTemplate>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/konto" element={<Account />} />
          <Route path="/galeria" element={<Gallery />} />
          <Route path="/historia" element={<History />} />
          <Route path="/logowanie" element={<Login />} />
          <Route path="/rejestracja" element={<Register />} />
          <Route path="/rezerwacja" element={<Reservation />} />
          <Route path="/restauracja" element={<Restaurant />} />
          <Route path="/bilety" element={<Tickets />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;
