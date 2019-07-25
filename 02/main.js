const app = new Vue({
    el:'#app',
    data:{
        titulo:'Clase 2',
        fondo:'bg-success',
        color:false
    },
    methods:{
        cambiarClase(){
            this.color = !this.color;
        }
    }
})