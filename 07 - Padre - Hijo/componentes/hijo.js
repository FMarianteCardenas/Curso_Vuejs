Vue.component('hijo',{
    template:
    `<div class="p-5 bg-success">
    <h5>Componente Hijo</h5>
    <h6>Numero: {{numero}}</h6>
    <h6>Nombre: {{nombre}}</h6>
    <input class="form-control" type="text" v-model="nombre" @keyup="emitirCambio">
    </div>`
    ,
    props:[
        'numero'
    ],
    data(){
        return{
            nombre:'Bluuweb'
        }
    },
    mounted(){
        this.$emit('nombreHijo',this.nombre);
    },
    methods:{
        emitirCambio(){
            this.$emit('nombreHijo',this.nombre);
        }
    }
});