const dictionary = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty',
  30: 'thirty',
  40: 'forty',
  50: 'fifty',
  60: 'sixty',
  70: 'seventy',
  80: 'eighty',
  90: 'ninety',
};

module.exports = function toReadable(num) {
  if (!num) return 'zero';

  const arrNum = num.toString().split('');
  const resultNum = [];

  if (arrNum.length === 3) {
    resultNum.push(dictionary[arrNum[0]]);
    resultNum.push('hundred');

    if (arrNum[2] === '0') {
      resultNum.push(dictionary[arrNum[1] + '0']);
      return resultNum.join(' ').trim();
    }

    if (
      dictionary[arrNum.slice(1).join('')] &&
      arrNum.slice(1).join('') !== '10'
    ) {
      resultNum.push(dictionary[arrNum.slice(1).join('')]);
    } else {
      if (arrNum[2] !== '0') {
        if (dictionary[arrNum[1] + '0']) {
          resultNum.push(dictionary[arrNum[1] + '0']);
        }
        resultNum.push(dictionary[arrNum[2]]);
      }
    }
  }

  if (arrNum.length === 2) {
    if (arrNum[1] === '0') {
      resultNum.push(dictionary[arrNum[0] + '0']);
      resultNum.push(dictionary[arrNum[1]]);
    } else if (dictionary[arrNum.join('')]) {
      resultNum.push(dictionary[arrNum.join('')]);
    } else {
      resultNum.push(dictionary[arrNum[0] + '0']);
      resultNum.push(dictionary[arrNum[1]]);
    }
  }

  if (arrNum.length === 1) {
    resultNum.push(dictionary[arrNum[0]]);
  }

  return resultNum.join(' ').trim();
};
