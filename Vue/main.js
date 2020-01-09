Vue.component('product',{
    props :{
        premium: {
            type : Boolean, 
            required : true
        }
    },
    template : `
    <div class="product">
            <div calss="product-image">
                <img v-bind:src="image">
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p>Shipping : {{ shipping }}</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div class = "color-box"
                    v-for = "(variant, index) in variants" 
                    :key="variant.variantId"
                    :style ="{backgroundColor : variant.variantColor}"
                    @mouseover ="updateProduct(index)">
                </div>

                <button v-on:click="addToCart" 
                        :disabled="!inStock"
                        :class="{disabledButton : !inStock}"
                >Add to Cart</button>
                <div class="cart">
                    <p>Cart({{cart}})</p>
                </div>

            </div>
        </div>
        `,
        data(){
            return {
                brand : "Vue Mastery",
                product : 'Socks',
                selectedVariant : 0,
                details : ["80% cotton", "20% polyster", "Gender-neutral"],
                variants : [
                    {
                        variantId:2234,
                        variantColor : "green",
                        variantImage : "./img/green.png",
                        variantQuantity : 10
                    },
                    {
                        variantId : 2235,
                        variantColor : "blue",
                        variantImage : "./img/blue.png",
                        variantQuantity : 0 
                    }
                ],
                cart : 0
            }
        },
        methods : {
            addToCart(){
                this.cart += 1
            },
            updateProduct(index){
                this.selectedVariant = index
                console.log(index)
            }
        },
        computed : {
            title() {
                return this.brand + " " + this.product
            },
            image(){
                return this.variants[this.selectedVariant].variantImage
            },
            inStock(){
                return this.variants[this.selectedVariant].variantQuantity
            },
            shipping(){
                if(this.premium){
                    console.log("this??")
                    return "Free"
                }else{
                    console.log(this.premium)
                    return 2.99
                }
            }
        }
})


var app = new Vue({
    el : "#app",
    data : { 
        premium : false
    }
    
});
