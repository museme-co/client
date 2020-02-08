import React from 'react';
import GuitarString from '../GuitarString';
import { instruments, scales } from '../../utils';
import { number, arrayOf } from 'prop-types';
import { generateFretboard, mapScale, mapNotesNames } from './utils';

import './Fretboard.scss';

export default function Fretboard({ tuning, fretCount, root, accidental, intervals }) {
  const allNotes = generateFretboard(tuning, fretCount);
  const scaleNotes = mapScale(allNotes, root + accidental, intervals);

  // TODO automate accidental display according to scale
  const accidentalDisplay = 'sharp';

  return (
    <div className="Fretboard">
      {mapNotesNames(scaleNotes, accidentalDisplay).map((stringNotes, idx) => (
        <GuitarString key={idx} stringNotes={stringNotes} />
      ))}
    </div>
  );
}

Fretboard.propTypes = {
  root: number,
  accidental: number,
  fretCount: number,
  tuning: arrayOf(number),
  intervals: arrayOf(number),
};

Fretboard.defaultProps = {
  tuning: instruments.guitar,
  fretCount: 15,
  root: 0,
  accidental: 0,
  intervals: scales.minorPenta.intervals,
};
