<template>
    <EditTask :task="ObjectMyTask" :editTask="editTaskHandler"> 
    </EditTask>
</template>
  
  <script setup>
  import { defineComponent } from 'vue';
  const ObjectMyTask= {
      "id":"Number",
      "name":"String",
      "state":"String",
      "description":"oui oui le pain",
      "date":'2023-05-04',
      "notif":"true",
      "whenNotif":"2 jours avant",
      "priority":"Moyenne",
      "taskType":"Récurente"
  }
  const editTaskHandler = (id,newDates) =>{
    console.log(id,newDates)
  };
  // Components
 
  import EditTask from '../components/EditTask.vue';
  
  defineComponent({
    name: 'ModifFormTest',
  
    components: { 
      EditTask
    },
  });
  </script>
  