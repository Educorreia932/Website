import {defineStore} from "pinia";
import {SortingCriteria} from "~/enums/SortingCriteria";
import {ViewMode} from "~/enums/ViewMode";

export const useMusicStore = defineStore("music", {
	state: () => {
		return {
			currentViewMode: ViewMode.Carousel,
			sortingCriteria: SortingCriteria.Title,
			currentAlbumIndex: 0,
			currentTrackIndex: 0,
			playing: true,
		};
	},
	actions: {
		setCurrentViewMode(viewMode: ViewMode) {
			this.currentViewMode = viewMode;
		},
		setSortingCriteria(sortingCriteria: SortingCriteria) {
			this.sortingCriteria = sortingCriteria;
		},
		setCurrentAlbumIndex(index: number) {
			this.currentAlbumIndex = index;
		},
		setCurrentTrackIndex(index: number) {
			this.currentTrackIndex = index;
		},
		togglePlaying() {
			this.playing = !this.playing;
		}
	}
});
