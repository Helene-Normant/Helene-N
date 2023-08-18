import { createRoot } from 'react-dom/client';
import Header from './components/header/Header';
import Content from './components/Content';
import Footer from './components/footer/Footer';
import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <>
      <Header />
      <Content />
      <Footer />
      </>
  )
    };

  const container = document.getElementById('root');
  const root = createRoot(container);
  //The new render API
  root.render(<App />);