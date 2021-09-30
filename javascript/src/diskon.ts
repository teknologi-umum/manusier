export enum UnitDiskon {
  PersenDariX,
  MinimumPembelianX,
  MinXMaxY,
}

/**
 *
 * @param {number} n
 * @param {UnitDiskon} unit
 * @param {number} amount
 * @param {number} x
 * @param {number} y
 * @returns {number}
 */
export function diskon(n: number, unit: UnitDiskon, amount: number, x = 0, y = 0, z = 0): number {
  if (typeof n !== 'number' && !Number.isNaN(n)) {
    throw new TypeError('isi dari argumen pertama harus berupa angka, bukan string atau lainnya');
  }

  if (typeof amount !== 'number' && !Number.isNaN(amount)) {
    throw new TypeError('isi dari argumen ketiga harus berupa angka, bukan string atau lainnya');
  }

  switch (unit) {
    case UnitDiskon.PersenDariX: {
      return n - n * (amount / 100);
    }
    case UnitDiskon.MinimumPembelianX: {
      if (y >= x) {
        return n - amount;
      }
      return n;
    }
    case UnitDiskon.MinXMaxY: {
      if (z >= x && z <= y) {
        return n - amount;
      }
      return n;
    }
    default: {
      throw new TypeError('argumen unit yang diberikan tidak valid');
    }
  }
}
