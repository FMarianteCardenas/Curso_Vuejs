<template>
    <div>
        <v-layout justify-end mb-2>
            <v-flex xs3>
                <v-card
            max-width="344"
            class="mx-auto"
            justify-end
        >
            <v-card-text>
                <h3 class="text-center">Acciones</h3>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text>
                <v-btn class="mr-2" color="green darken-1" fab small dark @click="applyFilter"><v-icon>filter_list</v-icon></v-btn>
                <v-btn class="mr-2" color="orange darken-2" fab small dark @click="clearFilter"><v-icon>sync</v-icon></v-btn>
            </v-card-text>
        </v-card>
            </v-flex>
        </v-layout>

        <!-- ajustes de tabla -->
        <v-expansion-panels>
            <v-expansion-panel
            >
            <v-expansion-panel-header>
                <v-layout>
                    <v-icon>settings</v-icon>
                </v-layout>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-layout>
                <v-switch class="mr-2" v-for="column in settings.columns" :key="column.key" v-model="column.visible" :label="`${column.header}`"></v-switch>
                </v-layout>
                <span v-for="sub_column in getSubColumns" :key="sub_column.key">
                    <v-switch v-if="sub_column.hideable" @change="updateColspan(sub_column)" class="mr-2"  v-model="sub_column.visible" :label="`${sub_column.header}`"></v-switch>
                </span>
                
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <!-- ajustes de tabla -->

        <!-- tabla -->
        <v-card>
            <v-card-text>
                <v-simple-table>
            <thead>
            <tr>
                <th v-for="column in settings.columns" :key="column.key">
                    <v-layout align-content-space-between>
                        <span v-if="column.visible">
                            <v-flex>{{column.header}}</v-flex>
                            <v-flex class="text-right">
                                <v-btn text icon @click="updateSort(column)">
                                    <span v-if="column.filter.order == 'ASC'">
                                        <v-icon color="blue darken-4">keyboard_arrow_up</v-icon>
                                    </span>
                                    <span v-if="column.filter.order == 'DESC'">
                                        <v-icon color="red darken-4">keyboard_arrow_down</v-icon>
                                    </span>
                                </v-btn>
                            </v-flex>
                        </span>
                        
                    </v-layout>
                </th>
                <th v-for="action in settings.actions" :key="action.key">
                    {{action.header}}
                </th>
                
            </tr>
            <tr>
                <th v-for="column in settings.columns" :key="column.key">
                    <span v-if="column.filter.visible == true && column.visible">
                        <v-text-field type="text" color="blue darken-3" v-model="filters.values[column.key]"></v-text-field>
                    </span>
                </th>
                <th v-for="action in settings.actions" :key="action.key"></th>
            </tr>
            </thead>
            <tbody>
            <!-- por cada item en la lista -->
            <tr v-for="item in list" :key="item.id">
                <!-- por cada columna de las settings -->
                <td v-for="column in settings.columns" :key="column.key">
                    <span v-if="column.visible">
                        <span v-if="column.data_type == 'date'">{{getValue(item,column.path)}}</span>
                        <span v-if="column.data_type == 'text'">{{getValue(item,column.path)}}</span>
                        <span v-if="column.data_type == 'number'">{{getValue(item,column.path)}}</span>
                    </span>
                </td>

                <!-- acciones -->
                <td v-for="action in settings.actions" :key="action.key">
                    <span v-if="action.enabled == true">
                        <!-- editar -->
                        <v-btn v-if="action.key == 'edit'" color="blue darken-3" fab small dark><v-icon>edit</v-icon></v-btn>
                        <v-btn v-if="action.key == 'disabled'" color="red darken-4" fab small dark><v-icon>block</v-icon></v-btn>
                    </span>
                </td>
            </tr>
            </tbody>
        </v-simple-table>
            </v-card-text>
        </v-card>
        <!-- tabla -->


        <!--tabla 2-->
        <!-- <v-card class="mt-5">
            <v-card-text class="table-container">
                <div class="wrapper" id="tabla">
                    <table>
                            <thead>
                                <tr> -->
                                    <!-- columnas -->
                                    <!-- <th :class="[{ 'first-col':column.fixed,'sticky-col':column.sticky,'left-0':column.sticky }]" :colspan="column.colspan" v-for="column in settings2.columns" :key="column.key" class="text-center border">
                                        {{column.header}}
                                    </th> -->
                                    <!-- columnas --->
                                <!-- </tr>
                                <tr> -->
                                    <!-- subcolumnas -->
                                        <!-- <th v-bind:class="{ 'hidden': !sub_column.visible,'sticky-col':sub_column.sticky,'first-col':sub_column.fixed == 1,'second-col':sub_column.fixed == 2,'third-col':sub_column.fixed == 3}" v-for="sub_column in getSubColumns" :key="sub_column.key" class="text-center border">
                                            <span v-if="sub_column.visible">
                                                {{sub_column.header}}
                                            </span>
                                        </th> -->
                                    <!-- subcolumnas -->

                                    <!-- acciones -->
                                    <!-- <th class="text-center border" v-for="action in settings2.actions" :key="action.key">
                                        <span v-if="action.visible">
                                            {{action.header}}
                                        </span>
                                    </th> -->
                                    <!-- acciones -->

                                <!-- </tr>
                            </thead>

                            <tr v-for="item in array" :key="item.id">
                                <td v-bind:class="{'hidden': !sub_column.visible,'sticky-col':sub_column.sticky,'first-col':sub_column.fixed == 1,'second-col':sub_column.fixed == 2,'third-col':sub_column.fixed == 3}" class="text-center border" v-for="sub_column in getSubColumns" :key="sub_column.key">
                                    <span v-if="sub_column.visible">{{getValue(item,sub_column.key)}}</span>
                                </td>
                                <td class="text-center border" v-for="action in settings2.actions" :key="action.key">
                                    <v-btn v-if="action.key == 'detail'" color="green darken-3" fab small dark><v-icon>details</v-icon></v-btn>
                                    <v-btn v-if="action.key == 'edit'" color="blue darken-3" fab small dark><v-icon>edit</v-icon></v-btn>
                                    <v-btn v-if="action.key == 'delete'" color="red darken-3" fab small dark><v-icon>delete</v-icon></v-btn>
                                </td>
                            </tr>
                    </table>
                </div>
            </v-card-text>
        </v-card> -->
        <!--tabla 2-->

        <!-- ajustes de tabla 3 -->
        <v-expansion-panels class="mt-5">
            <v-expansion-panel
            >
            <v-expansion-panel-header>
                <v-layout>
                    <v-icon>settings</v-icon>
                </v-layout>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
                <v-layout row>
                    <v-flex v-for="sub_column in getSubColumns" :key="sub_column.key">
                            <v-switch v-if="sub_column.hideable" @change="updateColspan(sub_column)" class="mr-2"  v-model="sub_column.visible" :label="`${sub_column.header}`"></v-switch>
                    </v-flex>
                </v-layout>
            </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
        <!-- ajustes de tabla 3 -->


        <!-- tabla 3 -->

        <v-card>
            <v-card-text>
                <div class="table-box">
                    <table>
                        <thead>
                            <tr>
                                <!-- headers -->
                                <th :class="[{'hidden':column.colspan == 0}]" :colspan="column.colspan" v-for="column in settings2.columns" :key="column.key" class="text-center border header-1">
                                                    {{column.header}}
                                </th>
                                <!-- headers -->

                                <!-- header acciones -->
                                <th class="text-center border header-1 z-index-action-1" :colspan="settings2.actions.length">

                                </th>
                                <!-- header acciones -->

                            </tr>
                            <tr>
                                <!-- sub_columns -->
                                <th v-bind:class="{ 'hidden': !sub_column.visible,'z-index-1':sub_column.fixed == 1, 'z-index-2':sub_column.fixed == 2,'z-index-3':sub_column.fixed == 3}" v-for="sub_column in getSubColumns" :key="sub_column.key" class="text-center border header-2">
                                                <span v-if="sub_column.visible">
                                                    {{sub_column.header}}
                                                </span>
                                </th>
                                <!-- subcolumns -->

                                <!-- acciones -->
                                    <th class="text-center border header-2 z-index-action-2" v-for="action in settings2.actions" :key="action.key">
                                        <span v-if="action.visible">
                                            {{action.header}}
                                        </span>
                                    </th>
                                <!-- acciones -->
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="item in array" :key="item.id" :class="[{'tr-warning':item.id == 9}]">
                                <td :class="[{'row-red':sub_column.key == 'col6' && getValue(item,sub_column.key) < 0,'hidden': !sub_column.visible,'fixed-left-1':sub_column.fixed == 1,'fixed-left-2':sub_column.fixed == 2,'fixed-left-3':sub_column.fixed == 3}]" class="text-center border" v-for="sub_column in getSubColumns" :key="sub_column.key">
                                    
                                    <span v-if="sub_column.visible">
                                        <span v-if="sub_column.type == 'value'">{{getValue(item,sub_column.key)}}</span>
                                        <span v-if="sub_column.type == 'input_number'">
                                            <!-- <v-text-field
                                                label=""
                                                outlined
                                                v-model="item[sub_column.key]"
                                                color="light-blue darken-4"
                                            ></v-text-field> -->
                                            <input type="text" v-model="item[sub_column.key]">
                                        </span>
                                    </span>
                                </td>
                                <td class="text-center border" v-for="action in settings2.actions" :key="action.key">
                                    <span  v-if="action.key == 'detail'">
                                        <v-btn v-if="action.key == 'detail'" color="green darken-3" fab small dark><v-icon>details</v-icon></v-btn>
                                    </span>
                                    <!-- <v-btn v-if="action.key == 'detail'" color="green darken-3" fab small dark><v-icon>details</v-icon></v-btn> -->
                                    <v-btn v-if="action.key == 'edit'" color="blue darken-3" fab small dark><v-icon>edit</v-icon></v-btn>
                                    <v-btn v-if="action.key == 'delete'" color="red darken-3" fab small dark><v-icon>delete</v-icon></v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </v-card-text>
        </v-card>
        <!-- tabla 3 -->

    </div>
</template>
<script>
const get_array = require('@/components/shared/array.json')
const $ = require('jquery');
window.$ = $;
export default {
    name:'Table',
    props:['settings','list','settings2'],
    data(){
        return{
            filters:{
                values:{},
                sort:{}
            },
            array:get_array
        }
    },
    created(){
        console.log('datos recibidos',this.list)
        //agregando un sort y valor por cada columna
        this.settings.columns.forEach(column => {
            if(column.filter.visible){
                this.filters.values[column.key] = null
            }
            if(column.filter.sort){
                this.filters.sort[column.key] = column.filter.order
            }
        })
        console.log(this.array);
        console.log('filtros inicializados',this.filters)

        

        console.log('settings 2',this.settings2);
    },
    mounted(){
        var lastScrollLeft = 0;
        $(window).scroll(function() {
        var documentScrollLeft = $('#tabla').scrollLeft();
        console.log(documentScrollLeft);
        if (lastScrollLeft != documentScrollLeft) {
            console.log('scroll x');
            lastScrollLeft = documentScrollLeft;
        }
    });
    },
    methods:{
        //recibe el item actual y el path de la columna donde se encuentra el valor a obtener
        getValue(item,path){
            //console.log(item,path)
            let value = item
            let stack = path.split('.')
            let history = []
            let peek

            while (value[stack[0]]) {
                if (peek) {
                    history.push(peek);
                }
                peek = stack.shift();
                value = value[peek];
            }

            if (stack.length > 0) {
                history.push(peek);
                value = "";
            }

            return value;
        },

        applyFilter(){
            //console.log('filtros',this.filters)
            let sort = this.applySort()
            let values = this.applyValues()
            let filter = `${sort}${values}`
            console.log('filtro aplicado',filter)
            this.$emit('filter',filter)
            //this.list = []
        },

        applySort(){
            let sort = 'sort='
            let coma = ','
            let length = this.settings.columns.length
            let num = 0
            this.settings.columns.forEach(column=>{
                num++
                if(num == length){
                    coma = ''
                }
                if(column.filter.sort == true){
                    if(this.filters.sort[column.key] == 'ASC'){
                        sort+=`++${column.key}${coma}`
                    }
                    else{
                        sort+=`-${column.key}${coma}`
                    }
                }
            })

            return sort
        },

        applyValues(){
            let values = ''
            let and = '&'
            let coma = ','
            let length = this.settings.columns.length
            let num = 0
            this.settings.columns.forEach(column=>{
                num++
                if(num == length){
                    coma = ''
                }
                if(column.filter.visible == true){
                    if(this.filters.values[column.key]!=null){
                            if(column.filter.type == 'text'){
                                values+=`${and}${column.key}=><${this.filters.values[column.key]}`
                            }else if(column.filter.type == 'number'){
                                values+=`${and}${column.key}=${this.filters.values[column.key]}`
                            }
                    }
                }
            })

            return values
        },

        updateSort(column){
            console.log('columna_key',column)
            if(column.filter.order==='ASC'){
                column.filter.order = 'DESC'
                this.filters.sort[column.key]='DESC'
            }
            else{
                column.filter.order = 'ASC'
                this.filters.sort[column.key]='ASC'
            }
            let sort = this.applysortColumn(column)
            let values = this.applyValues()
            let filter = `${sort}${values}`
            console.log('filtro aplicado',filter)
            this.$emit('filter',filter)
        },

        applysortColumn(column_apply){
            let sort = ''
            let coma = ','
            let length = this.settings.columns.length
            let num = 0
            this.settings.columns.forEach(column=>{
                num++
                if(num == length){
                    coma = ''
                }
                if(column.filter.sort == true){

                    if(column.key != column_apply.key){
                        if(this.filters.sort[column.key] == 'ASC'){
                            sort+=`++${column.key}${coma}`
                        }
                        else{
                            sort+=`-${column.key}${coma}`
                        }
                    }
                }
            })
            let column = '';
            if(this.filters.sort[column_apply.key] == 'ASC'){
                    column=`++${column_apply.key},`
            }
            else{
                    column=`-${column_apply.key},`
            }

            let final = `sort=${column}${sort}`
            console.log('columna sort',final)
            return final
        },

        clearFilter(){
            this.filter = {
                                values:{},
                                sort:{}
                          }
        },

        updateColspan(sub_menu){
            console.log('submenu',sub_menu.visible);
            this.settings2.columns.forEach((column)=>{
                if(column.key == sub_menu.column_key){
                    if(sub_menu.visible){
                        column.colspan +=1;
                    }else{
                        column.colspan-=1;
                    }
                }
            })
        }
    },
    computed:{
        getSubColumns(){
            let sub_columns = []
            this.settings2.columns.forEach(column => {
                column.sub_columns.forEach(sub=>{
                    sub_columns.push(sub)
                })
            });
            return sub_columns;
        }
    }
}
</script>
<style scoped>
.border{
    border: 1px solid #333;
    border-collapse: collapse;
}
.hidden{
    display: none;
}

/*estilos de tabla*/
/* .table-container {
  margin: auto;
  width: 100%;
  max-height: 500px;
}
.wrapper {
  position: relative;
  overflow: auto;
  border: 1px solid black;
  white-space: nowrap;
  max-height: 300px;
}

.sticky-col {
  position: sticky;
  position: -webkit-sticky;    
  background: rgb(255, 193, 7);;
  color: #333;
  border: 1px solid rgb(212, 111, 9);

}
.first-col {
  width: 120px;
  min-width: 120px;
  max-width: 120px;
  left: 0px;
  /* border: 1px solid #333; */
/* }

.second-col {
  width: 120px;
  min-width: 120px;
  max-width: 120px;
  left: 120px; */
  /* border: 1px solid #333; */
/* } */
/* 
.third-col {
    width:120px;
    min-width: 120px;
    max-width: 120px;
    left: 240px; */
    /* border: 1px solid #333; */
/* }

.left-0{
    left:0px;
}

table{
    border-spacing: 0px;
}
th{
    padding: 10px;
}
td{
    padding: 10px;
}

thead th{
        top: 0px;
} */ 
/* estilos de tabla */
.table-box{
    width: 100%;
    height: 700px;
    overflow: auto;
    /*box-shadow: 0 10px 100px rgba(0,0,0,0.5);*/
}
table{
    border-spacing: 0px;
}
th{
    padding: 5px 10px;
    min-width: 100px;
    max-width: 100px; 
}
td{
    padding:5px 10px;
}

/*segunda fila de header*/
.z-index-1{
    left: 0px;
    z-index: 4;
}
.z-index-2{
    left: 100px;
    z-index: 4;
}
.z-index-3{
    left: 200px;
    z-index: 4;
}
/*segunda fila de header*/

.z-index-action-1{
    z-index:1; 
    top: 0px;
}

.z-index-action-2{
    z-index:1; 
    top: 34px;
}

thead th:first-child {
    left: 0;
    z-index: 4;
}

thead th.header-2{
    position: -webkit-sticky; /* for Safari */
    position: sticky;
    padding: 5px 10px;
    background-color: #ffc107;
    color: #fff;
    top: 34px;
}

thead th.header-1{
    position: -webkit-sticky; /* for Safari */
    position: sticky;
    padding: 5px 10px;
    background-color: #ffc107;
    color: #fff;
    top: 0px;
}

/*td columna 1, columna2, columna3*/
.fixed-left-1{
      left:0px;
      position: -webkit-sticky; /*for safary*/
      position:sticky;
      background-color: #FB8C00;
      color: #fff;
      z-index: 3;
}
.fixed-left-2{
      left:100px;
      position: -webkit-sticky; /*for safary*/
      position:sticky;
      background-color: #FB8C00;
      color: #fff;
      z-index: 3;
}

.fixed-left-3{
      left:200px;
      position: -webkit-sticky; /*for safary*/
      position:sticky;
      background-color: #FB8C00;
      color: #fff;
      z-index: 3;
}

/*marcan una fila de color*/
.tr-red{
    background-color: rgba(244,67,54,0.65);
    color:#fff;
}
.tr-warning{
    background-color: rgba(255, 193, 7, 0.65);
    color:#333;
}

.tr-success{
 background: #7CB342;
 color:#fff
}
</style>