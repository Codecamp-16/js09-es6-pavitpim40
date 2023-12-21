// Lab 8
// จงเขียนฟังก์ชัน removeRandom ✅
// โดยรับพารามิเตอร์มาเป็น Array ✅
// และ return ค่าเป็น Array ✅
// ที่มี element ถูกลบออกไปหนึ่งตัวโดยตำแหน่งที่ลบให้เกิดจากการสุ่ม
// PB-1 สุ่ม จาก 0 จนถึง index สุดท้าย (array.length-1)
// PB-2 ลบ

let array1 = [10, 20, 30, 40, 50, 60, 70, 80, 90]; // 0-8 (length == 9)

// KISS Principle === Keep It simple stupid
function removeRandom(array) {
  let randomIndex = Math.floor(Math.random() * array.length);
  let newArray = [...array];
  newArray.splice(randomIndex, 1);
  return newArray;
}

const r1 = removeRandom(array1);
const r2 = removeRandom(array1);
console.log(r1);
console.log(r2);
// removeRandom(array1);
// removeRandom(array1);
console.log(array1);
