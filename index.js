$(document).ready(function () {
    $("a").on("click", function (event) {
      if (this.hash !== "") {
        event.preventDefault();
  
        var hash = this.hash;
        $("html, body").animate(
          {
            scrollTop: $(hash).offset().top,
          },
          800,
          function () {
            window.location.hash = hash;
          }
        );
      }
    });
  });
  
  $(".menu-items a").click(function () {
    $("#checkbox").prop("checked", false);
  });
  function handleAddtoCart(productName, productCode, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    // Check if the product is already in the cart
    const existingProduct = cart.find(item => item.productCode === productCode);

    if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity
    } else {
      cart.push({ productName, productCode, price, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${productName} has been added to the cart!`);
  }

  function handleAddtoWishlist(productName, productCode) {
    const wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

    // Check if the product is already in the wishlist
    if (wishlist.some(item => item.productCode === productCode)) {
      alert(`${productName} is already in your wishlist!`);
      return;
    }

    wishlist.push({ productName, productCode });
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    alert(`${productName} has been added to your wishlist!`);
  }  