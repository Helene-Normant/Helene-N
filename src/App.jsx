import { createRoot } from 'react-dom/client';




const App = () => {
  return (
    <div>Hello</div>
  )
    };

  const container = document.getElementById('root');
  const root = createRoot(container);
  //The new render API
  root.render(<App />);