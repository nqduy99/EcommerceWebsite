var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping',{ useNewUrlParser: true ,  useUnifiedTopology: true , useCreateIndex: true,
useFindAndModify: false});

var products = [
    new Product({
        imagePath: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/69975455-2883412488395927-3165778016035542240-n-1601382935.jpg?crop=0.669xw:1.00xh;0.167xw,0&resize=640:*',
        title: 'Lisa',
        description:'Awesome',
        price: 10
}),
    new Product({
        imagePath: 'https://i.pinimg.com/originals/b0/44/c6/b044c6b203df06d78fc14de7df28f3fb.jpg',
        title: 'Jisoo',
        description:'Awesome',
        price: 20
    }),
    new Product({
        imagePath: 'https://tinnendoc.com/wp-content/uploads/2021/01/jennie-blackpink-bi-mia-mai-beo-tron-khong-biet-quan-ly-ban-than-chi-vi-mot-buc-anh-chua-qua-chinh-sua-30924.jpg',
        title: 'Jennie',
        description:'Awesome',
        price: 30
     }),
     new Product({
        imagePath: 'https://i.pinimg.com/236x/61/55/31/61553120fd17fbf82df684618eeeeb2a.jpg',
        title: 'Bâu Krysie',
        description:'Awesome',
        price: 40
     }),
     new Product({
        imagePath: 'https://i.mydramalist.com/2JEg7_5c.jpg',
        title: 'LoveRukk',
        description:'Awesome',
        price: 50
     }),
     new Product({
        imagePath: 'https://i.mydramalist.com/jbdQB_5f.jpg',
        title: 'Nana',
        description:'Awesome',
        price: 600
     })
];

var done = 0;
for(var i = 0; i < products.length; i++){
    products[i].save(function(err, result){
        done++;
        if(done === products.length){
            exit();
        }
    });
}

function exit(){
    mongoose.disconnect();
}
