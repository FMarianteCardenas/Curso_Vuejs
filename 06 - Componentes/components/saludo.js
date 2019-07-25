Vue.component('saludo',{
    template:`<div>
                <h3>Saludo de forma Estática {{nombre}}</h3>
                <h4>Excelente :')</h4>
            </div>`
    ,
    data(){
        return{
            nombre:'Fermin :^V'
        }
    }
});
