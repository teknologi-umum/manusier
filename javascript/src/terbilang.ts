const numbers = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan'];
const smallSuffix = ['belas', 'puluh', 'ratus'];
//                 3        6      9         12         15            18            21            24            27          30          33
const bigSuffix = ['ribu', 'juta', 'miliar', 'triliun', 'kuadriliun', 'kuantiliun', 'sekstiliun', 'septiliun', 'oktiliun', 'noniliun', 'desiliun'];

// TODO: This is just a placeholder function. Might work, might doesn't. Should be changed with a proper one.
export function terbilang(number: string | number | BigInteger): string {
  if (typeof number === 'string') number = Number(number);
  const backwards = String(number).split('').reverse().join('')
  
  const place = [];
  
  for (let i = backwards.length - 1; i >= 0; i -= 3) {
    console.log(i);
    place.push(`${backwards[i]}${backwards[i-1]}${backwards[i-2]}`);
  }
  
  
  console.log(place.reverse())
  return '';
}