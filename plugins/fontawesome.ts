import {config, library} from "@fortawesome/fontawesome-svg-core";
import {faGithub, faInstagram, faLinkedin, faSpotify} from "@fortawesome/free-brands-svg-icons";
import {
	faArrowUp,
	faBackwardStep,
	faForwardStep,
	faGamepad,
	faHeadphones,
	faHouse,
	faLink,
	faListUl,
	faMusic,
	faPause,
	faPencilRuler,
	faPlane,
	faPlay,
	faSort,
	faTv,
	faVolumeMute
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";

config.autoAddCss = false;

library.add(
	faLink,
	faSpotify,
	faGithub,
	faInstagram,
	faLinkedin,
	faPause,
	faArrowUp,
	faHouse,
	faPencilRuler,
	faPlane,
	faMusic,
	faGamepad,
	faTv,
	faVolumeMute,
	faSort,
	faForwardStep,
	faBackwardStep,
	faPlay,
	faListUl,
	faHeadphones
);

export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});
