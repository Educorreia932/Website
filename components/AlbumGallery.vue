<template>
	<div class="flex flex-row w-full">
		<!--		<div>-->
		<!--			<ul class="list-none">-->
		<!--				<li v-for="(_, key, i) in groupBy(albums, ({artist}) => artist)" :key="i">-->
		<!--					{{ key }}-->
		<!--				</li>-->
		<!--			</ul>-->
		<!--		</div>-->

		<div class="flex flex-row overflow-x-auto space-x-8 p-10">
			<section
				v-for="(albums, key, i) in groupBy(albums, ({release_date}) => (new Date(release_date).getUTCFullYear()))"
				:key="i"
			>
				<h3 class="mt-2">{{ key }}</h3>
				
				<AlbumColumn :albums="albums"/>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import {groupBy} from "lodash";
import {Album} from "~/types/Album";

const {albums} = defineProps<{
	albums: Album[]
}>();
</script>

<style scoped>
.albums {
}
</style>