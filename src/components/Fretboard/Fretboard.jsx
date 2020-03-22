import React, { useMemo } from 'react';
import { number, arrayOf, string } from 'prop-types';

import GuitarString from '../GuitarString';
import music from '../../utils/music';

import { generateFretboard, mapScale, mapNotesNames } from './utils';

import './Fretboard.scss';

export default function Fretboard({ tuning, fretCount, root, accidental, intervals }) {
  const matrix = useMemo(() => generateFretboard(tuning, fretCount), [tuning, fretCount]);

  const accidentalValue = music.accidentals[accidental].value;
  const rootValue = (root + accidentalValue + 12) % 12;
  const accidentalMap =
    accidental === 'natural'
      ? music.accidentals.scalesAccidentalsMaps[rootValue]
      : music.accidentals.scalesAccidentalsMaps[rootValue][accidental];

  const scaleMatrix = mapScale(matrix, rootValue, intervals);

  return (
    <div className="Fretboard">
      {mapNotesNames(scaleMatrix, accidentalMap).map((stringNotes, idx) => (
        <GuitarString key={idx} stringNotes={stringNotes} />
      ))}
    </div>
  );
}

Fretboard.propTypes = {
  root: number,
  accidental: string,
  fretCount: number,
  tuning: arrayOf(number),
  intervals: arrayOf(number),
};

Fretboard.defaultProps = {
  tuning: music.instruments.guitar,
  fretCount: 15,
  root: 0,
  accidental: 'natural',
  intervals: music.scales.minorPenta.intervals,
};
