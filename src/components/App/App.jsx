import React from 'react';
import './App.scss';
import Fretboard from '../Fretboard/Fretboard';

export default function App() {
  return (
    <div className="App">
      <h1 className="App__title">Muse me</h1>
      <Fretboard />
    </div>
  );
}
