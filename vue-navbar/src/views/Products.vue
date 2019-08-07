<template>
    <div>
        <h1>MIS PRODUCTOS</h1>
        <Table :list="products" :settings="settings"></Table>
    </div>
</template>
<script>
import Table from '@/components/shared/Table.vue'
import {mapState} from 'vuex'
import axios from 'axios'
export default {
    name:'Products',
    created(){
        this.getProducts()
    },
    data(){
        return{
            products:[],
            settings:{
                columns:[
                    {key:'name',header:'Producto',data_type:'text',path:'attributes.name'},
                    {key:'buy_price',header:'Precio Compra',data_type:'number',path:'attributes.buy_price'},
                    {key:'sale_price',header:'Precio Venta',data_type:'number',path:'attributes.sale_price'},
                    {key:'stock',header:'Unidades',data_type:'number',path:'attributes.stock'}
                ]
            }
        }
    },
    methods:{
        getProducts(){
            let url = `${this.base_url}minimarket/${this.minimarket.id}/all_products`;
            let headers = this.headers
            axios.get(url,{headers}).then((response)=>{
                console.log('productos',response),
                this.products = response.data.data
            }).catch((error)=>{
                console.log('error',error)
            })
        }
    },
    computed:{
        ...mapState(['minimarket','base_url','headers'])
    },
    components:{
        Table
    }
}
</script>

