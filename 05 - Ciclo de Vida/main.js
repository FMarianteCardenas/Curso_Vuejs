const app = new Vue({
    el:'#app',
    data:{
        titulo: 'Ciclo de Vida de Vue'
    },
    beforeCreate(){
        console.log('beforeCreated');
    },
    created(){
        //Al crear los métodos, observadores y eventos, pero aún no accede al DOM.
        //Aún no se puede acceder a 'el' que es donde se renderiza Vue
        console.log('created');
    },
    beforeMount(){
        //se ejecuta antes de insertar información el DOM
        console.log('beforeMount');
    },
    mounted(){
        //se ejecuta al insertar el DOM
        console.log('mounted');
    },
    beforeUpdate(){
        //Al detectar un cambio
        console.log('beforeUpdate');
    },
    updated(){
        //Al realizar los cambios
        console.log('updated');
    },
    beforeDestroy(){
        //Antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed(){
        //Se destruye toda la instancia :(
            console.log('destroyed');
    },
    methods:{
        destruir(){
            console.log('destruyendo');
            this.$destroy();
        }
    }
})