<template>
  <v-container fluid>
    <v-layout wrap>
      <v-flex class="primary" xs12>
        <h1>12</h1>
      </v-flex>
      <v-flex class="brown darken-4" xs12 md6>
        <h1>6</h1>
      </v-flex>
      <v-flex class="amber darken-1" xs12 md6>
        <h1>3</h1>
      </v-flex>
    </v-layout>
    <v-layout class="mt-5 secondary justify-center align-center" wrap style="height:300px">
      <v-flex class="info" xs3>
        <h1>centrado</h1>
      </v-flex>
      <v-flex class="warning" xs3>
        <h1>centrado</h1>
      </v-flex>
    </v-layout>

    <v-layout>
      <v-flex>
        <h1 class="display-1">Lorem, ipsum dolor.</h1>
        <h1 class="display-2 text-center primary pa-5 mt-5">Lorem, ipsum dolor.</h1>
        <h1 class="display-3">Lorem, ipsum dolor.</h1>
        <h1 class="display-4">Lorem, ipsum dolor.</h1>

      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>


export default {
  components: {
  },
};
</script>
