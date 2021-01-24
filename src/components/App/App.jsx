import React, { useState, useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Fretboard from '../Fretboard';
import Tabs from '../Tabs';
import Controls from '../Controls';
import music from '../../utils/music';

import './App.scss';

export default function App() {
  const { pathname } = useLocation();

  const [root, setRoot] = useState('A');
  const [accidental, setAccidental] = useState('natural');
  const [scaleType, setScaleType] = useState('scales');
  const [scale, setScale] = useState('minorPenta');

  const rootValue = music.notes[root].value;

  useEffect(() => {
    if (pathname) {
      console.log(pathname.replace(/\//, ''));
      setScaleType(pathname.replace(/\//, ''));
    }
  }, [pathname]);

  useEffect(() => {
    setAccidental('natural');
  }, [root]);

  const intervals = music[scaleType][scale] && music[scaleType][scale].intervals||Object.values(music[scaleType])[0].intervals;

  return (
    <div className="App">
      <h1 className="App__title">Muse me</h1>
      <Fretboard root={rootValue} accidental={accidental} intervals={intervals} />
      <Tabs>
        <Switch>
          <Route path="/scales">
            <Controls
              root={root}
              setRoot={setRoot}
              accidental={accidental}
              setAccidental={setAccidental}
              scale={scale}
              setScale={setScale}
            />
          </Route>
          <Route path="/triads">
            <Controls
              root={root}
              setRoot={setRoot}
              accidental={accidental}
              setAccidental={setAccidental}
              scale={scale}
              setScale={setScale}
              scaleType={scaleType}
              setScaleType={setScaleType}
            />
          </Route>
        </Switch>
      </Tabs>
    </div>
  );
}
