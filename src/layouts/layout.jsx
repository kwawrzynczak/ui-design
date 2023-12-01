import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <div className="mx-auto h-screen">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
