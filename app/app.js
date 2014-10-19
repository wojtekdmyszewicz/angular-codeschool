(function(){
    var app = angular.module('store', [ ]);

    app.controller('StoreController', function(){
        this.products = gems;
    });

    var gems = [
        {
            name: 'Product',
            price: 2.95,
            description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.',
            canPurchase: true,
            soldOut: false
        },
        {
            name: 'Product',
            price: 2.95,
            description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.',
            canPurchase: true,
            soldOut: false
        }
    ];

})();


