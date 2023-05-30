<template>
    <div>
      <v-container>
        <v-row>
          <v-col cols="3" md="3"></v-col>
          <v-col cols="6" md="6">
            <v-row>
              <v-col cols="3" md="3" sm="6" lg="3">
                <v-card min-height="58" color="surface" class="d-flex align-center" style="margin-top: 6px">
                  <v-card-text class="text-center">
                    Nom
                  </v-card-text>
                </v-card>
                <v-card min-height="58" color="surface" class="d-flex align-center" style="margin-top: 6px">
                  <v-card-text class="text-center">
                    Couleur
                  </v-card-text>
                </v-card>
                <v-card min-height="58" color="surface" class="d-flex align-center" style="margin-top: 6px">
                  <v-card-text class="text-center">
                    Icône
                  </v-card-text>
                </v-card>
              </v-col>
  
              <v-col cols="6" md="6" sm="6" lg="6">
                
  
                <v-row>
                  <v-col cols="9" md="9" sm="9" lg="9">
                    <v-text-field>
                        ICI
                    </v-text-field>
                  </v-col>
                </v-row>
  
                <v-select hide-details style="margin-top: 8px"></v-select>
                <v-select hide-details style="margin-top: 8px"></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="9" sm="12" lg="9"></v-col>
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
  
  <script>
  export default {
    data() {
      return {
        nom: '',
        selectedColor: null,
        icone: '',
        color: null,
       
      };
    },
    methods: {
      annuler() {
        // Logique pour annuler
      },
      valider() {
        // Logique pour valider
      },
    },
  };
  </script>
  
  