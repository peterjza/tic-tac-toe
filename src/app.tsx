import React, { useState, ReactNode } from 'react';
import { createRoot } from 'react-dom/client';
import './app.scss';

const root = createRoot(document.getElementById('root')!);

const generateBoard = (size: number) => {
  const newBoard = []
  for (let i = 0; i < size; i++) {
    newBoard.push(Array(size))
  }
  return newBoard
}

interface ICell {
  row: number;
  cell: number;
  board: any[][];
  currentPlayer: string;
  setboard: React.Dispatch<React.SetStateAction<any>>;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;
  children?: ReactNode;
}

const checkRowForMatch = (board: any[][]) => {
  for (let i = 0; i < board.length; i++) {
    const rowSet = new Set(board[i])
    if (rowSet.size === 1 && !rowSet.has(undefined)) {
      return alert('win')
    }
  }
  return false
}

const columnToRow = (board: any[][]) => {
  const newBoard = []
  for (let col = 0; col < board.length; col++) {
    const newRow = []
    for (let row = 0; row < board[col].length; row++) {
      newRow.push(board[row][col])
    }
    newBoard.push(newRow)
  }
  debugger
  return newBoard
}

const checkForWinner = (board: any[][]) => {

  if (checkRowForMatch(board)) {
    alert(1)
  }

  if (checkRowForMatch(columnToRow(board))) {
    alert(1)
  }

}

const Cell: React.FC<ICell> = ({
  row,
  cell,
  board,
  currentPlayer,
  setboard,
  setCurrentPlayer,
}) => {

  const [occupied, setOccupied] = useState(false)
  const handleClick = () => {

    if (occupied) return
    setOccupied(true)
    board[row][cell] = currentPlayer
    setboard([...board])
    checkForWinner(board)
    setCurrentPlayer(currentPlayer === 'x' ? 'o' : 'x')
  }
  return <div onClick={handleClick}>{(board[row][cell])}</div>
};


const App: React.FC = () => {
  const [board, setboard] = useState(generateBoard(3))
  const [currentPlayer, setCurrentPlayer] = useState('x')

  return (
    <>
      <div className='board'>
        {
          board.map((row, r) => {
            return board.map((cell, c) => {
              return <Cell
                row={r}
                cell={c}
                board={board}
                setboard={setboard}
                currentPlayer={currentPlayer}
                setCurrentPlayer={setCurrentPlayer} />
            })
          })
        }
      </div>

      <p>{currentPlayer}</p>

    </>
  );
};

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);