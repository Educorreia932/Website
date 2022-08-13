import {library, config} from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
import {faLink} from '@fortawesome/free-solid-svg-icons';
import {faSpotify} from "@fortawesome/free-brands-svg-icons";

config.autoAddCss = false;

library.add(faLink, faSpotify);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon, {});
});
