// Lab 7
// จงเขียนฟังก์ชัน doubleAndReturnArgs
// โดยรับพารามิเตอร์มาเป็น Array และตัวเลขกี่ตัวก็ได้
// และ return ค่าเป็น Array
// ที่ประกอบด้วยค่าเดิมในพารามิเตอร์ที่เป็น Array และค่าพารามิเตอร์ที่เป็นตัวเลขคูณสอง

function doubleAndReturnArgs(array, ...nums) {
  const newArray = [...array, ...nums].map((n) => n * 2);
  return newArray;
}

const r = doubleAndReturnArgs([1, 2, 3, 4], 5, 6, 75); // nums = [5,6,7]
console.log(r);
