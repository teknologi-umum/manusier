import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { formatRupiah } from '../src/index';

test('positive number', () => {
  assert.equal(formatRupiah(15_000), 'Rp 15.000');
  assert.equal(formatRupiah(499_500.499), 'Rp 499.500,499');
});

test('negative number', () => {
  assert.equal(formatRupiah(-35_000), '(Rp 35.000)');
  assert.equal(formatRupiah(-899_999.976), '(Rp 899.999,976)');
});

test('level', () => {
  assert.equal(formatRupiah(100_000, 1), 'Rp 100 ribu');
  assert.equal(formatRupiah(100_000_000, 1), 'Rp 100.000 ribu');
  assert.equal(formatRupiah(100_000_000, 2), 'Rp 100 juta');
  assert.equal(formatRupiah(100_000_000_000, 3), 'Rp 100 miliar');
});

test('level negative', () => {
  assert.equal(formatRupiah(-100_000, 1), '(Rp 100 ribu)');
});

test('error on invalid first argument', () => {
  // @ts-expect-error test purposes
  assert.throws(() => formatRupiah('50000'), 'isi dari argumen pertama harus berupa angka, bukan string atau lainnya');
});

test.run();
