<template>
    <div>
        <h1>MIS PRODUCTOS</h1>
        <Table :list="products" :settings="settings" :settings2="settings2" v-on:filter="filter($event)"></Table>
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
                    {key:'name',header:'Producto',data_type:'text',visible:true,path:'attributes.name',filter:{visible:true,type:'text',sort:true,order:'ASC'}},
                    {key:'buy_price',header:'Precio Compra',data_type:'number',visible:true,path:'attributes.buy_price',filter:{visible:true,type:'number',sort:true,order:'ASC'}},
                    {key:'sale_price',header:'Precio Venta',data_type:'number',visible:true,path:'attributes.sale_price',filter:{visible:true,type:'number',sort:true,order:'ASC'}},
                    {key:'stock',header:'Unidades',data_type:'number',visible:true,path:'attributes.stock',filter:{visible:true,type:'number',sort:true,order:'ASC'}}
                ],
                actions:[
                    {key:'edit',enabled:true,header:'Editar'},
                    {key:'disabled',enabled:true,header:'Inhabilitar'}
                ]
            },

            settings2:{
                columns:[
                    {key: 1,header:'Header 1',colspan:3,sticky:true, sub_columns:[
                                                                {key:'col1',header:'Columna 1',visible:true,sticky:true,fixed:1,column_key:1,hideable:false},
                                                                {key:'col2',header:'Columna 2',visible:true,sticky:true,fixed:2,column_key:1,hideable:false},
                                                                {key:'col3',header:'Columna 3',visible:true,sticky:true,fixed:3,column_key:1,hideable:false}
                                                            ]
                    },
                    {key: 2,header:'Header 2',colspan:3, sub_columns:[
                                                                {key:'col4',header:'Columna 4',visible:true,column_key:2,hideable:true},
                                                                {key:'col5',header:'Columna 5',visible:true,column_key:2,hideable:true},
                                                                {key:'col6',header:'Columna 6',visible:true,column_key:2,hideable:true}
                                                            ]
                    },
                    {key: 3,header:'Header 3',colspan:3, sub_columns:[
                                                                {key:'col7',header:'Columna 7',visible:true,column_key:3,hideable:true},
                                                                {key:'col8',header:'Columna 8',visible:true,column_key:3,hideable:true},
                                                                {key:'col9',header:'Columna 9',visible:true,column_key:3,hideable:true}
                                                            ]
                    },
                    {key: 4,header:'Header 4',colspan:3, sub_columns:[
                                                                {key:'col10',header:'Columna 10',visible:true,column_key:4,hideable:true},
                                                                {key:'col11',header:'Columna 11',visible:true,column_key:4,hideable:true},
                                                                {key:'col12',header:'Columna 12',visible:true,column_key:4,hideable:true}
                                                            ]
                    },
                    {key: 5,header:'Header 5',colspan:3, sub_columns:[
                                                                {key:'col13',header:'Columna 13',visible:true,column_key:5,hideable:true},
                                                                {key:'col14',header:'Columna 14',visible:true,column_key:5,hideable:true},
                                                                {key:'col15',header:'Columna 15',visible:true,column_key:5,hideable:true}
                                                            ]
                    }
                ],
                actions :[
                        {key:'detail',visible:true,header:'Detalle'},
                        {key:'edit',visible:true,header:'Editar'},
                        {key:'delete',visible:true,header:'Eliminar'}
                ]
            }
        }
    },
    methods:{
        getProducts(){
            let url = `${this.base_url}minimarket/${this.minimarket.id}/all_products`;
            let headers = this.headers
            axios.get(url,{headers}).then((response)=>{
                console.log('productos',response.data),
                this.products = response.data.data
            }).catch((error)=>{
                console.log('error',error)
            })
        },

        filter(filters){
            console.log('filtros recibidos',filters)
            let url = `${this.base_url}minimarket/${this.minimarket.id}/all_products?${filters}`
            let headers = this.headers
            axios.get(url,{headers}).then((response)=>{
                console.log('productos filtrados',response.data),
                this.products = response.data.data
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

