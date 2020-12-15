// Not completely clear!
function findAllPermutations(str) {
  if (str.length === 1) return str;
  let permutations = [];
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let remainingChar = str.slice(0, i) + str.slice(i + 1, str.length);
    for (let perm of findAllPermutations(remainingChar)) {
      permutations.push(char + perm);
    }
  }
  return permutations;
}
