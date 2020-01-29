import { sharp, flat } from './accidentals';

export const A = {
  value: 0,
  natural: 'A',
  sharp: `A${sharp.htmlSymbol}`,
  flat: `A${flat.htmlSymbol}`,
};

export const B = {
  value: 2,
  natural: 'B',
  flat: `B${flat.htmlSymbol}`,
};

export const C = {
  value: 3,
  natural: 'C',
  sharp: `C${sharp.htmlSymbol}`,
};

export const D = {
  value: 5,
  natural: 'D',
  sharp: `D${sharp.htmlSymbol}`,
  flat: `D${flat.htmlSymbol}`,
};

export const E = {
  value: 7,
  natural: 'E',
  flat: `E${flat.htmlSymbol}`,
};

export const F = {
  value: 8,
  natural: 'F',
  sharp: `F${sharp.htmlSymbol}`,
};

export const G = {
  value: 10,
  natural: 'G',
  sharp: `G${sharp.htmlSymbol}`,
  flat: `G${flat.htmlSymbol}`,
};

export const sharpMap = [A, A.sharp, B, C, C.sharp, D, D.sharp, E, F, F.sharp, G, G.sharp];

export const flatMap = [A, B.flat, B, C, D.flat, D, E.flat, E, F, G.flat, G, A.flat];
