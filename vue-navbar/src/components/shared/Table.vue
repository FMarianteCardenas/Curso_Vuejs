<template>
    <div>
        <v-simple-table dense>
            <thead>
            <tr>
                <th v-for="column in settings.columns" :key="column.key">
                    {{column.header}}
                </th>
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
            </tr>
            </tbody>
        </v-simple-table>
    </div>
</template>
<script>
export default {
    name:'Table',
    props:['settings','list'],
    created(){
        console.log('datos recibidos',this.list)
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
    }
}
</script>
