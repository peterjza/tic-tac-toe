import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './app.scss';

const root = createRoot(document.getElementById('root')!);

const Cell: React.FC<{ idx: number, currentPlayer: number }> = ({idx, currentPlayer}) => {

  const handleClick = () => {
    debugger
  }

  return <div onClick={handleClick}></div>;
};

const App: React.FC = () => {
  const [currentPlayer, setCurrentPlayer] = useState(0)

  return (
    <div className='board'>
      {
        Array.from({length: 9}, (_, i) => <Cell idx={i} currentPlayer={currentPlayer}/>)
      }
    </div>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);