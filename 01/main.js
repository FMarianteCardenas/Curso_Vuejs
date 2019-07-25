const app = new Vue({
    el:'#app',
    data:{
        titulo:'Hola Mundo con Vue',
        frutas:[
            {nombre:'Pera',cantidad:10},
            {nombre:'Manzana',cantidad:0},
            {nombre:'Platano',cantidad:18}
        ],
        nuevaFruta:'',
        cantidad:0
    },
    methods:{
        agregarFruta(){
            this.frutas.push({
                nombre:this.nuevaFruta,
                cantidad:this.cantidad
            });
            this.limpiarCampos();
        },

        limpiarCampos(){
            this.nuevaFruta ='';
            this.cantidad = 0;
        }
    },
    computed:{
        /*las propiedades computadas se ejecutan cada vez que se detecta un cambio en la propiedad que en este
        caso es el array de frutas */
        total(){
            sum=0;
            this.frutas.forEach(element => {
                if(element.cantidad!=''){
                    sum+=element.cantidad;
                }
            });
            return sum;
        }
    }
});