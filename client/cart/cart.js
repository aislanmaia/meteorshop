Template.cart.helpers({
  cartItems: function() {
    var shopCart = [];
    var cartItems = CartItems.find();
    var total = 0;
    cartItems.forEach(function (cartItem) {
      var product = Products.findOne(cartItem.product);
      cartItem.productName = product.name;
      cartItem.price = (Number(product.price) * cartItem.qty);
      total += cartItem.price;
      shopCart.push(cartItem);
    });
    shopCart.subTotal = total;
    shopCart.tax = shopCart.subTotal * .06;
    shopCart.total = shopCart.subTotal + shopCart.tax;
    return shopCart;
  }
});

Template.cart.events({
  'click .remove-cart-item': function(event, template) {
    Meteor.call('removeCartItem', this._id);
  }
});