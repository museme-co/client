import React from 'react';
import FretboardString from '../FretboardString';
import { instruments, notes } from '../../utils';
import { number } from 'prop-types';

import './Fretboard.scss';

function generateFretboard(tuning, fretCount) {
  return tuning.map(note => guitarString(note, fretCount));
}

function guitarString(baseNote = 0, fretCount = 12) {
  const notesArray = new Array(fretCount).fill();
  return notesArray.reduce((acc, _, idx) => [...acc, (baseNote + idx) % 12], []);
}

function mapNotesNames(matrix) {
  return matrix.map(stringNotes => stringNotes.map(note => notes.sharpMap[note]));
}

export default function Fretboard({ tuning, fretCount }) {
  const notesMatrix = mapNotesNames(generateFretboard(tuning, fretCount));

  return (
    <div className="Fretboard">
      {notesMatrix.map((stringNotes, idx) => (
        <FretboardString key={idx} stringNotes={stringNotes} />
      ))}
    </div>
  );
}

Fretboard.propTypes = {
  root: number,
  fretCount: number,
};

Fretboard.defaultProps = {
  tuning: instruments.guitar,
  fretCount: 15,
};
