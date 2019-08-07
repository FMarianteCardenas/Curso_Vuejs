<template>
    <div>
        <!-- menu principal -->
        <v-app-bar app class="warning">
        <v-toolbar-title class="headline text-uppercase">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
            <span>MINIMARKET</span>
            <span class="font-weight-light">APPI</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- <v-btn class="ma-2" color="red" dark @click="removeSession">Salir</v-btn> -->
        </v-app-bar>
        <!-- <TopMenu></TopMenu> -->

        <!-- barra lateral -->
        <v-navigation-drawer app v-model="drawer">

        <v-layout mt-4 align-center column>
            <v-flex>
            <v-avatar>
                <img src="https://randomuser.me/api/portraits/men/78.jpg" alt="">
            </v-avatar>
            </v-flex>
            <v-flex>
            <p class="headline">{{user.name}} {{user.lastname}}</p>
            </v-flex>
        </v-layout>

        <v-divider></v-divider>

        <v-list dense>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          @click="navigate(item.route)"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
        <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="red" dark @click="removeSession">Salir</v-btn>
        </div>
      </template>
        </v-navigation-drawer>
    </div>
</template>
<script>
import {mapMutations,mapState} from 'vuex'
import TopMenu from '@/components/TopMenu.vue'
export default {
    data: () => ({
        drawer:false,
        items:[
            {title:'Dashboard',icon:'dashboard',route:'dashboard'},
            {title:'Productos',icon:'store',route:'products'},
            {title:'Caja',icon:'attach_money',route:'sales'}
        ]
    }),
    methods:{
        ...mapMutations(['removeSession']),

        navigate(route){
            this.$router.push({name:route})
        }
    },
    computed:{
        ...mapState(['user'])
    },
    components:{
        TopMenu
    }
}
</script>
