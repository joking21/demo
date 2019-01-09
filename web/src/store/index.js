import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:0,
    token:'',
    personal: '1',
  },
  mutations:{
    increment:state => state.count ++,
    decrement:state => state.count --,
    changeName(state){
      state.token = sessionStorage.getItem('token');
    },
    changePersonal(state, index){
      console.log(index);
      state.personal = index;
    }
  }
})