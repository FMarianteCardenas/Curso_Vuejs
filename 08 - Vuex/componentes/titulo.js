Vue.component('titulo',{
    template:
    `<div class="bg-dark text-white p-3">
    <h4>Numero {{numero}}</h4>
    <hijo></hijo>
    </div>`
    ,
    computed:{
        ...Vuex.mapState([
            'numero'
        ])
    }
});