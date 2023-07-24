import { createRoot } from 'react-dom/client';
import Header from './components/header/Header';

const App = () => {
  return (
      <Header />
  )
    };

  const container = document.getElementById('root');
  const root = createRoot(container);
  //The new render API
  root.render(<App />);