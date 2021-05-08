const pizzaPalace = {
  pizzas: ['Ультрасыр', 'Аль Копчино', 'Четыре нарезона'],
  order(pizzaName, onSuccess, onError) {
    if (!this.pizzas.includes(pizzaName)) {
      // console.log(this.pizzas);
       return onError( `В ассортименте нет пиццы с названием ${pizzaName}.`);
      // console.log((onError));
       
     
    }

    return onSuccess(pizzaName);
  },

    
};
// Пиши код выше этой строки

// Колбэк для onSuccess
function makePizza(pizzaName) {
  return `Ваш заказ принят. Готовим пиццу ${pizzaName}.`;
}

// Колбэк для onError
function onOrderError(error) {
  return `Ошибка! ${error}`;
}

// Вызовы метода с колбэками
console.log(pizzaPalace.order('Аль Копчино', makePizza, onOrderError));
console.log(pizzaPalace.order('Четыре нарезона', makePizza, onOrderError));
console.log(pizzaPalace.order('Биг майк', makePizza, onOrderError));
console.log(pizzaPalace.order('Венская', makePizza, onOrderError));