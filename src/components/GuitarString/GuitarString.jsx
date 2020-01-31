import React from 'react';
import Note from '../Note';
import { arrayOf, string } from 'prop-types';

import './GuitarString.scss';

export default function GuitarString({ stringNotes }) {
  return (
    <div className="GuitarString">
      <div className="GuitarString__stroke"></div>
      {stringNotes.map(note => (
        <Note key={note} name={note} />
      ))}
    </div>
  );
}

GuitarString.propTypes = {
  stringNotes: arrayOf(string),
};
