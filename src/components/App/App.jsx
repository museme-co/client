import React, { useState, useEffect } from 'react';
import Fretboard from '../Fretboard';
import Controls from '../Controls';
import music from '../../utils/music';

import './App.scss';

export default function App() {
  const [root, setRoot] = useState('A');
  const [accidental, setAccidental] = useState('natural');
  const [scale, setScale] = useState('minorPenta');

  const rootValue = music.notes[root].value;

  useEffect(() => {
    setAccidental('natural');
  }, [root]);

  return (
    <div className="App">
      <h1 className="App__title">Muse me</h1>
      <Fretboard
        root={rootValue}
        accidental={accidental}
        intervals={music.scales[scale].intervals}
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
