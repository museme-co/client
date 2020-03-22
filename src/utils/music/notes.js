import { sharp, flat } from './accidentals';

export const A = {
  value: 0,
  natural: 'A',
  sharp: `A${sharp.jsSymbol}`,
  flat: `A${flat.jsSymbol}`,
};

export const B = {
  value: 2,
  natural: 'B',
  flat: `B${flat.jsSymbol}`,
};

export const C = {
  value: 3,
  natural: 'C',
  sharp: `C${sharp.jsSymbol}`,
};

export const D = {
  value: 5,
  natural: 'D',
  sharp: `D${sharp.jsSymbol}`,
  flat: `D${flat.jsSymbol}`,
};

export const E = {
  value: 7,
  natural: 'E',
  flat: `E${flat.jsSymbol}`,
};

export const F = {
  value: 8,
  natural: 'F',
  sharp: `F${sharp.jsSymbol}`,
};

export const G = {
  value: 10,
  natural: 'G',
  sharp: `G${sharp.jsSymbol}`,
  flat: `G${flat.jsSymbol}`,
};

export const sharpMap = [
  A.natural,
  A.sharp,
  B.natural,
  C.natural,
  C.sharp,
  D.natural,
  D.sharp,
  E.natural,
  F.natural,
  F.sharp,
  G.natural,
  G.sharp,
];

export const flatMap = [
  A.natural,
  B.flat,
  B.natural,
  C.natural,
  D.flat,
  D.natural,
  E.flat,
  E.natural,
  F.natural,
  G.flat,
  G.natural,
  A.flat,
];
