// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueBus from "vue-bus"
import Vuex from "vuex"
Vue.config.productionTip = false

Vue.use(Vuex);
Vue.use(VueBus);


var store = new Vuex.Store({
	state:{
       data:[],
       allPrice:0,
       allConte:0,
       allControl: true
	},
	mutations:{
       stateData(state,data){
         state.data=data;
       },
       
	},
	getters:{
       
	},
	actions:{
         renderFn({state,commit},_this){
            return new Promise(function(resolve){
               _this.axios.get("/main").then(function(data){
                 commit('stateData',data.data.data);
                 resolve("ok!")
               })
            })
         },
         actions[MOTATIOBS.FN1]
         allPriceFn({state}) {
                var allprice = 0
                var allconte = 0
               
                state.data.forEach(function(i) {
                    if (i.state) {
                        allprice += i.price * i.num
                        allconte += i.num
                    }
                });
                state.allPrice = allprice;
                state.allConte = allconte;           
        },  
        allChooseFn({dispatch,commit,state,getter},_this){
          // console.log(state.data)
        	state.allControl = !state.allControl;

            state.data.forEach(function(i){
                  i.state = state.allControl
            });

        },
        del({dispatch,commit,state,getter},id){
          var arr=[];

            state.data.forEach(function(i,ind){
                 if(i.id!=id){
                  // state.data.slice(ind,ind+1);
                  arr.push(i);
                 }
            });
           state.data=arr;
           //allPriceFn();
        }
      
	}
})
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})