<template>
  <div style="width: 100%;">
    <v-row>
      <v-col cols="12" md="6" no-gutters>
        <v-textarea class="pa-0" v-model="description" rows="10" auto-grow :outlined="false" :bg-color="'surface'"></v-textarea>
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
            <v-text-field hide-details style="margin-top: 6px" bg-color="surface" type="date" label="date" v-model="date">
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
                  bg-color="surface" :modelValue="selectNotificationDisplay" @update:modelValue="handleNotificationChange" ></v-select>
              </v-col>
              <v-col cols="12" sm="3" class="d-flex flex-column align-start align-sm-center justify-end">
                <div class="bg-surface rounded-lg d-flex justify-center align-center" @click="toggleIsRing()" style="height: 56px; aspect-ratio: 1;">
                  <v-icon v-if="isRing">mdi-bell-off-outline</v-icon>
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
            <v-select hide-details style="margin-top: 8px" v-model="selectImportance" 
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
            <v-select hide-details style="margin-top: 8px" v-model="selectTypeTask" :items="typeTaskItems"
              item-title="typeTask" bg-color="surface"></v-select>
          </v-col>
        </v-row>
        <v-row class="justify-center">
          <v-col cols="12" md="9">
            <v-btn color="accentuated-surface" class="text-surface" @click="() => handleClickValidate()" large block>Valider
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
  
<script setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
  addTask : Function,
  title : String
})
//console.log(props.addTask)
const date =ref(null);
let description = ref(null);
let selectNotification = ref("1 jour avant");
let selectNotificationDisplay = ref("1 jour avant");

const handleNotificationChange = (newValue) =>{
  selectNotificationDisplay.value = newValue;
  if (notificationItemsAbbreviation.includes(newValue)){
    selectNotification.value =  notifCorr[newValue]
  }else{
    selectNotification.value = newValue
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
let isRing = ref(false);
let selectImportance = ref('Urgente');

let importanceItems = ([
   'Urgente',
  'Moyenne',
   'Faible'
]);

let selectTypeTask = ref('Personnel');

let typeTaskItems = ref([
   'Personnel',
   'Récurente',
   'À déléguer'
]);

let isMobile = ref(window.innerWidth <= 600);
if (isMobile.value) {
  selectNotificationDisplay.value =  '1 j. av.';
} else {
  selectNotificationDisplay.value =   '1 jour avant';
}

addEventListener('resize', () => {
  isMobile.value = window.innerWidth <= 600;
  if (isMobile.value) {
    selectNotificationDisplay.value =  '1 j. av.';
  } else {

    selectNotificationDisplay.value =   '1 jour avant';
  }
});
function toggleIsRing() {
  isRing.value = !isRing.value;
}
const handleClickValidate =()=>{
  props.addTask({
    "description": description.value,
    "date":date.value,
    "notif":isRing.value,
    "whenNotif":selectNotification.value,
    "priority":selectImportance.value,
    "taskType":selectTypeTask.value
  })
}
</script>
  