(function(){
    var app = angular.module('store', [ ]);

    app.controller('StoreController', function(){
        this.products = gems;

        // TODO: reload image source
    });

    app.controller('PanelController', function(){
        this.tab = 1;

        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
    });

    var gems = [
        {
            name: 'Product',
            price: 2,
            date: '1227201312501',
            description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.',
            specifications: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.',
            reviews: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                  full: 'http://flickholdr.iwerk.org/400/400',
                  thumb: 'http://flickholdr.iwerk.org/200/200'
                },
                {
                  full: 'http://flickholdr.iwerk.org/400/400',
                  thumb: 'http://flickholdr.iwerk.org/200/200'
                }
            ]
        },
        {
            name: 'Product',
            price: 2.95,
            date: '1227201312501',
            description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.',
            specifications: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.',
            reviews: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec ullamcorper nulla non metus auctor fringilla.',
            canPurchase: true,
            soldOut: false,
            images: [
                {
                    full: 'http://flickholdr.iwerk.org/400/400',
                    thumb: 'http://flickholdr.iwerk.org/200/200'
                },
                {
                    full: 'http://flickholdr.iwerk.org/400/400',
                    thumb: 'http://flickholdr.iwerk.org/200/200'
                }
            ]
        }
    ];

})();


