<template>
    <div>
        <h1>Galería de Fotos </h1>

        <router-link v-for="(item,index) in fotos" :to="{name:'fotos',params:{id:item}}" :key="index">
            <button>foto {{item}}</button>
        </router-link>
        <Fotografia></Fotografia>

        <button @click="home">Home</button>
        <button @click="anterior">Anterior</button>
        <button @click="siguiente">Siguiente</button>

    </div>
</template>
<script>
import Fotografia from '@/components/Fotografia.vue'
export default {
    components:{
        Fotografia
    },
    data(){
        return{
            fotos:[1,2,3]
        }
    },
    methods:{
        home(){
            /**redirecciona a alguna ruta predefinida */
            this.$router.push('/')
        },
        anterior(){
            /**retrocede una ruta anterior del historial */
            this.$router.go(-1)
        },
        siguiente(){
            /**avanza una ruta siguiente del historial */
            this.$router.go(1)
        }
    }
}
</script>