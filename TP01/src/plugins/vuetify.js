// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'
//#F6F3EC #E5E9Cd #DCE2B8 #4C5039

const septemberTheme = {
  dark: false,
  colors: {
   "background": '#F6F3EC',
    "primary": '#DCE2B8',
    "surface": '#E5E9CD',
    "accentuated-surface": '#4C5039',
  }
}
export default createVuetify(
  {
    theme: {
      defaultTheme: 'septemberTheme',
      themes: {
        septemberTheme,
      }
    },
    icons: {
      defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
