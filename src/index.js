module.exports = function toReadable (number) {
  const units = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five", 
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };

  const een = {
    0: "ten",
    1: "eleven",
    2: "twelve",
    3: "thirteen",
    4: "fourteen",
    5: "fifteen",
    6: "sixteen",
    7: "seventeen",
    8: "eighteen",
    9: "nineteen"
  };

  const tens = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
  };

  let digits = String(number).padStart(3, '0').split('');
  let result = '';
  result += digits[0] === '0' ? '' : units[Number(digits[0])] + ' hundred ';
  result += digits[1] === '0' ? '' : 
                    digits[1] === '1' ? een[Number(digits[2])] + ' ' : tens[Number(digits[1])] + ' ';
  result += digits[2] === '0' ? '' : 
                    digits[1] === '1' ? '' : units[Number(digits[2])];

  return result ? result.trim() : 'zero';
}