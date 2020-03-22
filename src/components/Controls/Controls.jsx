import React from 'react';
import { func, string } from 'prop-types';
import music from '../../utils/music';

import './Controls.scss';

export default function Controls({ root, setRoot, accidental, setAccidental, scale, setScale }) {
  return (
    <div className="Controls">
      <select
        value={root}
        onChange={({ currentTarget }) => {
          setRoot(currentTarget.value);
        }}
      >
        {Object.entries(music.notes).map(
          ([key, { natural }]) =>
            natural && (
              <option key={key} value={key}>
                {natural}
              </option>
            ),
        )}
      </select>

      <select
        value={accidental}
        onChange={({ currentTarget }) => {
          setAccidental(currentTarget.value);
        }}
      >
        <option value="natural">-</option>
        {music.accidentals.noteAccidentals[root].map(val => (
          <option key={val} value={val}>
            {music.accidentals[val].jsSymbol}
          </option>
        ))}
      </select>

      <select
        value={scale}
        onChange={({ currentTarget }) => {
          setScale(currentTarget.value);
        }}
      >
        {Object.entries(music.scales).map(
          ([key, { name }]) =>
            name && (
              <option key={name} value={key}>
                {name}
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
