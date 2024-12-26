import { cart } from '..data/cart.js';

let producthtml = '';

products.forEach((product)=> {
    producthtml += `
     <div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src="${product.image}">
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars*10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>

          <div class="product-price">
            $${product.price/100}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary js-button-add-cart"
          data-product-id="${product.id}"
          >
            Add to Cart
          </button >
        </div>
    `;

});

document.querySelector('.js-products-grid').innerHTML = producthtml;

document.querySelectorAll('.js-button-add-cart').
  forEach((button)=> {
    button.addEventListener('click', () => {
      const productid = button.dataset.productId;

      let matching;

      cart.forEach((item) => {
        if (productid === item.ProductId) {
          matching = item;
        }
      });

      if (matching) {
        matching.Quantity += 1;
      }
      else {
        cart.push({
          ProductId: productid,
          Quantity: 1
        });
      }

      let total_quqntity = 0;

      cart.forEach((qua) => {
        total_quqntity += qua.Quantity;
      })

      document.querySelector('.js-cart').innerHTML = total_quqntity;

      console.log(total_quqntity);
      
      console.log(cart);
    });
  
  });
