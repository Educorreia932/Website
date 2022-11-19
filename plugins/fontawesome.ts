import {library, config} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faLink, faPause} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faInstagram, faLinkedin, faSpotify} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

library.add(faLink, faSpotify, faGithub, faInstagram, faLinkedin, faPause);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
