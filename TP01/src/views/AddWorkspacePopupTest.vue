<template>
    <v-container>
        <v-btn @click="shouldShow = true">Test</v-btn>
        <AddWorkspacePopup :key="uniquePopupKey" :addWorkspace="addWorkspaceHandler" :show="shouldShow" :setShow="setShouldShow">
        </AddWorkspacePopup>
        <div
        v-for="(item) in simulatedArray"
        :key="item?.id"
        ><v-icon v-if="item.icon" :style="'background-color:' +  item?.iconColor">{{item?.icon}}</v-icon>{{item?.name}}</div>
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
            "id":"1",
            "name":"Mon super workspace num1",
            "icon":"mdi-vlc",
            "iconColor": "#FF00FF",
            "WorkspaceList":[
                {
                }
            ],
            "addTask":() =>{},
            "editTask": () =>{},
        },
        {
            "id":"1",
            "name":"Num2",
            "icon":"mdi-arm-flex",
            "iconColor": "#FFFFFF",
            "taskList":[
                {
                }
            ],
            "addTask":() =>{},
            "editTask": () =>{},
        }
    ])
  const addWorkspaceHandler = (objWorkspaceIncomplete) =>{
    let nextIndex = Math.max( ...(simulatedArray.map(e =>e.id)) ) - -1;
    console.log("test")
    objWorkspaceIncomplete.id = nextIndex
    console.log(objWorkspaceIncomplete)
    simulatedArray.push(objWorkspaceIncomplete)
    setShouldShow(false)
  };
  // Components
 
  import AddWorkspacePopup from '../components/AddWorkspacePopup.vue';
  
  defineComponent({
    name: 'AddTaskPopupTest',
  
    components: {
      AddWorkspacePopup
    },
  });
  </script>
  