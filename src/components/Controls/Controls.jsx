import React from 'react';
import { func, string } from 'prop-types';
import { scales, notes, accidentals } from '../../utils';
import './Controls.scss';

export default function Controls({ root, setRoot, accidental, setAccidental, scale, setScale }) {
  return (
    <div className="Controls">
      <select
        value={root}
        onChange={e => {
          setRoot(e.currentTarget.value);
        }}
      >
        {Object.entries(notes).map(
          ([key, val]) =>
            val.natural && (
              <option key={key} value={key}>
                {val.natural}
              </option>
            ),
        )}
      </select>

      <select
        value={accidental}
        onChange={e => {
          setAccidental(e.currentTarget.value);
        }}
      >
        {accidentals.noteAccidentals[root].map(val => (
          <option key={val} value={val}>
            {accidentals[val].jsSymbol}
          </option>
        ))}
      </select>

      <select value={scale} onChange={e => setScale(e.currentTarget.value)}>
        {Object.entries(scales).map(
          ([key, val]) =>
            val.name && (
              <option key={val.name} value={key}>
                {val.name}
              </option>
            ),
        )}
      </select>
    </div>
  );
}

Controls.propTypes = {
  root: string,
  scale: string,
  setScale: func,
  setRoot: func,
};
