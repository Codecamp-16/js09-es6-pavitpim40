// Lab 6
// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้
// แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ rest operator

function userDetail(name, surname, ...args) {
  // 'HW JS', 'Do Alg', 'Fixed Bug' => args = ['HW JS', 'Do Alg', 'Fixed Bug']
  console.log('ARG', args);
  //คืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก
  const object = {
    name: name,
    lastName: surname,
    hobbies: args,
    hobbiesCount: args.length,
  };
  return object;
}

let result = userDetail('John', 'Doe', 'HW JS', 'Do Alg', 'Fixed Bug');
console.log(result);
