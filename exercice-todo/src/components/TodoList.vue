<script>
import TodoElement from "./TodoElement.vue"
export default {
    data() {
        return {
            currentText: "",
            count: 0,
            todoList: [
                {
                    "title": "Manger"
                },
                {
                    "title": "Dormir"
                },
                {
                    "title": "Fumer Adrien"
                },
                {
                    "title": "Rouler un gros J"
                },
                {
                    "title": "Se réveiller"
                },
            ]
        };
    },
    components: { TodoElement }
}
</script>

<template>
    <v-container>
        <v-container class="form">
            <input id="inptTaskName" type="text" :value=currentText @change="(e) =>{currentText=e.target.value}">
            <button @click="() =>{
                todoList.push({title: currentText});
                currentText = '';
            }    
            ">Add task</button>
        </v-container>
        <v-container>
            <TodoElement
            v-for="(next, i) in todoList"
            :key="i"
            :title="next.title"/>

        </v-container> 
    </v-container>
  
</template>
<style scoped>
.form{
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: stretch;
}
input{
    padding: 5px;
    background-color: #DAE2B3;
    border-radius: 5px;
}
button{
    padding: 5px;
    color: #DAE2B3;
    background-color: #4B5036;
    border-radius: 5px;
}
</style>