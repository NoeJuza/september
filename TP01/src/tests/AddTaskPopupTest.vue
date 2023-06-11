<template>
    <v-container>
        <v-btn @click="shouldShow = true">Test</v-btn>
        <AddTaskPopup :key="uniquePopupKey" :addTask="addTaskHandler" :show="shouldShow" :setShow="setShouldShow" stateToBeCreatedIn="TODO">
        </AddTaskPopup>
        <div
        v-for="(item) in simulatedArray"
        :key="item.id"
        >{{item.name}}</div>
    </v-container>
</template>
<script setup>
  import { defineComponent, reactive, ref } from 'vue';
  const uniquePopupKey= ref(0);
  const shouldShow = ref(false)
  const setShouldShow = (val) =>{
    uniquePopupKey.value = uniquePopupKey.value + 1;
    shouldShow.value = val;
  }
  const simulatedArray = reactive([
    {
        "id":1,
        "name":"Ma super tâche 1",
        "state":"TODO",
        "description":"oui oui le pain",
        "date":'2023-05-04',
        "notif":"true",
        "whenNotif":"2 jours avant",
        "priority":"Moyenne",
        "taskType":"Récurente"
    },
    {
        "id":2,
        "name":"Ma super tâche 2",
        "state":"TODO",
        "description":"oui oui le pain",
        "date":'2023-05-04',
        "notif":"true",
        "whenNotif":"2 jours avant",
        "priority":"Moyenne",
        "taskType":"Récurente"
    },
  ])
  const addTaskHandler = (objTaskIncomplete) =>{
    let nextIndex = Math.max( ...(simulatedArray.map(e =>e.id)) ) - -1;
    objTaskIncomplete.id = nextIndex
    console.log(objTaskIncomplete)
    simulatedArray.push(objTaskIncomplete)
    setShouldShow(false)
  };
  // Components
 
  import AddTaskPopup from '../components/AddTaskPopup.vue';
  
  defineComponent({
    name: 'AddTaskPopupTest',
  
    components: {
        AddTaskPopup
    },
  });
  </script>
  