class StringBuilder{
  #value;
  constructor(baseValue) {
  this.#value = baseValue;
}

getValue() {
  return this.#value;
}

padEnd(str) {
  this.#value += str;
}

padStart(str) {
  this.#value = str + this.#value;
}

padBoth(str) {
  this.padStart(str);
  this.padEnd(str);
}
}

// Пиши код выше этой строки
const builder = new StringBuilder('.');
console.log(builder.getValue()); // '.'
builder.padStart('^');
console.log(builder.getValue()); // '^.'
builder.padEnd('^');
console.log(builder.getValue()); // '^.^'
builder.padBoth('=');
console.log(builder.getValue()); // '=^.^='
// console.log(this.padStart(str));
console.log(StringBuilder.prototype.hasOwnProperty('getValue'));
console.log(StringBuilder.prototype.hasOwnProperty('padEnd'));
console.log(StringBuilder.prototype.hasOwnProperty('padStart'));
console.log(StringBuilder.prototype.hasOwnProperty('padBoth'));
console.log(new StringBuilder('.'));
console.log(StringBuilder.prototype.isPrototypeOf(builder));
