function calculateTotal() {
let pizzaPrice= 0;
let sizePrice= 0;

const selectedPizza = document.querySelectorAll('.pizza-radio : checked');
if (selectedPizza) {
    pizzaPrice = 
parseFloat (selectedPizza.getAttribute ('data-price'))
}

const selectedSize = document.querySelector('.size-radio : checked');
if (selectedSize) {
    sizePrice = 
parseFloat (selectedSize.getAttribute ('data-size-price'))
}

const totalPrice = pizzaPrice + sizePrice + extraPrice;

document.getElementById('total-price').innerText = `Gesamtpreis: €${total.toFixed(2)}`;
}
document.getElementById('calculate-btn').addEventListener('click', calculateTotal);
