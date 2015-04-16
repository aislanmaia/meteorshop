Template.products.helpers({
  catNotSelected: function() {
    return Session.equals('category', null);
  },
  category: function() {
    return Session.get('category');
  },
  productList: function() {
    return Products.find({catName: Session.get('category')});
  }
});



Template.product.events({
  'click .addcart': function(event, template) {
    var qty = template.find('.prodqty').value;
    var product = this._id;
    var sessid = Meteor.default_connection._lastSessionId;
    Meteor.call('addToCart', qty, product, sessid);
  }
});
