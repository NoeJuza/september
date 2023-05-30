<template>
  <div>
    <v-container>

      <v-row>
        <v-col cols="12" md="6">
          <v-textarea v-model="description" rows="10" auto-grow :outlined="false" :bg-color="'surface'"></v-textarea>
        </v-col>
        <v-col cols="12" md="6">
          <v-row>
            <v-col cols="6" md="3" sm="6" lg="3">
              <v-card min-height="58" color="surface" class="d-flex align-center" style="margin-top: 6px">
                <v-card-text class="text-center">
                  Échéance
                </v-card-text>
              </v-card>
              <v-card min-height="58" color="surface" class="d-flex align-center" style="margin-top: 6px">
                <v-card-text class="text-center">
                  Notification
                </v-card-text>
              </v-card>
              <v-card min-height="58" color="surface" class="d-flex align-center" style="margin-top: 6px">
                <v-card-text class="text-center">
                  Importance
                </v-card-text>
              </v-card>
              <v-card min-height="58" color="surface" class="d-flex align-center" style="margin-top: 6px">
                <v-card-text class="text-center">
                  Type de tâche
                </v-card-text>
              </v-card>
            </v-col>

            <v-col cols="6" md="6" sm="6" lg="6">
              <v-text-field hide-details style="margin-top: 6px" bg-color="surface" type="date" label="Date">

              </v-text-field>

              <v-row>
                <v-col cols="9" md="9" sm="9" lg="9">
                  <v-select hide-details style="margin-top: 6px" v-model="selectNotification"
                    :items="isMobile ? notificationItemsAbbreviation : notificationItems" item-title="notification"
                    bg-color="surface" class="custom-select"></v-select>
                </v-col>
                <v-col cols="3" class="d-flex align-center justify-end">
                  <v-btn hide-details style="margin-top: 12px" :size="buttonSize" @click="toggleIsRing()">
                    <v-icon v-if="isRing">mdi-bell-off-outline</v-icon>
                    <v-icon v-else>mdi-bell-outline</v-icon>
                  </v-btn>
                </v-col>

              </v-row>
              <v-select hide-details style="margin-top: 8px" v-model="selectImportance" 
                :items="importanceItems" item-title="importance" bg-color="surface"></v-select>
              <v-select hide-details style="margin-top: 8px" v-model="selectTypeTask" :items="typeTaskItems"
                item-title="typeTask" bg-color="surface"></v-select>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="9" sm="12" lg="9">
              <v-btn color="secondary" class="text-surface" @click="isButtonClicked = true" large block>Valider
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style>
.custom-select {
  width: 100%;
}
</style>
  

<script setup>
import { ref } from 'vue'


let description = ref('');
let selectNotification = ref("1 jour avant");

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

let isMobile = ref(false);
let isButtonClicked = ref(false);
let buttonSize = ref('small');

addEventListener('resize', (event) => {

buttonSize.value = window.innerWidth <= 450 ? 'x-small' : 'small';
isMobile.value = window.innerWidth <= 600;
if (isMobile.value) {

  selectNotification.value =  '1 j. av.';
} else {

  selectNotification.value =   '1 jour avant';
}
});
function toggleIsRing() {
  isRing.value = !isRing.value;
}
</script>
  