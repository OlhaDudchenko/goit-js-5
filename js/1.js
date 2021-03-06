const parent = {
  name: 'Stacey',
  surname: 'Moore',
  age: 54,
  heritage: 'Irish'
};
// Пиши код ниже этой строки
const child = Object.create(parent);
// const child = {
//   name: 'Jason',
//   age = 27,
// };

// Пиши код выше этой строки
child.name = 'Jason';
child.age = 27;
console.log(parent.hasOwnProperty('surname')); 
console.log(parent.hasOwnProperty('heritage'));
console.log(child.hasOwnProperty('name'));
console.log(child.name);
console.log(child.hasOwnProperty('age'));
console.log(child.age);
console.log(child.hasOwnProperty('surname'));
console.log(child.surname);
console.log(child.heritage);
console.log(parent.isPrototypeOf(child));
