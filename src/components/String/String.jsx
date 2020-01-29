import React from 'react';
import Note from '../Note';

import './String.scss';

export default function String({ notesNames }) {
  return (
    <div className="String">
      {notesNames.map(note => (
        <Note key={note} name={note} />
      ))}
    </div>
  );
}
