Vue.component('padre',{
    template:
    `<div class="p-5 bg-dark text-white">
        <h2>Componente Padre {{numeroPadre}}
        <button @click="numeroPadre++" class="btn btn-primary btn-sm">+</button>
        </h2>
        <h5>{{nombrePadre}}</h5>
        <hijo :numero="numeroPadre" @nombreHijo="nombrePadre = $event"></hijo>
    </div>`
    ,
    data(){
        return{
            numeroPadre:0,
            nombrePadre:''
        }
    }
});