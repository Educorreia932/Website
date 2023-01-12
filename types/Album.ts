import {Track} from "~/types/Track";

export interface Album {
	name: string,
	artist: string,
	album_url?: string,
	image_url: string,
	release_date: string,
	tracks: Track[]
}