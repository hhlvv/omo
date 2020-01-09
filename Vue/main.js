var app = new Vue({
    el : "#app",
    data : {
        brand : "Vue Mastery",
        product : 'Socks',
        image : './img/flower.jpg',
        inStock : true,
        details : ["80% cotton", "20% polyster", "Gender-neutral"],
        variants : [
            {
                variantId:2234,
                variantColor : "green",
                variantImage : "./img/green.png"
            },
            {
                variantId : 2235,
                variantColor : "blue",
                variantImage : "./img/blue.png"
            }
        ],
        cart : 0
    },
    methods : {
        addToCart(){
            this.cart += 1
        },
        updateProduct(variantImage){
            this.image = variantImage
        }
    },
    computed : {
        title() {
            return this.brand + " " + this.product
        }
    }
});
