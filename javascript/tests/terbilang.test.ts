import { test } from 'uvu';
import * as assert from 'uvu/assert';
import {terbilang} from '../src/index';

test('should return correct words', () => {
  const result = terbilang(1_234_567);
  assert.equal(result, 'satu juta dua ratus tiga puluh empat ribu lima ratus enam puluh tujuh');
});

test('should parse string input', () => {
  const result = terbilang('1234567');
  assert.equal(result, 'satu juta dua ratus tiga puluh empat ribu lima ratus enam puluh tujuh')
})

test.run();