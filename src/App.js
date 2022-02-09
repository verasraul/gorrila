import React, { useState } from 'react';
import Records from './components/Records';
import Receipts from './components/Receipts';
import './App.css';

function App() {
  const [receipts, setReceipts] = useState(Records);

  const data = receipts.map((item, index) => {
        return (
        <Receipts {...item} key={index} />
        );
      });



  return (
    <div className="App">
      <h1>MY HEADER</h1>
      <>{ data }</>
      {/* <Receipts /> */}
    </div>
  );
};


export default App;