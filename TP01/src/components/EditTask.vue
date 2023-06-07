<template>
  <div style="width: 100%;">
    <v-row>
      <v-col cols="12" md="6" no-gutters>
        <v-textarea class="pa-0" @input="update()" v-model="fantome.description" rows="10" auto-grow :outlined="false" :bg-color="'surface'"></v-textarea>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col cols="5" sm="4" class="d-flex flex-column justify-center align-start">
            <v-card color="surface" style="margin-top: 6px">
              <v-card-text class="text-center">
                Échéance
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-text-field hide-details style="margin-top: 6px" bg-color="surface" type="date" label="date" v-model="fantome.date" @input="update()">
            </v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5" sm="4" class="d-flex flex-column justify-center align-start">
            <v-card color="surface" class="d-flex align-center" style="margin-top: 6px">
              <v-card-text class="text-center">
                Notification
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-row>
              <v-col cols="12" sm="9">
                <v-select hide-details style="margin-top: 6px"
                  :items="isMobile ? notificationItemsAbbreviation : notificationItems" item-title="notification"
                  bg-color="surface" class="custom-select" :modelValue="selectNotificationDisplay" @update:modelValue="handleNotificationChange" ></v-select>
              </v-col>
              <v-col cols="12" sm="3" class="d-flex flex-column align-start align-sm-center justify-end">
                <div class="bg-surface rounded-lg d-flex justify-center align-center" @click="toggleIsRing(),update()" style="height: 56px; aspect-ratio: 1;">
                  <v-icon v-if="fantome.notif">mdi-bell-off-outline</v-icon>
                  <v-icon v-else>mdi-bell-outline</v-icon>
                </div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5" sm="4" class="d-flex flex-column justify-center align-start">
            <v-card color="surface" class="d-flex align-center" style="margin-top: 6px">
              <v-card-text class="text-center">
                Importance
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-select hide-details style="margin-top: 8px" v-model="fantome.priority" @update:modelValue="update()" 
              :items="importanceItems" item-title="importance" bg-color="surface"></v-select>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="5" sm="4" class="d-flex flex-column justify-center align-start">
            <v-card color="surface" class="d-flex align-center" style="margin-top: 6px">
              <v-card-text class="text-center">
                Type de tâche
              </v-card-text>
            </v-card>
          </v-col>
          <v-col>
            <v-select hide-details style="margin-top: 8px" v-model="fantome.taskType" @update:modelValue="update()" :items="typeTaskItems"
              item-title="typeTask" bg-color="surface"></v-select>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<style>
.custom-select {
  width: 100%;
}
</style>
  

<script setup>
import { reactive } from 'vue';
import { ref } from 'vue'
const props= defineProps({
  task : Object,
  editTask : Function
})
//console.log(props.task)

let fantome = reactive({...props.task})
let selectNotificationDisplay = ref("1 jour avant");
let handleNotificationChange = (newVal) =>{
  selectNotificationDisplay.value = newVal;
  if (notificationItemsAbbreviation.includes(newVal)){
    fantome.whenNotif =  notifCorr[newVal]
  }else{
    fantome.whenNotif = newVal
  }
}
let notificationItems = ([
   '1 jour avant',
   '2 jours avant',
   '3 jour avant',
   '4 jours avant',
   '5 jours avant',
   '6 jours avant',
   '1 semaine avant',
   '2 semaines avant'
]);

let notificationItemsAbbreviation = ([
  '1 j. av.',
  '2 j. av.',
  '3 j. av.',
  '4 j. av.',
  '5 j. av.',
  '6 j. av.',
  '1 sem.',
  '2 sem.'
]);

let notifCorr = {
  '1 j. av.':'1 jour avant',
  '2 j. av.':'2 jours avant',
  '3 j. av.':'3 jour avant',
  '4 j. av.':'4 jours avant',
  '5 j. av.':'5 jours avant',
  '6 j. av.':'6 jours avant',
  '1 sem.':'1 semaine avant',
  '2 sem.':'2 semaines avant'
}

let importanceItems = ([
   'Urgente',
  'Moyenne',
   'Faible'
]);


let typeTaskItems = ref([
   'Personnel',
   'Récurente',
   'À déléguer'
]);

let isMobile = ref(window.innerWidth <= 600);
const updateisMobile = () =>{
  isMobile.value = window.innerWidth <= 600;
  if (isMobile.value){
    if(notificationItems.includes(selectNotificationDisplay.value)){
      for (const [key,val] of Object.entries(notifCorr) ) {
        if(selectNotificationDisplay.value == val){
          selectNotificationDisplay.value = key
        }
      }
    }
  }else{
    if(notificationItemsAbbreviation.includes(selectNotificationDisplay.value)){
      selectNotificationDisplay.value = notifCorr[selectNotificationDisplay.value]
    }
  }
}
updateisMobile();
addEventListener('resize', updateisMobile);
function toggleIsRing() {
  fantome.notif = !fantome.notif;
}
const update =()=>{
  props.editTask(fantome.id,{
  "id":fantome.id,
  "name":fantome.name,
  "state":fantome.state,
  "description":fantome.description,
  "date":fantome.date,
  "notif":fantome.notif,
  "whenNotif":fantome.whenNotif,
  "priority":fantome.priority,
  "taskType":fantome.taskType
  })
}

</script>
  