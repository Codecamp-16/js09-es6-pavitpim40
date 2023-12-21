/*
Lab 16
ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร
*/
function getUserData({ firstName, favoriteColor = 'green' }) {
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}
getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
getUserData({ firstName: 'Melissa' }); // **
getUserData({}); // ***
