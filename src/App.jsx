import { createRoot } from 'react-dom/client';

import Header from './components/header/Header';
import Content from './components/Content';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className='scroller'>
      <Header />
      <Content />
      <Footer />
    </div>
  )
    };

  const container = document.getElementById('root');
  const root = createRoot(container);
  //The new render API
  root.render(<App />);