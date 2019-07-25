const app = new Vue({
    el:'#app',
    data:{
        titulo:'My App Ejercicios',
        ejercicios:[],
        ejercicio:''
    },
    methods:{
        agregarEjercicio(){
            this.ejercicios.push({
                nombre:this.ejercicio,
                terminado:false
            });
            this.limpiar();
        },
        limpiar(){
            this.ejercicio='';
        },
        quitarEjercicio(index){
            this.ejercicios.splice(index,1);
        },
        marcarTerminado(index){
            this.ejercicios[index].terminado=true;
        }
    },
    computed:{
        sortedArray(){
            return this.ejercicios.sort((a, b) => a.terminado - b.terminado );
        }
    }
})