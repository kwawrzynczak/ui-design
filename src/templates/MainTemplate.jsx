import Navbar from '../components/Navbar';

const MainTemplate = ({ children }) => {
  return (
    <div className="h-screen w-screen bg-white">
      <Navbar />
      <div className="mx-auto">{children}</div>
      <div>Stopka</div>
    </div>
  );
};

export default MainTemplate;
