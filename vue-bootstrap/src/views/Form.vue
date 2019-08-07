<template>
    <div class="mt-5">
        <h1>Formularios</h1>
        <form action="">
            <b-row>
                <b-col md="3">
                    <!-- con la propiedad state (true o false) podemos mostrar si el valor cumple o no las reglas de validación-->
        <b-form-input type="number" v-model="number" :state="comprobarNumero"></b-form-input>
        <small v-if="!comprobarNumero">Solo Números Positivos</small>
        <b-form-input type="text" v-model="text" :state="comprobarTexto"></b-form-input>
        <small v-if="!comprobarTexto">Mínimo 3 Caracteres</small>
                </b-col>
                <b-col md="3">
                    <b-form-select v-model="selected" :options="options"></b-form-select>
                    <p>Selección:{{selected}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-radio-group v-model="radio" :options="animales"></b-form-radio-group>
                    <p>Radio:{{radio}}</p>
                </b-col>
                <b-col md="3">
                    <b-form-checkbox-group v-model="animalesCheck" :options="animales"></b-form-checkbox-group>
                    <p>Animales:{{animalesCheck}}</p>
                </b-col>
            </b-row>
        
        </form>
    </div>
</template>
<script>
export default {
    name:'Form',
    data(){
        return{
            text:'',
            number:0,
            selected:'',
            radio:'',
            animalesCheck:[],
            options: [
                        { value: null, text: 'Por Favor Seleccione una Opción' },
                        { value: 'a', text: 'Opcion A' },
                        { value: 'b', text: 'Opcion B' },
                        { value: { C: '3PO' }, text: 'Esta es una opcion con un objeto' },
                        { value: 'd', text: 'Esta opcion esta desactivada', disabled: true }
            ],

            animales:[
                {value:'perro',text:'Guau Guau'},
                {value:'gato',text:'Miau Miau'},
                {value:'pato',text:'Cuack Cuack'},
            ]
        }
    },
    computed:{
        comprobarNumero(){
            return this.number >= 0?true:false;
        },
        comprobarTexto(){
            return this.text.length > 2?true:false;
        }
    }
}
</script>