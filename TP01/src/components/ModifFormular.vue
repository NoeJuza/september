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
          <v-col cols="12" md="6" >
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
                
                <v-col  cols="6" md="6" sm="6" lg="6" >
                  <v-text-field hide-details  style="margin-top: 6px" 
                  bg-color="surface"
                  type="date" 
                  label="Date">   
                               
                  </v-text-field>
               
                  <v-row >
                  <v-col cols="9" md="9" sm="9" lg="9">
                    <v-select hide-details style="margin-top: 6px"
                    v-model="selectNotification"
                    :items="isMobile ? notificationItemsAbbreviation : notificationItems"
                    item-title="notification"
                    bg-color="surface"
                    class="custom-select"

                      ></v-select>
                  </v-col>
                  <v-col cols="3" class="d-flex align-center justify-end" >
                    <v-btn hide-details style="margin-top: 12px" :size="buttonSize"
                    @click="toggleIsRing">
                    <v-icon v-if="isRing">mdi-bell-off-outline</v-icon>
                    <v-icon v-else>mdi-bell-outline</v-icon>
                    </v-btn>
                  </v-col>

                  </v-row>
                    <v-select hide-details style="margin-top: 8px"
                    v-model="selectImportance"
                    :items="importanceItems"
                    item-title="importance"
                    bg-color="surface"
                      ></v-select>
                    <v-select hide-details style="margin-top: 8px"
                    v-model="selectTypeTask"
                    :items="typeTaskItems"
                    item-title="typeTask"
                    bg-color="surface"
                      ></v-select>
                </v-col>
            </v-row>
            <v-row>
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
        notificationItemsAbbreviation: [
          { notification: '1 j. av.'},
          { notification: '2 j. av.'},
          { notification: '3 j. av.'},
          { notification: '4 j. av.'},
          { notification: '5 j. av.'},
          { notification: '6 j. av.'},
          { notification: '1 sem.'},
          { notification: '2 sem.'},
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
      isMobile: false,
      isButtonClicked: false,
      buttonSize: 'small',
      };
    },
    mounted() {
    window.addEventListener('resize', this.checkScreenSize);
    this.checkScreenSize();
  },
      methods: {
        checkScreenSize() {
          this.buttonSize = window.innerWidth <= 450 ? 'x-small' : 'small';
      this.isMobile = window.innerWidth <= 600; 
      
      if (this.isMobile) {
       
        this.selectNotification = { notification: '1 j. av.' };
      } else {
       
        this.selectNotification = { notification: '1 jour avant' };
      }
    },
   toggleIsRing() {
      this.isRing = !this.isRing;
   }
  }

  }
</script>
  