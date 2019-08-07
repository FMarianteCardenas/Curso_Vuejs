<template>
  <div>
    <!-- con wrap en true hace que las columnas no se junten sino que se muestren en otra fila cuando el espacio es pequeño -->
    <v-layout :wrap="true">
    <v-flex xs12>

      <v-card>
          <v-date-picker 
          v-model="fecha"
          full-width
          locale="es-cl"
          color="red lighten-1"
          :landscape="$vuetify.breakpoint.smAndUp"
          :min="minimo"
          :max="maximo"
          first-day-of-week="1"
          @change="obtenerDolar">

          </v-date-picker>

      </v-card>
      <v-card color="error" dark>
        <v-card-text class="text-center">
          <h1>Valor Dólar: {{valor}} ({{fechaReversa}})</h1>
        </v-card-text>
      </v-card>

    </v-flex>
  </v-layout>
  </div>
</template>

<script>
import axios from 'axios'
import { mapMutations } from 'vuex';
export default {
  data(){
    return{
      minimo:'1984',
      valor:'',
      maximo:new Date().toISOString().substr(0,10),//fecha actual
      fecha:new Date().toISOString().substr(0,10),//fecha actual
    }
  },
  created(){
    this.obtenerDolar()
  },
  methods:{
     async obtenerDolar(){
      this.mostrarLoading('Obteniendo Resultados')
      await axios.get(`https://mindicador.cl/api/dolar/${this.fechaReversa}`).then((response)=>{
        console.log(response)
        this.valor = response.data.serie.length > 0 ? response.data.serie[0].valor:'Sin Resultados'
        this.ocultarLoading()
      }).catch((error)=>{
        console.log(error)
        this.ocultarLoading()
      })
    },

    ...mapMutations(['mostrarLoading','ocultarLoading'])
  },
  computed:{
    fechaReversa(){
      return this.fecha.split('-').reverse().join('-')
    }
  },
  components: {
    
  },
};
</script>
