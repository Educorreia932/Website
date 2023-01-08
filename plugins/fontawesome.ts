import {config, library} from '@fortawesome/fontawesome-svg-core';
import {faGithub, faInstagram, faLinkedin, faSpotify} from "@fortawesome/free-brands-svg-icons";
import {faArrowUp, faLink, faPause, faVolumeMute} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

config.autoAddCss = false;

library.add(faLink, faSpotify, faGithub, faInstagram, faLinkedin, faPause, faArrowUp, faVolumeMute);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
