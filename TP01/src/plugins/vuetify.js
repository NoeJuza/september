// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

//#F6F3EC #E5E9Cd #DCE2B8 #4C5039

const septemberTheme = {
  dark: false,
  colors: {
    background: '#F6F3EC',
    surface: '#E5E9CD',
    primary: '#DCE2B8',
    'primary-darken-1': '#DCE2B8',
    secondary: '#4C5039',
    'secondary-darken-1': '#4C5039',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
    divcolor : '#E4E9CA',
  }
}

export default createVuetify(
  {
    theme: {
      defaultTheme: 'septemberTheme',
      themes: {
        septemberTheme,
      }
    }
  }
  // https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
)
