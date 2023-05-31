<template>
    <ModifFormular :task="ObjectMyTask" :editTask="editTask"> 
    </ModifFormular>
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
const editTask = (id,newDates) =>{
    console.log(newDates)
  };

  
  // Components
 
  import ModifFormular from '../components/ModifFormular.vue';
  
  defineComponent({
    name: 'ModifFormTest',
  
    components: { 
      ModifFormular
    },
  });
  </script>
  