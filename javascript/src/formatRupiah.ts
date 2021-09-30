import { SATUAN_LONG } from './constants';

/**
 * Formats a given number to a Rupiah formatted string.
 * @param {number} n
 * @param {number} level
 * @returns {string}
 * @example
 * ```js
 * formatRupiah(-899_999.976); // "(Rp 899.999,976)"
 * formatRupiah(499_500.499);  // "Rp 499.500,499"
 * ```
 */
export function formatRupiah(n: number, level = -1): string {
  if (typeof n !== 'number' && !Number.isNaN(n)) {
    throw new TypeError('isi dari argumen pertama harus berupa angka, bukan string atau lainnya');
  }

  const t = n.toLocaleString('id-ID', { signDisplay: 'never', style: 'decimal' });

  if (level < 0) {
    return `${n < 0 ? '(' : ''}Rp ${t}${n < 0 ? ')' : ''}`;
  }

  const s = t.split('.');
  const v = s.slice(0, s.length - level);
  return `${n < 0 ? '(' : ''}Rp ${v.join('.')} ${SATUAN_LONG[level + 1]}${n < 0 ? ')' : ''}`;
}
