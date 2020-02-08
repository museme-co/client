import React, { useState } from 'react';
import './App.scss';
import Fretboard from '../Fretboard';
import Controls from '../Controls';
import { scales, notes, accidentals } from '../../utils';

export default function App() {
  const [root, setRoot] = useState('A');
  const [accidental, setAccidental] = useState('natural');
  const [scale, setScale] = useState('minorPenta');

  const rootValue = notes[root].value;
  const accidentalValue = accidentals[accidental].value;

  return (
    <div className="App">
      <h1 className="App__title">Muse me</h1>
      <Fretboard
        root={rootValue}
        accidental={accidentalValue}
        intervals={scales[scale].intervals}
      />
      <Controls
        root={root}
        setRoot={setRoot}
        accidental={accidental}
        setAccidental={setAccidental}
        scale={scale}
        setScale={setScale}
      />
    </div>
  );
}
