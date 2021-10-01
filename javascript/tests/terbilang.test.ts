import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { terbilang } from '../src/index';

test('should return correct words', () => {
  const result = terbilang(1_234_567);
  assert.equal(result, 'satu juta dua ratus tiga puluh empat ribu lima ratus enam puluh tujuh');
});

test('should parse string input', () => {
  const result = terbilang('1234567');
  assert.equal(result, 'satu juta dua ratus tiga puluh empat ribu lima ratus enam puluh tujuh');
});

test('minus', () => {
  assert.equal(terbilang(-1_234), 'minus seribu dua ratus tiga puluh empat');
});

test('nol', () => {
  assert.equal(terbilang(0), 'nol');
});

test('parse seratus with nol in long number', () => {
  assert.equal(terbilang(130_000_000), 'seratus tiga puluh juta');
});

test('parse seribu with nol in long number', () => {
  assert.equal(terbilang(1_000), 'seribu');
});

test('parse seratus', () => {
  assert.equal(terbilang(1_00), 'seratus');
});

test('parse triliun', () => {
  assert.equal(
    terbilang(91_234_567_912_345),
    'sembilan puluh satu triliun dua ratus tiga puluh empat miliar lima ratus enam puluh tujuh juta sembilan ratus dua belas ribu tiga ratus empat puluh lima',
  );
});

test('error', () => {
  // @ts-expect-error test purposes
  assert.throws(() => terbilang(true), 'argumen pertama harus merupakan angka ataupun string dan tidak boleh kosong');
});

test.run();
