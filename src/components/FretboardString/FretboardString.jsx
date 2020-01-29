import React from 'react';
import Note from '../Note';
import { arrayOf, string } from 'prop-types';

import './FretboardString.scss';

export default function FretboardString({ stringNotes }) {
  return (
    <div className="FretboardString">
      {stringNotes.map(note => (
        <Note key={note} name={note} />
      ))}
    </div>
  );
}

FretboardString.propTypes = {
  stringNotes: arrayOf(string),
};
