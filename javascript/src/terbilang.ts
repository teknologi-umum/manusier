import { ANGKA, PULUHAN, SATUAN_LONG, BELASAN, SATUAN_RIBU } from './constants';

export function terbilang(n: string | number): string {
  if (typeof n !== 'string' && typeof n !== 'number' && n !== '') {
    throw new TypeError('argumen pertama harus merupakan angka ataupun string dan tidak boleh kosong');
  }

  if (typeof n === 'string') n = Number(n);

  const parts: string[] = [];

  if (n < 0) {
    parts.push('minus');
    n *= -1;
  }

  const triplets = splitPerThree(n);
  if (triplets.length === 0 || Number(triplets.join('')) === 0) {
    return ANGKA[0];
  }

  for (let i = triplets.length - 1; i >= 0; i--) {
    const triplet = triplets[i];

    if (triplet === 0) {
      continue;
    }

    const hundreds = Math.floor(triplet / 100) % 10;
    const tens = Math.floor(triplet / 10) % 10;
    const units = triplet % 10;

    // Case for 100
    if (hundreds === 1) {
      parts.push('seratus');
    } else if (hundreds > 0) {
      parts.push(ANGKA[hundreds] + ' ratus');
    }

    // Special case for 1000
    if (triplet === 1 && i === 1) {
      parts.push('seribu');
      continue;
    }

    if (tens === 0 && units === 0) {
      const mega = SATUAN_LONG[i + 1];
      if (mega !== '') {
        // if it's 100, then skip it because we've handled it before
        if (triplet === 100) {
          continue;
        } else {
          parts.push(mega);
        }
      }
      continue;
    }

    switch (tens) {
      case 0:
        parts.push(ANGKA[units]);
        break;
      case 1:
        parts.push(BELASAN[units]);
        break;
      default:
        if (units > 0) {
          parts.push(`${PULUHAN[tens]} ${ANGKA[units]}`);
        } else {
          parts.push(PULUHAN[tens]);
        }
        break;
    }

    const mega = SATUAN_RIBU[i];
    if (mega !== '') {
      parts.push(mega);
    }
  }

  return parts.join(' ');
}

function splitPerThree(n: number): number[] {
  const temp: number[] = [];
  const s = Array.from(String(n));

  const m = s.length % 3;
  if (m === 2) {
    temp.push(Number(s.slice(0, 2).join('')));
    s.splice(0, 2);
  } else if (m === 1) {
    temp.push(Number(s.slice(0, 1).join('')));
    s.splice(0, 1);
  }

  for (let i = 0; i < s.length; i += 3) {
    temp.push(Number(s.slice(i, i + 3).join('')));
  }

  return temp.reverse();
}
