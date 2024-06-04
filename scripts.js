document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalPriceElement = document.getElementById('total-price');

    cartItems.forEach(item => {
        const decreaseBtn = item.querySelector('.decrease-btn');
        const increaseBtn = item.querySelector('.increase-btn');
        const quantityElement = item.querySelector('.quantity');
        const deleteBtn = item.querySelector('.delete-btn');
        const likeImg = item.querySelector('.like-img');
        const itemTotalElement = item.querySelector('.item-total');
        const itemPrice = parseFloat(item.getAttribute('data-price'));

        
        const updateTotalPrice = () => {
            let total = 0;
            document.querySelectorAll('.cart-item').forEach(cartItem => {
                const quantity = parseInt(cartItem.querySelector('.quantity').textContent);
                const price = parseFloat(cartItem.getAttribute('data-price'));
                total += quantity * price;
            });
            totalPriceElement.textContent = total.toFixed(2);
        };

        
        increaseBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            itemTotalElement.textContent = `$${(quantity * itemPrice).toFixed(2)}`;
            updateTotalPrice();
        });

       
        decreaseBtn.addEventListener('click', () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                itemTotalElement.textContent = `$${(quantity * itemPrice).toFixed(2)}`;
                updateTotalPrice();
            }
        });

      
        deleteBtn.addEventListener('click', () => {
            item.remove();
            updateTotalPrice();
        });

       
        likeImg.addEventListener('click', () => {
            likeImg.classList.toggle('liked');
        });
    });

    
    updateTotalPrice();
});
