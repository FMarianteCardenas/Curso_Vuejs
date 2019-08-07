<template>
    <v-container class="mt-5">
        <v-layout mt-3>
            <v-flex>
                <!-- hacer un boton -->
                <v-btn>texto</v-btn>

                
                




                
            </v-flex>
            <v-flex>
                <v-btn color="primary">texto</v-btn>
            </v-flex>
            <v-flex>
                <!-- para colocar el texto en blanco usar dark -->
                <v-btn dark color="blue">texto</v-btn>
            </v-flex>
            <v-flex>
                <v-btn color="warning" flat>Sin fondo</v-btn>
            </v-flex>
            <v-flex>
                <v-btn color="warning" large>Largo</v-btn>
            </v-flex>
            <v-flex>
                <v-btn color="warning" small>Pequeño</v-btn>
            </v-flex>
            <v-flex>
                <v-btn color="warning" large :disabled="true">Largo Desactivado</v-btn>
            </v-flex>

            
        </v-layout>

        <v-layout mt-3>
            <v-flex>
                <v-btn color="info" depressed>Sin sombra</v-btn>
            </v-flex>
            <v-flex>
                <v-btn class="dark"  dark>
                 <v-icon>backup</v-icon>
                </v-btn>

                <v-btn icon class="dark">
                 <v-icon>backup</v-icon>
                </v-btn>

                <v-btn fab class="primary">
                 <v-icon>backup</v-icon>
                </v-btn>

                <v-btn fab class="primary" small>
                 <v-icon>backup</v-icon>
                </v-btn>

                <v-btn fab class="primary" large>
                 <v-icon>backup</v-icon>
                </v-btn>

                <v-btn class="primary">
                    Subir
                 <v-icon>backup</v-icon>
                </v-btn>

                <v-btn class="primary">
                    Subir
                 <v-icon class="ml-2">backup</v-icon>
                </v-btn>

                <v-btn class="primary">
                    Subir
                 <v-icon right class="ml-2">backup</v-icon>
                </v-btn>

                <v-btn class="primary">
                 <v-icon left class="ml-2">backup</v-icon>
                    Subir
                </v-btn>

                <v-btn color="success" outlined block>
                 <v-icon left class="ml-2">backup</v-icon>
                    Subir
                </v-btn>
            </v-flex>
        </v-layout>

        <v-layout>
            <v-btn class="ma-2" color="dark" rounded>
                Escuchar
                <v-icon right>headset</v-icon>
            </v-btn>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    data(){
        return{

        }
    }
}
</script>
