import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { durasiMenuju, durasiSejak } from '../src';

const TIME = {
  SECOND: 1000,
  MINUTE: 1000 * 60,
  HOUR: 1000 * 60 * 60,
  DAY: 1000 * 60 * 60 * 24,
  YEAR: 1000 * 60 * 60 * 24 * 365,
};

test('milidetik', () => {
  assert.equal(durasiSejak(new Date(Date.now() + 5)), '5 milidetik lalu');
  assert.equal(durasiMenuju(new Date(Date.now() - 5)), '5 milidetik kedepan');
});

test('detik', () => {
  assert.equal(durasiSejak(new Date(Date.now() + TIME.SECOND * 5)), '5 detik lalu');
  assert.equal(durasiMenuju(new Date(Date.now() - TIME.SECOND * 5)), '5 detik kedepan');
});

test('menit', () => {
  assert.equal(durasiSejak(new Date(Date.now() + TIME.MINUTE * 10)), '10 menit lalu');
  assert.equal(durasiMenuju(new Date(Date.now() - TIME.MINUTE * 10)), '10 menit kedepan');
});

test('jam', () => {
  assert.equal(durasiSejak(new Date(Date.now() + TIME.HOUR * 6)), '6 jam lalu');
  assert.equal(durasiMenuju(new Date(Date.now() - TIME.HOUR * 6)), '6 jam kedepan');
});

test('hari', () => {
  assert.equal(durasiSejak(new Date(Date.now() + TIME.DAY * 5)), '5 hari lalu');
  assert.equal(durasiMenuju(new Date(Date.now() - TIME.DAY * 5)), '5 hari kedepan');
});

test('tahun', () => {
  assert.equal(durasiSejak(new Date(Date.now() + TIME.YEAR * 4)), '4 tahun lalu');
  assert.equal(durasiMenuju(new Date(Date.now() - TIME.YEAR * 4)), '4 tahun kedepan');
});

test('error', () => {
  // @ts-expect-error test purposes
  assert.throws(() => durasiSejak(true), 'argumen pertama harus berupa class Date');
  // @ts-expect-error test purposes
  assert.throws(() => durasiMenuju(true), 'argumen pertama harus berupa class Date');

  assert.throws(
    () => durasiSejak(new Date(Date.now() - TIME.SECOND * 5)),
    'argumen pertama hanya boleh memiliki Date sebelum waktu sekarang',
  );
  assert.throws(
    () => durasiMenuju(new Date(Date.now() + TIME.SECOND * 5)),
    'argumen pertama hanya boleh memiliki Date setelah waktu sekarang',
  );
});

test.run();
