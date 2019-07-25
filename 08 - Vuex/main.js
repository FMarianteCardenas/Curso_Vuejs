const store = new Vuex.Store({
    state:{
        numero:0,
        datos:[]
    },
    mutations:{
        aumentar(state,n){
            state.numero += n;
        },
        disminuir(state,n){
            state.numero -= n;
        },
        llenarDatos(state,datos){
            state.datos = datos;
        }
    },
    actions:{
        obtenerDatos({commit}){
            axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (
                commit('llenarDatos',response.data.bpi)
            ));
        }
    }
});


const app = new Vue({
    el:'#app',
    store:store
}) 