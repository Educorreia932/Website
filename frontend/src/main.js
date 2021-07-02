import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/css/tailwind.css"

// FontAwesome
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faDownload,
    faEnvelope,
    faEye,
    faHourglass,
    faInfoCircle,
    faLink,
    faPlus
} from '@fortawesome/free-solid-svg-icons'
import {faDiscord, faGithub, faInstagram, faLinkedin, faSpotify, faSteam} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

library.add(
    faEnvelope,
    faGithub,
    faSteam,
    faSpotify,
    faLinkedin,
    faInstagram,
    faDiscord,
    faLink,
    faPlus,
    faEye,
    faHourglass,
    faDownload,
    faInfoCircle
)

const app = createApp(App)

app.use(router)

app.component(
    'font-awesome-icon', FontAwesomeIcon
)

app.mount('#app');
