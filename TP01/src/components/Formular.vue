<template>
    <div>
      <v-container>
        
        <v-row>
          <v-col cols="12" md="6">
            <v-textarea

              v-model="description"
              rows="10"
              auto-grow
              :outlined="false"
              :bg-color="'surface'"
            ></v-textarea>
          </v-col>
          <v-col cols="12" md="6">
            <v-row>
                <v-col cols="12" md="6">
                    <v-card min-height="35" color="surface" class="d-flex align-center" style="margin-top: 6px">
                        <v-card-text class="text-center">
                        Échéance
                        </v-card-text>
                    </v-card>
                    <v-card min-height="35" color="surface" class="d-flex align-center" style="margin-top: 6px">
                        <v-card-text class="text-center">
                        Notification
                        </v-card-text>
                    </v-card>
                    <v-card min-height="35" color="surface" class="d-flex align-center" style="margin-top: 6px">
                        <v-card-text class="text-center">
                        Importance
                        </v-card-text>
                    </v-card>
                    <v-card min-height="35" color="surface" class="d-flex align-center" style="margin-top: 6px">
                        <v-card-text class="text-center">
                        Type de tâche
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="12" md="6">
                  <v-text-field  
                  bg-color="surface"
                  type="date" 
                  label="Date">
                  
                  </v-text-field>
                  <v-row>
                  <v-col cols="9">
                    <v-select
                    v-model="selectNotification"
                    :items="notificationItems"
                    item-title="notification"
                    bg-color="surface"
                    class="custom-select"
                      ></v-select>
                  </v-col>
                  <v-col cols="3">
                    <v-btn
                    @click="toggleIsRing">
                    <v-icon v-if="isRing">mdi-bell-off-outline</v-icon>
                    <v-icon v-else>mdi-bell-outline</v-icon>
                    </v-btn>
                  </v-col>

                  </v-row>
                    <v-select
                    v-model="selectImportance"
                    :items="importanceItems"
                    item-title="importance"
                    bg-color="surface"
                      ></v-select>
                    <v-select
                    v-model="selectTypeTask"
                    :items="typeTaskItems"
                    item-title="typeTask"
                    bg-color="surface"
                      ></v-select>
                </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn 
                color="secondary"
                class="text-surface"
                @click="isButtonClicked = true" 
                large block>Valider
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
  
  <script>
  export default {
    
    data() {
      return {
        description: '',
        selectNotification: { notification: '1 jour avant'},
        notificationItems: [
          { notification: '1 jour avant'},
          { notification: '2 jours avant'},
          { notification: '3 jour avant'},
          { notification: '4 jours avant'},
          { notification: '5 jour avant'},
          { notification: '6 jours avant'},
          { notification: '1 semaine avant'},
          { notification: '2 semaines avant'},
        ],
        isRing: false,
        selectImportance: { importance: 'Urgente'},
        importanceItems: [
          { importance: 'Urgente'},
          { importance: 'Moyenne'},
          { importance: 'Faible'},
      ],
      selectTypeTask: { typeTask: 'Personnel'},
        typeTaskItems: [
          { typeTask: 'Personnel'},
          { typeTask: 'Récurente'},
          { typeTask: 'À déléguer'},
      ],
      isButtonClicked: false,
      };
    },
      methods: {
   toggleIsRing() {
      this.isRing = !this.isRing;
   }
  }

  }
</script>
  