<template>
  <div class="items">
    <span class="chose" :class="{on:itemkey.state}" @click="chooseFn"></span>
    <div class="pic"><img :src="itemkey.image" alt=""></div>
    <div class="con">
        <h1><span class="bicname">{{itemkey.name}}</span><span class="del" @click="del(itemkey.id)">x</span></h1>
        <h2><span class="color">{{itemkey.color}}</span><span class="num">{{itemkey.size}}</span></h2>
        <h3>
            <span class="price">￥{{itemkey.price}}</span>
            <p>
                <span class="add" @click="countFn('+')">+</span>
                <span class="count">{{itemkey.num}}</span>
                <span class="reduce" @click="countFn('-')">-</span>
            </p>
        </h3>
    </div>
</div>
</template>
<script>
import {mapState,mapActions,mapMutations,mapGetters} from "vuex"
    export default {
        name: 'hello',
        props: ["itemkey", "fn"],
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        methods: {
            ...mapActions(["del"]),
            chooseFn() {
                this.itemkey.state = !this.itemkey.state;                  
                // this.$bus.$emit("amendPrice");
            },
            countFn(state) {
                if (state == "+") {
                    this.itemkey.num++
                } else {
                    if(this.itemkey.num>1){
                        this.itemkey.num--
                    }
                }
                //this.$bus.$emit("amendPrice")
            },
          
        },
        mounted(){
          // this.del(this.itemkey.id);
          // this.del(this.itemkey.id)
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>