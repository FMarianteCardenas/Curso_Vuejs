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
                <v-btn color="green darken-1" fab small dark @click="applyFilter"><v-icon>sync</v-icon></v-btn>
            </v-card-text>
        </v-card>
            </v-flex>
        </v-layout>
        <v-simple-table>
            <thead>
            <tr>
                <th v-for="column in settings.columns" :key="column.key">
                    {{column.header}}
                </th>
                <th v-for="action in settings.actions" :key="action.key">
                    {{action.header}}
                </th>
                
            </tr>
            <tr>
                <th v-for="column in settings.columns" :key="column.key">
                    <span v-if="column.filter.visible == true">
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
                    <span v-if="column.data_type == 'date'">{{getValue(item,column.path)}}</span>
                    <span v-if="column.data_type == 'text'">{{getValue(item,column.path)}}</span>
                    <span v-if="column.data_type == 'number'">{{getValue(item,column.path)}}</span>
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
    </div>
</template>
<script>
export default {
    name:'Table',
    props:['settings','list'],
    data(){
        return{
            filters:{
                values:{},
                sort:{}
            }
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
                this.filters.sort[column.key] = 'ASC'
            }
        });
        console.log(this.filters);
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
            console.log('filtros',this.filters)
            let sort = this.applySort()
            let values = this.applyValues()
            let filter = `${sort}${values}`
            console.log('filtro aplicado',filter)
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
                        sort+=`--${column.key}${coma}`
                    }
                }
            })

            return sort
        },

        applyValues(){
            let values = ''
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
                            values+=`${column.key}=><${this.filters.values[column.key]}`
                        }
                    }
                }
            })

            if(values!=''){
                values = `&${values}`
            }

            return values
        }
    }
}
</script>
