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
  A: ['natural', 'flat'],
  B: ['natural', 'flat'],
  C: ['flat', 'natural', 'sharp'],
  D: ['natural', 'flat'],
  E: ['natural', 'flat'],
  F: ['natural', 'sharp'],
  G: ['natural', 'flat'],
};
