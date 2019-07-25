Vue.component('hijo',{
    template:
    `<div class="bg-success">
    <button class="btn-sm btn btn-primary" @click="$store.commit('aumentar')">+</button>
    <button class="btn-sm btn btn-primary" @click="aumentar(2)">+ con mapMutation</button>
    <button class="btn-sm btn btn-primary" @click="disminuir(2)">- con mapMutation</button>


    <h6>Numero en hijo: {{$store.state.numero}}</h6>
    <h6> Numero en hijo con mapState {{numero}}</h6>
    <input type="number" class="form-control" v-model.number="numero_aumentar" @keyup.enter="aumentar(numero_aumentar)">
    <button class="btn btn-success btn-sm" @click="obtenerDatos">Obtener Datos</button>
    <ul v-if="datos !== []">
        <li v-for="item in datos">
        Codigo : {{item.code}} , Moneda: {{item.description}}, Valor: {{item.rate}}
        </li>
    </ul>
    </div>`
    ,
    data(){
        return {
            numero_aumentar:0
        }
    },
    methods:{
        ...Vuex.mapMutations(['aumentar','disminuir']),
        ...Vuex.mapActions(['obtenerDatos'])
    },
    computed:{
        ...Vuex.mapState([
            'numero','datos'
        ])
    }
});