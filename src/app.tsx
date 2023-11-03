import React from 'react';
import { createRoot } from 'react-dom/client';
import './app.scss';

const root = createRoot(document.getElementById('root')!);

const Cell: React.FC = () => {
  return <div>Cell</div>;
};


const App: React.FC = () => {
  return (
    <>
      {
        Array.from({length: 10}, (_, i) => <Cell/>)
      }
    </>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);