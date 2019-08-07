<template>
    <div>
        <!-- menu principal -->
        <v-app-bar app class="red" dark>
        <v-toolbar-title class="headline text-uppercase">
            <span>MINIMARKET</span>
            <span class="font-weight-light">APP</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn class="ma-2" color="success" @click="goLogin">ingreso</v-btn>
        </v-app-bar>
    </div>
</template>
<script>
export default {
    methods:{
        goLogin(){
            this.$router.push('/login')
        }
    }
}
</script>

