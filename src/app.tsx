import React from 'react';
import ReactDOM from 'react-dom';


const Cell: React.FC = () => {
  return <div>Cell</div>;
};


const App: React.FC = () => {
  return (
    <>
      {
         Array.from({length: 10}, (_, i) => {
          return <Cell/>
        })
      }
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));