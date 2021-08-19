<template>
	<div>
		<div class="category">
			<div v-for="(item, name) in favorite_things[category]" :key="item" class="has-tooltip">
				<span class="tooltip">{{ name }}</span>

				<img :src="require(`@/assets/images/favorite_things/${item}`)" :alt="name"
						class="w-full h-full object-cover rounded-md"/>
			</div>
		</div>
	</div>
</template>

<script>
const favorite_things_json = require("../assets/favorite_things.json");

export default {
	name: "FavoriteThings",
	props: {
		"category": String,
	},
	data() {
		return {
			favorite_things: favorite_things_json,
		};
	},
};
</script>

<style>
.category {
	@apply flex flex-wrap gap-6 justify-center;
}

.category > * {
	@apply w-28 h-28 xl:w-48 xl:h-48;
}
</style>