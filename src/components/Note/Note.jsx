import React from 'react';
import './Note.scss';

export default function Note({ name }) {
  const className = name ? 'Note--active' : 'Note';

  return (
    <div className="Fret">
      <div className={className}>
        <span>{name}</span>
      </div>
    </div>
  );
}
