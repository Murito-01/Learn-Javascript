// List variable nilai
const nilai1 = 85;
const nilai2 = 80;
const nilai3 = 95;
const nilai4 = 60;
const nilai5 = 70;

const mean = (nilai1 + nilai2 + nilai3 + nilai4 + nilai5) / 5;

// Mean of nilai
console.log(`Rata-rata nilai kelas: ${mean}`);
// Max of nilai
console.log(`Nilai tertinggi: ${Math.max(nilai1, nilai2, nilai3, nilai4, nilai5)}`);
// Min of nilai
console.log(`Nilai tertinggi: ${Math.min(nilai1, nilai2, nilai3, nilai4, nilai5)}`);

//Variable and Booleans
if (mean >= 90) {
  console.log('Grade A');
} else if (mean >= 80) {
  console.log('Grade B');
} else if (mean >= 70) {
  console.log('Grade C');
} else if (mean >= 60) {
  console.log('Grade D');
} else {
  console.log('Grade E');
};