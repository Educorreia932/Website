import {defineStore} from "pinia";
import {SortingCriteria} from "~/enums/SortingCriteria";
import {ViewMode} from "~/enums/ViewMode";
import music from "assets/json/music.json";
import {Album} from "~/types/Album";

export const useMusicStore = defineStore("music", {
	state: () => {
		return {
			albums: music.albums,
			currentViewMode: ViewMode.Carousel,
			sortingCriteria: SortingCriteria.Artist,
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
		setCurrentAlbum(album: Album) {
			this.currentAlbumIndex = this.albums.findIndex((element) => element.album_url == album.album_url);
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
