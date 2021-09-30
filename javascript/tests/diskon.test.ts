import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { diskon, UnitDiskon } from '../src/index';

test('persen dari', () => {
  assert.equal(diskon(50_000, UnitDiskon.PersenDariX, 10), 45_000);
});

test('minimum pembelian', () => {
  assert.equal(diskon(50_000, UnitDiskon.MinimumPembelianX, 10_000, 3, 5), 40_000);
  assert.equal(diskon(50_000, UnitDiskon.MinimumPembelianX, 10_000, 5, 3), 50_000);
});

test('min x max y', () => {
  assert.equal(diskon(50_000, UnitDiskon.MinXMaxY, 10_000, 5, 90, 6), 40_000);
  assert.equal(diskon(50_000, UnitDiskon.MinXMaxY, 10_000, 5, 90, 3), 50_000);
});

test('invalid first argument', () => {
  assert.throws(
    // @ts-expect-error test purposes
    () => diskon('50000', UnitDiskon.MinXMaxY, 10),
    'isi dari argumen pertama harus berupa angka, bukan string atau lainnya',
  );
});

test('invalid third argument', () => {
  assert.throws(
    // @ts-expect-error test purposes
    () => diskon(50000, UnitDiskon.MinXMaxY, '10'),
    'isi dari argumen ketiga harus berupa angka, bukan string atau lainnya',
  );
});

test('invalid unit argument', () => {
  assert.throws(() => diskon(50000, 6, 10), 'argumen unit yang diberikan tidak valid');
});

test.run();
