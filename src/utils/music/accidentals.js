export const flat = new (function() {
  this.charcode = 9837;
  this.jsSymbol = String.fromCharCode(parseInt(this.charcode));
  this.value = -1;
})();

export const natural = new (function() {
  this.charcode = 8210;
  this.jsSymbol = String.fromCharCode(parseInt(this.charcode));
  this.value = 0;
})();

export const sharp = new (function() {
  this.charcode = 9839;
  this.jsSymbol = String.fromCharCode(parseInt(this.charcode));
  this.value = 1;
})();

export const noteAccidentals = {
  A: ['flat', 'sharp'],
  B: ['flat'],
  C: ['sharp'],
  D: ['flat', 'sharp'],
  E: ['flat'],
  F: ['sharp'],
  G: ['flat', 'sharp'],
};

export const scalesAccidentalsMaps = [
  //A
  'sharpMap',
  //A# | B♭
  { sharp: 'sharpMap', flat: 'flatMap' },
  //B
  'sharpMap',
  //C
  'sharpMap',
  //C# | D♭
  { sharp: 'sharpMap', flat: 'flatMap' },
  //D
  'sharpMap',
  //D# | E♭
  { sharp: 'sharpMap', flat: 'flatMap' },
  //E
  'sharpMap',
  //F
  'flatMap',
  //F# | G♭
  { sharp: 'sharpMap', flat: 'flatMap' },
  //G
  'sharpMap',
  //G# | A♭
  { sharp: 'sharpMap', flat: 'flatMap' },
];
