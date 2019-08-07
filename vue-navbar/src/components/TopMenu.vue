<template>
    <!-- menu principal -->
        <v-app-bar app class="warning">
        <v-toolbar-title class="headline text-uppercase">
            <v-app-bar-nav-icon @click.stop="showOrHide"></v-app-bar-nav-icon>
            <span>MINIMARKET</span>
            <span class="font-weight-light">APP</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-btn class="ma-2" color="red" dark @click="removeSession">Salir</v-btn> -->
        </v-app-bar>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    name:'TopMenu',
    methods:{
        ...mapMutations(['showOrHide'])
    }
}
</script>

