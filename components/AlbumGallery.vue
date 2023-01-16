<template>
	<div class="flex flex-row w-full">
		<!--		<div>-->
		<!--			<ul class="list-none">-->
		<!--				<li v-for="(_, key, i) in groupBy(albums, ({artist}) => artist)" :key="i">-->
		<!--					{{ key }}-->
		<!--				</li>-->
		<!--			</ul>-->
		<!--		</div>-->

		<div>
			<section v-for="(albums, key, i) in groupBy(albums, ({artist}) => artist)" :key="i" class="albums">
				<h3 class="mt-2">{{ key }}</h3>

				<AlbumRow :albums="albums"/>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
import {groupBy} from "lodash";

const {albums} = defineProps<{
	albums: any[]
}>();
</script>

<style scoped>
.albums {
}
</style>