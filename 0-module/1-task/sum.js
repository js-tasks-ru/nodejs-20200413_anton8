function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

function sum(a, b) {
  if (!isNumber(a) || !isNumber(b)) {
    throw new TypeError();
  }
  return a + b;
}

module.exports = sum;
