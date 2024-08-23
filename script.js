document.addEventListener('DOMContentLoaded', function () {
    function addToCart(itemName, itemPrice) {

        const cartItem = {
            name: itemName,
            price: itemPrice
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        cart.push(cartItem);

        localStorage.setItem('cart', JSON.stringify(cart));

        alert(`${itemName} has been added to your cart.`);
    }

    document.querySelectorAll('.add-to-cart-btn').forEach(button => {
        button.addEventListener('click', function () {

            const itemName = this.previousElementSibling.textContent;
            const itemPrice = this.parentElement.nextElementSibling.querySelector('p:last-child').textContent;

            addToCart(itemName, itemPrice);
        });
    });

    document.getElementById('seeMoreBtn').addEventListener('click', function () {
        const additionalCards = document.querySelectorAll('.additional-card');
        const btnText = document.getElementById('seeMoreBtn');

        additionalCards.forEach(card => {
            if (card.style.display === 'none' || card.style.display === '') {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        if (btnText.innerText === 'See More Products') {
            btnText.innerText = 'See Less';
        } else {
            btnText.innerText = 'See More Products';
        }
    });

    document.getElementById('subscriptionForm').addEventListener('submit', function (event) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const subscriptionMessage = document.getElementById('subscriptionMessage');

        if (emailInput.value) {
            subscriptionMessage.textContent = 'Subscription complete';
            subscriptionMessage.classList.remove('hidden');
            emailInput.value = '';
        }
    });
});
