const pairShoes = (arr) => {
  let match = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && arr[j] !== 0) {
          arr[i] = 0;
          arr[j] = 0;
          match++;
        }
      }
    }
  }
  return match;
};

const contoh = [5, 7, 7, 9, 10, 4, 5, 10, 6, 5];
const a = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const b = [6, 5, 2, 3, 5, 2, 2, 1, 1, 5, 1, 3, 3, 3, 5];
const c = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];

console.log(pairShoes(contoh));
console.log(pairShoes(a));
console.log(pairShoes(b));
console.log(pairShoes(c));
