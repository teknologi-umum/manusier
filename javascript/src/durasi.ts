import { RELASI_DURASI } from './constants';

const TIME = {
  SECOND: 1000,
  MINUTE: 1000 * 60,
  HOUR: 1000 * 60 * 60,
  DAY: 1000 * 60 * 60 * 24,
  YEAR: 1000 * 60 * 60 * 24 * 365,
};

export function durasiSejak(d: Date): string {
  if (!(d instanceof Date) && !d) {
    throw new TypeError('argumen pertama harus berupa class Date');
  }
  if (d.getTime() - Date.now() < 0) {
    throw new TypeError('argumen pertama hanya boleh memiliki Date sebelum waktu sekarang');
  }
  return durasi(d);
}

export function durasiMenuju(d: Date): string {
  if (!(d instanceof Date) && !d) {
    throw new TypeError('argumen pertama harus berupa class Date');
  }
  if (d.getTime() - Date.now() > 0) {
    throw new TypeError('argumen pertama hanya boleh memiliki Date setelah waktu sekarang');
  }
  return durasi(d);
}

function durasi(d: Date): string {
  const a = d.getTime();
  const b = Date.now();
  const diff = Math.abs(a - b);
  const isFuture = (str: string): string =>
    b - a > 0 ? RELASI_DURASI.future.replace('{?}', str) : RELASI_DURASI.past.replace('{?}', str);

  if (diff > TIME.YEAR) {
    return isFuture(RELASI_DURASI.y.replace('{?}', String(diff / TIME.YEAR)));
  }

  if (diff > TIME.DAY) {
    return isFuture(RELASI_DURASI.d.replace('{?}', String(diff / TIME.DAY)));
  }

  if (diff > TIME.HOUR) {
    return isFuture(RELASI_DURASI.h.replace('{?}', String(diff / TIME.HOUR)));
  }

  if (diff > TIME.MINUTE) {
    return isFuture(RELASI_DURASI.m.replace('{?}', String(diff / TIME.MINUTE)));
  }

  if (diff > TIME.SECOND) {
    return isFuture(RELASI_DURASI.s.replace('{?}', String(diff / TIME.SECOND)));
  }

  return isFuture(RELASI_DURASI.x.replace('{?}', String(diff)));
}
