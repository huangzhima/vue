<template>
 <div class="container">
    <header>
        <span class="back"><</span>
        <span class="name">购物车</span>
        <span></span>
    </header>
    <div class="login">
        <p>您还没有登录！登录后的购物车的商品将保存至您的账号中</p><button>登录</button>
    </div>
    <main>
        <item v-for="i in data" :itemkey="i" :fn="allPriceFn()" key></item>
    </main>
    <div class="cho">
        <h1><span class="all" :class="{allon:allControl}" @click="allChooseFn"></span><span>全选</span></h1>
        <h2><span class="total">合计：<span class="money">￥{{allPrice}}</span></span><span></span><span>(不含运费)</span></h2>
        <h3 class="buy">结算({{allConte}})</h3>
    </div>
    <footer>
        <ul>
            <li>
                <span class="iconfont icon-home foot"></span>
                <p>首页</p>
            </li>
            <li>
                <span class="iconfont icon-xinfeng foot"></span>
                <p>分类</p>
            </li>

            <li>
                <span class="iconfont icon-search1 foot"></span>
                <p>购物车</p>
            </li>
            <li>
                <span class="iconfont icon-iconwode foot"></span>
                <p>我的</p>
            </li>
        </ul>
    </footer>
</div>
</template>

<script>
    import items from "./item.vue"
    import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
    export default {
        name: 'hello',
        data() {
            return {
              
                // allPrice: 0,
                // allConte: 0,
                 
            }
        },
        components: {
            item: items
        },
        computed: mapState({
            data(state){
                return state.data;
            },
            allControl(state){
               return state.allControl
            },
            allPrice(state) {
                var allprice = 0
                state.data.forEach(function(i) {
                    if (i.state) {
                        allprice += i.price * i.num
                    }
                });
                return allprice;
            },
            allConte(state) {
                var allconte = 0
                state.data.forEach(function(i) {
                    if (i.state) {
                        allconte += i.num
                    }
                });
                return allconte
            },
            // allChoose(state) {
            //     state.allControl = !state.allControl
            //     state.data.forEach(function(i) {
            //         i.state = state.allControl
            //     });
            //     this.allPrice(state);
            // }
        }),
        methods: {
        
            ...mapActions(["renderFn","allPriceFn","allChooseFn"])
        },
        // created(){
        // this.renderFn(this);
        // },
        mounted() {
            this.allPriceFn();
            this.renderFn(this);
            this.allChooseFn();
         
            // this.allPrice()
            // console.log(this)
            // var _this = this
            // this.$bus.$on("amendPrice", function() {
            //     _this.allPriceFn();
            // })
            // this.$bus.$on("del", function(id) {
            //     var arr = []
            //     _this.list.forEach(function(i, index) {
            //         if (id != i.id) {
            //             arr.push(i)
            //         }
            //     });
            //     _this.list = arr
            //     _this.allPriceFn()
            // })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.allon{
    background:orange;
}
</style>