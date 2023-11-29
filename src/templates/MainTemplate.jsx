import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainTemplate = ({ children }) => {
  return (
    <div className="min-h-screen w-screen bg-[url('52905.jpg')] bg-cover bg-no-repeat">
      <Navbar />
      <div className="mx-auto h-screen ">{children}</div>
      <Footer />
    </div>
  );
};

export default MainTemplate;
