export const flat = new (function() {
  this.charcode = 9837;
  this.htmlSymbol = '&#' + this.charcode + ';';
  this.jsSymbol = String.fromCharCode(parseInt(this.charcode));
  this.value = -1;
})();

export const sharp = new (function() {
  this.charcode = 9839;
  this.htmlSymbol = '&#' + this.charcode + ';';
  this.jsSymbol = String.fromCharCode(parseInt(this.charcode));
  this.value = 1;
})();

export const natural = new (function() {
  this.charcode = 8210;
  this.htmlSymbol = '&#' + this.charcode + ';';
  this.jsSymbol = String.fromCharCode(parseInt(this.charcode));
  this.value = 0;
})();
