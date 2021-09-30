import { ANGKA, PULUHAN, SATUAN_LONG } from './constants';

export function terbilang(number: string | number): string {
  if (typeof number === 'string') number = Number(number);

  if (number === 0) {
    return ANGKA[0];
  }

  if (number < 0) {
    return `minus ${terbilang(-number)}`;
  }

  const parts: string[] = [];

  if (number / 1_000_000_000_000_000 > 0) {
    parts.push(`${terbilang(number / 1_000_000_000_000_000)} ${SATUAN_LONG[6]}`);
    number %= 1_000_000_000_000_000;
  }

  if (number / 1_000_000_000_000 > 0) {
    parts.push(`${terbilang(number / 1_000_000_000_000)} ${SATUAN_LONG[5]}`);
    number %= 1_000_000_000_000;
  }

  if (number / 1_000_000_000 > 0) {
    parts.push(`${terbilang(number / 1_000_000_000)} ${SATUAN_LONG[4]}`);
    number %= 1_000_000_000;
  }

  if (number / 1_000_000 > 0) {
    parts.push(`${terbilang(number / 1_000_000)} ${SATUAN_LONG[3]}`);
    number %= 1_000_000;
  }

  if (number / 1_000 > 0) {
    parts.push(`${terbilang(number / 1_000)} ${SATUAN_LONG[2]}`);
    number %= 1000;
  }

  if (number / 100 > 0) {
    parts.push(`${terbilang(number / 100)} ${SATUAN_LONG[1]}`);
    number %= 100;
  }

  if (number > 0) {
    if (number < 12) {
      parts.push(ANGKA[number]);
    } else {
      let lastPart = PULUHAN[number / 10];
      if (number % 10 > 0) {
        lastPart += `-${ANGKA[number % 10]}`;
      }

      parts.push(lastPart);
    }
  }

  const toWords = parts.join(' ');

  return toWords;
}
