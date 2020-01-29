import React from 'react';
import String from '../String';
import { instruments } from '../../utils';

import './Fretboard.scss';

function generateFretboard(tuning = instruments.guitar, fretCount = 12) {
  return tuning.map(note => guitarString(note, fretCount));
}

function guitarString(baseNote = 0, fretCount = 12) {
  const notesArray = new Array(fretCount).fill();
  return notesArray.reduce((acc, _, idx) => [...acc, (baseNote + idx) % 12], []);
}

export default function Fretboard() {
  const notesMatrix = generateFretboard();

  return (
    <div className="Fretboard">
      {notesMatrix.map((string, idx) => (
        <String key={idx} notesNames={string} />
      ))}
    </div>
  );
}
