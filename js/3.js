 function Car(brand, model, price) {
  this.brand = brand;
  this.model = model;
  this.price = price;
};

const car = new Car('Audi', 'Q3', 36000);
const car = new Car('BMW', 'X5', 58900);
const car = new Car('Nissan', 'Murano', 31700);
console.log(car);