import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from './router'

//plugin para persistir los datos de vuex
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      base_url:'http://minimarketapi.test/',
      user:null,
      minimarket:null,
      authenticated:false,
      headers:null,
      token:null,
      drawer:false,
  },
  mutations: {
    setSession(state,credenciales){
        //localStorage.removeItem("user")
        //localStorage.setItem("authenticated",true)
        //localStorage.setItem("user",JSON.stringify(credenciales.user))
        state.authenticated = true
        state.user = credenciales.user
        state.minimarket = credenciales.minimarket
        state.token = credenciales.access_token
        state.headers = {
          'content-type':'application/json;charset=utf-8',
          'Authorization':`Bearer ${state.token}`
        }
        router.push('/dashboard')
    },
    removeSession(state){
      console.log('llego aqui al remove')
      state.authenticated = false
      state.user = null
      state.token = null
      state.minimarket = null
      state.headers = null
      router.push('/login')
    },

    showOrHide(state){
      state.drawer = !state.drawer
      console.log('drawer',state.drawer)
    }
  },
  actions: {
      login({commit,state},credentials){
        console.log(credentials);
        axios.post(state.base_url+'users/login/api',{
            email:credentials.email,
            password:credentials.password
        }).then((response)=>{
            console.log('respuesta',response);
            commit('setSession',response.data);
        })
    }
  },
  plugins: [createPersistedState({
    paths: ['base_url','user','authenticated','token','headers','minimarket']
  })]
})
