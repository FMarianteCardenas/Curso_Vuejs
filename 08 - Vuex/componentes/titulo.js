Vue.component('titulo',{
    template:
    `<div class="bg-dark text-white p-3">
    <h1 v-if="authenticated">Usuario Actual : {{user.name}}</h1>
    <h4>Numero {{numero}}</h4>
    <hijo></hijo>
    <input type="text" class="form-control" v-model="credentials.email"></input>
    <input type="password" class="form-control" v-model="credentials.password"></input>
    <button class="btn btn-primary btn-sm" @click="login(credentials)">Ingresar</button>
    </div>`
    ,
    data(){
        return{
            credentials:{
                email:'',
                password:''
            }
        }
    },
    methods:{
        ...Vuex.mapActions(['login'])
    },
    computed:{
        ...Vuex.mapState(['numero','user','authenticated'])
    }
});