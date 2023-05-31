<template>
    <v-container>
        <EditTaskPopup :key="'popup-for-'+currentSelectedTask.id" :task="currentSelectedTask"  :editTask="editTaskHandler" :show="shouldShow" :setShow="setShouldShow">
        </EditTaskPopup>
        <div
        v-for="(item) in simulatedArray"
        :key="item.id"
        @click="handleClickItem(item)">{{item.name}}</div>
    </v-container>
</template>
<script setup>
  import { defineComponent, reactive, ref } from 'vue';
  const shouldShow = ref(false)
  const setShouldShow = (val) =>{
    shouldShow.value = val;
  }
  const handleClickItem = (item) =>{
    console.log(item);
    currentSelectedTask.value = item; 
    shouldShow.value = true;
  }
  const simulatedArray = reactive([
    {
        "id":1,
        "name":"Ma super tâche 1",
        "state":"TODO",
        "description":"oui oui le pain",
        "date":'2023-05-04',
        "notif":true,
        "whenNotif":"2 jours avant",
        "priority":"Moyenne",
        "taskType":"Récurente"
    },
    {
        "id":2,
        "name":"Ma super tâche 2",
        "state":"TODO",
        "description":"non nnon le pain",
        "date":'2023-07-05',
        "notif":false,
        "whenNotif":"2 jours avant",
        "priority":"Moyenne",
        "taskType":"Récurente"
    },
  ])
  const currentSelectedTask= ref(simulatedArray[0]);
  const editTaskHandler = (id,obj) =>{
    simulatedArray[simulatedArray.findIndex(el => el.id == id)] = obj
    console.log(simulatedArray)
  };
  // Components
 
  import EditTaskPopup from '../components/EditTaskPopup.vue';
  
  defineComponent({
    name: 'EditTaskPopupTest',
  
    components: {
        EditTaskPopup
    },
  });
  </script>
  