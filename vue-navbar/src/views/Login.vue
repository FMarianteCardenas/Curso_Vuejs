<template>
    <div>
        <v-container mt-5>
            <v-card
                max-width="500"
                min-height="200"
                class="mx-auto"
            >
             <v-card-text>
<v-layout column align-center>
                


                <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                
                <v-text-field
                    v-model="credentials.email"
                    :rules="emailRules"
                    label="Email"
                    required
                    color="blue"
                    class="mb-2"
                ></v-text-field>

                <v-text-field
                v-model="credentials.password"
                    :rules="passwordRules"
                    label="Password"
                    required
                    color="blue"
                    class="mb-2"
                    type="password">
                    
                </v-text-field>

                <v-btn
                    color="error"
                    class="mr-4"
                    @click="reset"
                >
                    Limpiar
                </v-btn>

                <v-btn
                    :disabled="!valid"
                    color="success"
                    class="mr-4"
                    @click="openSession"
                >
                    Ingresar
                </v-btn>

                
                </v-form>
            </v-layout>
             </v-card-text>
            
            </v-card>
        </v-container>
        
        
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
    data:()=>({
        valid: false,
        lazy:false,
        credentials:{
            email:'',
            password:''
        },
        emailRules: [
            v => !!v || 'El Email es Obligatorio',
            v => /.+@.+\..+/.test(v) || 'Ingrese un Email Válido',
        ],
        passwordRules: [
            v => !!v || 'El Password es Obligatorio'
        ]
    }),
    methods:{
        openSession () {
            if (this.$refs.form.validate()) {
                console.log('enviar peticion')
                this.login(this.credentials)
            }
        },
        reset () {
            this.$refs.form.reset()
        },

        ...mapActions(['login'])
    }
}
</script>
