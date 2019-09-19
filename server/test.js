var models = require('./server.js').models;

/*
var toSave = [
  {name: 'Dommy', email: 'domisemak@gmail.com'},
  {name: 'Dommy', email: 'gmail@gmail.com'},
  {name: 'Dommy2', email: 'gim@gmail.com'},
  {name: 'gimmy', email: 'gimmy@gmail.com'},
  {name: 'Grace', email: 'grace@gmail.com'},
  {name: 'Gracy', email: 'gracy@gmail.com'},
  {name: 'Gracy2 ', email: 'gracy2@gmail.com'},
];

toSave.map(obj => {
  models.Profile.create(obj, (err, created)=>{
    console.log("Created?", created);
  });
});
*/


var filter = {
  where: {
    email: {like: 'gmail'},
  },
  order: 'id ASC',
  limit: 10,
  skip: 4,
  fields: {
    email: true
  }
};

models.Profile.destroyById('5d789fa1b7ef1f1502b736a2', (err, found)=>{
  console.log('Found?', err, found);
});
