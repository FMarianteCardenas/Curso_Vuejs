const store = new Vuex.Store({
    state:{
        numero:0,
        datos:[],
        authenticated:false,
        token:'',
        user:{}
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
        },
        setearCredenciales(state,credenciales){
            state.authenticated = true;
            state.token = credenciales.access_token;
            state.user = credenciales.user;
        }
    },
    actions:{
        login({commit},credentials){
            console.log(credentials);
            axios.post('http://minimarketapi.test/users/login/api',{
                email:credentials.email,
                password:credentials.password
            }).then((response)=>{
                console.log('respuesta',response);
                commit('setearCredenciales',response.data);
            })
        },
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