Meteor.methods({
  // remove before production
  removeAll: function() {
    Products.remove({});
    Categories.remove({});
    SubCategories.remove({});
    CartItems.remove({});
  },
  addToCart: function (qty, product, sessionId) {
    if (qty > 0) {
      CartItems.insert({qty: qty, product: product, sessionId: sessionId});
    } else {
      console.log("Quantity is zero");
    }
  },
  removeCartItem: function(id) {
    CartItems.remove({_id: id});
  }
});