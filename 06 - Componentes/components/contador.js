Vue.component('contador',{
    template://html
    `<div>
    <p>{{numero}}</p>
    <button class="btn btn-danger" @click="numero++">+</button>
    </div>`
    ,
    data(){
        return {
            numero:0
        }
    }
})