import * as arpeggios_ from './arpeggios';
import * as triads_ from './triads';

export const arpeggios = arpeggios_;
export const triads = triads_;

export const chromatic = {
  name: 'Chromatic',
  type: 'Scale',
  intervals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
};

export const minorPenta = {
  name: 'minor Pentatonic',
  type: 'Scale',
  intervals: [0, 3, 5, 7, 10],
};

export const minorPentaBlues = {
  name: 'minor Pentatonic Blues',
  type: 'Scale',
  intervals: [0, 3, 5, 6, 7, 10],
};

export const major = {
  name: 'Major',
  type: 'Scale',
  intervals: [0, 2, 4, 5, 7, 9, 11],
};

export const naturalMinor = {
  name: 'Natural minor',
  type: 'Scale',
  intervals: [0, 2, 3, 5, 7, 8, 10],
};

export const harmonicMinor = {
  name: 'Harmonic minor',
  type: 'Scale',
  intervals: [0, 2, 3, 5, 7, 8, 11],
};

export const melodicMinor = {
  name: 'Melodic minor',
  type: 'Scale',
  intervals: [0, 2, 3, 5, 7, 9, 11],
};
