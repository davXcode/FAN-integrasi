const specialTest = (input) => {
  const arrInput = input.split(" ");
  const regex = /[*_/(/[!/=/&]/;
  let count = 0;
  for (let i = 0; i < arrInput.length; i++) {
    if (arrInput[i].match(regex)) {
      continue;
    }
    count++;
  }

  return count;
};

const a = "Saat meng*ecat tembok, Agung dib_antu oleh Raihan.";
const b = "Berapa u(mur minimal[ untuk !mengurus ktp?";
const c = "Masing-masing anak mendap(atkan uang jajan ya=ng be&rbeda.";

console.log(specialTest(a));
console.log(specialTest(b));
console.log(specialTest(c));
