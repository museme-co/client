import React from 'react';
import './Note.scss';

export default function Note({ name }) {
  return (
    <div className="Note">
      <span>{name}</span>
    </div>
  );
}
