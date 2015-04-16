Session.set("category", null);

Router.configure({
  layoutTemplate: 'layout',
  yieldRegions: {
    'products': {to: 'products'},
    'cart': {to: 'cart'},
    'categories': {to: 'categories'}
  }
});

Router.map(function() {
  this.route('/', 'layout');
  this.route('products', {
    layoutTemplate: 'layout',
    path: '/:name',
    data: function() {
      console.log(this.params.name);
      Session.set('category', this.params.name);
    },
    template: 'layout'
  });
});