<template>
    <div>
      <v-container>
        <v-row>
          <v-col cols="3" md="3" sm="3" lg="3"></v-col>
              <v-col cols="3" md="3" sm="3" lg="3">
                <v-card min-height="58" color="surface" class=" align-center" style="margin-top: 6px">
                  <v-card-text class="text-center">
                    Nom
                  </v-card-text>
                </v-card>
                <v-card min-height="58" color="surface" class=" align-center" style="margin-top: 6px">
                  <v-card-text class="text-center">
                    Couleur
                  </v-card-text>
                </v-card>
                <v-card min-height="58" color="surface" class=" align-center" style="margin-top: 6px">
                  <v-card-text class="text-center">
                    Icône
                  </v-card-text>
                </v-card>
                <v-col cols="6" md="6" sm="6" lg="6">
                <v-btn color="surface" style="margin-top: 50px" class=" align-center" @click="isButtonClicked = true" large block>Annuler
                </v-btn>
              </v-col>
              </v-col>


              <v-col cols="6" md="6" sm="6" lg="6">
                <v-row>
                  <v-col cols="6" md="6" sm="3" lg="6">
                    <v-text-field hide-details style="margin-top: 8px" rows="1" auto-grow :outlined="false" :bg-color="'surface'"> 
                    </v-text-field>
                  
                
                  
                <v-card  hide-details min-height="58" color="surface" style="margin-top: 8px" class="d-flex align-center" >
                  <v-card-text class="text-center">
                    {{ selectedColor }}
                  </v-card-text>
                  <v-btn hide-details color="secondary" class="text-surface" size="x-small" icon="mdi-eyedropper" @click="toggleColorPicker()"></v-btn>
                </v-card>
                <v-color-picker  style="margin-top: 8px" hide-details hide-inputs v-if="colorPickerActive" v-model="selectedColor" @input="getColor()" ></v-color-picker>
                <v-select hide-details style="margin-top: 8px"></v-select>
                <v-col cols="6" md="6" sm="6" lg="6">
                <v-btn color="secondary" style="margin-top: 50px" class="text-surface" @click="isButtonClicked = true" large block>Valider
                </v-btn>
              </v-col>
              </v-col>
            </v-row>
            
              </v-col>
            </v-row>
            <v-row>
           
            
          
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
let colorPickerActive = ref(false);

function toggleColorPicker() {
      colorPickerActive.value = !colorPickerActive.value;
    }

let selectedColor = ref('');
function getColor(color) {
  selectedColor.value = color;
    }
</script>
 
  
  