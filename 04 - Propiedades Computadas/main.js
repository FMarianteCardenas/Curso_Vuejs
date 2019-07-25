const app = new Vue({
    el:"#app",
    data:{
        titulo:'Propiedades Computadas',
        mensaje:'Dark Code Lord',
        porcentaje:0
    },
    methods:{
        aumentar(){
            this.porcentaje += 5;
        },
        disminuir(){
            this.porcentaje -= 5;
        }
    },
    computed:{
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-danger':this.porcentaje < 25,
                'bg-warning':this.porcentaje < 50,
                'bg-info':this.porcentaje < 75,
                'bg-success':this.porcentaje == 100
            }
        }
    }
})