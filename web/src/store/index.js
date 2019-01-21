import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    count:0,
    userInformation:'',
    personal: '1',
  },
  mutations:{
    increment:state => state.count ++,
    decrement:state => state.count --,
    changeName(state){
      state.userInformation = sessionStorage.getItem('userInformation');
    },
    changePersonal(state, index){
      state.personal = index;
    }
  }
})