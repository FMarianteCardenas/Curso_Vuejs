<template>
  <v-app>
      <v-content>
        <v-container>
          <router-view/>
          <Loading v-if="loading.state"></Loading>
        </v-container>
      </v-content>   
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
import Navbar from '@/components/Navbar.vue'
import Loading from '@/components/Loading.vue'
export default {
  name: 'App',
  data: () => ({
    //
  }),
  computed:{
    ...mapState(['loading'])
  },
  components:{
    Navbar,
    Loading
  }
};
</script>
