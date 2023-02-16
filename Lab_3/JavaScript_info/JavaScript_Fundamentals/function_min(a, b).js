// min(2, 5) == 2
// min(3, -1) == -1
// min(1, 1) == 1


// A solution using if:
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    return b;
  }
}


// A solution with a question mark operator '?':
function min(a, b) {
  return a < b ? a : b;
}