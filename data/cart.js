export let cart = JSON.parse(localStorage.getItem('cart'));
  
if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      Qunatity: 2,
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      Qunatity: 1,
    }
  ];
}

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

export function add_cart(productid) {
  let matching;

  cart.forEach((item) => {
    if (productid === item.productId) {
      matching = item;
    }
  });

  if (matching) {
    matching.Qunatity += 1;
  } else {
    cart.push({
      ProductId: productid,
      Qunatity: 1,
    });
  }

  

  saveToStorage();

}

export function removecart(productId) {
  const newcart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newcart.push(cartItem);
    }
  });
  cart = newcart;

  saveToStorage();

}
