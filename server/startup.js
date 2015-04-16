Meteor.startup(function(){
  if (Products.find().count() === 0) {
    Products.insert({thumb: 'applepie.jpeg', name:'Apple Pie',
                     desc: 'Decadent Apple Pie', price: 2.50, catName:'Fruity'});
    Products.insert({thumb: 'blackberrysmoothie.jpeg', name:'Blackberry Smoothie',
                     desc: 'Luscious Blackberry Smoothie', price: 2.50, catName:'Fruity'});
    Products.insert({thumb: 'mod1.jpg', name:'Ego Twist',
                     desc: 'Ego Twist Mod', price: 22.50, catName:'Mods'});
  }
  if (Categories.find().count() === 0) {
    var hwid = Categories.insert({name: 'HARDWARE'});
    var juid = Categories.insert({name: 'JUICE'});
    SubCategories.insert({name: 'Mods', catId: hwid});
    SubCategories.insert({name: 'Fruity', catId: juid});
    SubCategories.insert({name: 'Sweet', catId: juid});
  }
});

