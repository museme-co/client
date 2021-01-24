import React from 'react';
import { NavLink } from 'react-router-dom';

import './Tabs.scss';

export default function Tabs({ children }) {
  return (
    <div className="Tabs">
      <div className="Tabs__tile">
        <NavLink to="/scales">scales</NavLink>
        <NavLink to="/triads">triads</NavLink>
        <NavLink to="/chords">chords</NavLink>
      </div>
      <div>{children}</div>
    </div>
  );
}
