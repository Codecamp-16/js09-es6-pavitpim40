// Lab 3
// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object
// ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน (ในกรณีที่ Object ในพารามิเตอร์มี key ซ้ำกันให้ยึดค่าพารามิเตอร์ตัวที่มาก่อนเป็นหลัก)

let obj1 = { name: 'Andy', age: 25 };
let obj2 = { gender: 'M', age: 30 };

function mergeObjects(...args) {
  // put your code here
}

console.log(mergeObjects(obj1, obj2));
console.log(mergeObjects(obj2, obj1));
