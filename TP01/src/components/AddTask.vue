<template>
    <div>
      <v-container>
        <v-row>
            <v-col class="d-flex flex-colum flex-nowrap align-content-center justify-center align-center">
              <v-card  color="surface" class="mt-2 align-center pa-1 d-flex">
                <v-card-text class="text-center py-2">
                  Nom
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-textarea v-model="description" hide-details class="mt-2" rows="1" auto-grow :outlined="false" :bg-color="'surface'" > 
              </v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="d-flex flex-colum flex-nowrap align-content-center justify-center align-center">
              <v-card  color="surface" class="mt-2 align-center pa-1 d-flex" >
                <v-card-text class="text-center py-2">
                  Couleur
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <v-card  hide-details  color="surface"  class="mt-2 d-flex align-center" >
                <v-card-text class="text-center"  >
                  {{ selectedColor }}
                </v-card-text>
                <v-btn hide-details color="accentuated-surface" class="text-surface rounded-lg mr-1" size="x-small" icon="mdi-eyedropper" @click="toggleColorPicker()"></v-btn>
              </v-card>
              <v-color-picker  class="mt-4" hide-details hide-inputs v-if="colorPickerActive" v-model="selectedColor" @input="getColor()" ></v-color-picker>
            </v-col>
        </v-row>
        <v-row>
            <v-col class=" d-flex flex-colum flex-nowrap align-content-center justify-center align-center">
              <v-card color="surface" class="mt-2 align-center pa-1 d-flex" >
                <v-card-text class="text-center py-2">
                  Icône
                </v-card-text>
              </v-card>
            </v-col>
            <v-col>
              <div class="arbitrary-size">
                <IconPicker :currentlySelected="valueIcon" :updateCurrentlySelected="updateIcon"/>
            </div>
            </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col class="d-flex justify-center">
            <v-btn color="surface" min-width="fit-content" class="mt-12 align-center d-flex flex-colum flex-nowrap align-content-center justify-center align-center flex flex-grow-0" @click="isButtonClicked = true" large block>Annuler
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-center">
            <v-btn color="accentuated-surface"  min-width="fit-content" class="mt-12 align-center d-flex flex-colum flex-nowrap align-content-center justify-center align-center flex flex-grow-0" @click="() => handleClickValidate()" large block>Valider
            </v-btn>
          </v-col>
        </v-row>
    </v-container>

    </div>
  </template>
  
  <style>
  .custom-select {
    width: 100%;
  }
  .arbitrary-size{
    
    max-height: 300px;
}
  </style>
<script setup>
import { ref, defineProps } from 'vue'
import IconPicker from "../components/IconPicker.vue"

const props = defineProps({
  addTask : Function,
  title : String
})

let colorPickerActive = ref(false);
let description = ref(null);
function toggleColorPicker() {
      colorPickerActive.value = !colorPickerActive.value;
    }

let selectedColor = ref('');
function getColor(color) {
  selectedColor.value = color;
    }

const valueIcon = ref("");
const updateIcon = (value) => {
    valueIcon.value = value;
};

const handleClickValidate =()=>{
  props.addTask({
    "description": description.value,
    "color": selectedColor.value,
    "icon" : valueIcon.value,
  
  })

}
</script>
 
  
  