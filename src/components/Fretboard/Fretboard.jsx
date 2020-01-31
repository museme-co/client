import React from 'react';
import GuitarString from '../GuitarString';
import { instruments, scales } from '../../utils';
import { number, arrayOf, shape } from 'prop-types';
import { generateFretboard, mapScale, mapNotesNames } from './utils';

import './Fretboard.scss';
export default function Fretboard({ tuning, fretCount, scale }) {
  const allNotes = generateFretboard(tuning, fretCount);
  const scaleNotes = mapScale(allNotes, scale.root, scale.intervals);

  return (
    <div className="Fretboard">
      {mapNotesNames(scaleNotes).map((stringNotes, idx) => (
        <GuitarString key={idx} stringNotes={stringNotes} />
      ))}
    </div>
  );
}

Fretboard.propTypes = {
  root: number,
  fretCount: number,
  scale: shape({
    root: number,
    intervals: arrayOf(number),
  }),
};

Fretboard.defaultProps = {
  tuning: instruments.guitar,
  fretCount: 15,
  scale: {
    root: 0,
    intervals: scales.minorPentatonic.intervals,
  },
};

// chromatic
// minorPentatonic
// majorScale
// naturalMinor
// minorPentatonicBlues
// harmonicMinor
// melodicMinor
// minor
// majorTriad
// diminished
// augmented
// minSeven
// majSeven
// domSeven
// dimSeven
// powerChord
