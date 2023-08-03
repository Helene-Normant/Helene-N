import { createRoot } from 'react-dom/client';
import Header from './components/header/header/Header';
import Content from './components/Content';

const App = () => {
  return (
    <>
      <Header />
      <Content />
      </>
  )
    };

  const container = document.getElementById('root');
  const root = createRoot(container);
  //The new render API
  root.render(<App />);