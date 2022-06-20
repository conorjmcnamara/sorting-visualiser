import React from 'react';
import './App.css';
import SortingVisualiser from './sortingVisualiser/sortingVisualiser.jsx';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="title">Sorting Algorithm Visualiser</h1>
      </header>
      <SortingVisualiser></SortingVisualiser>
    </div>
  );
}

export default App;
