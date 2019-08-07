<template>
 <div>
    <v-layout mt-5 wrap justify-space-between>
            <v-flex xs12 sm6 md3 lg3><v-card color="green" dark max-width="400" class="mx-auto text-center mt-2 mr-2"><v-card-text><h1>INGRESO EFECTIVO</h1><v-icon size="50">money</v-icon> <h1>$870.000</h1></v-card-text></v-card></v-flex>
            <v-flex xs12 sm6 md3 lg3><v-card color="red" dark max-width="400" class="mx-auto text-center mt-2 mr-2"><v-card-text><h1>INGRESO TARJETA</h1><v-icon size="50">credit_card</v-icon> <h1>$870.000</h1></v-card-text></v-card></v-flex>
            <v-flex xs12 sm6 md3 lg3><v-card color="warning" dark max-width="400" class="mx-auto text-center mt-2 mr-2"><v-card-text><h1>TOTAL INGRESOS</h1><v-icon size="50">attach_money</v-icon> <h1>$870.000</h1></v-card-text></v-card></v-flex>
            <v-flex xs12 sm6 md3 lg3><v-card color="info" dark max-width="400" class="mx-auto text-center mt-2 mr-2"><v-card-text><h1>TOTAL EN CAJA</h1><v-icon size="50">money</v-icon> <h1>$870.000</h1></v-card-text></v-card></v-flex>
    </v-layout>
    <v-layout>
        <v-card
    class="mx-auto text-center"
    color="green"
    dark
    max-width="600"
  >
    <v-card-text>
      <v-sheet color="rgba(0, 0, 0, .12)">
        <v-sparkline
          :value="value"
          color="rgba(255, 255, 255, .7)"
          height="100"
          padding="24"
          stroke-linecap="round"
          smooth
        >
          <template v-slot:label="item">
            ${{ item.value }}
          </template>
        </v-sparkline>
      </v-sheet>
    </v-card-text>

    <v-card-text>
      <div class="display-1 font-weight-thin">Sales Last 24h</div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-actions class="justify-center">
      <v-btn block text>Go to Report</v-btn>
    </v-card-actions>
  </v-card>
    </v-layout>
 </div>
    
</template>
<script>
  export default {
    data: () => ({
      value: [
        423,
        446,
        675,
        510,
        590,
        610,
        760,
      ],
    }),
  }
</script>
