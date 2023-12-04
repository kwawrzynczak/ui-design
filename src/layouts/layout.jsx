import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import AuthProvider from '../contexts/AuthContext';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen w-full">
      <AuthProvider>
        <Navbar />
        <div className="my-20">{children}</div>
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default Layout;
