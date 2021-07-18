<template>
    <div v-for="(items, category) in favorite_things" :key="category" class="xl:w-5/6 m-auto">
        <h3 class="text-center">Favorite <span>{{ category }}</span></h3>

        <div class="category">
            <div
                v-for="(item, name) in items"
                :key="item"
                class="has-tooltip"
            >
                <span class="tooltip">{{ name }}</span>

                <img
                    :src="require(`@/assets/images/favorite_things/${item}`)"
                    :alt="name"
                    class="w-full h-full object-cover rounded-md"
                >
            </div>
        </div>
    </div>
</template>

<script>
import VTooltip from 'v-tooltip'

const favorite_things_json = require("../assets/favorite_things.json");

export default {
    name: "FavoriteThings",
    components: {
        "v-tooltip": VTooltip
    },
    data() {
        return {
            "favorite_things": favorite_things_json,
        }
    },
}
</script>

<style>
:root {
    --carousel-color-primary: #ff4000;
    --carousel-color-secondary: #d93300;
    --carousel-color-white: #ffffff;
}

.category {
    @apply flex flex-wrap gap-6 justify-center;
}

.category > * {
    @apply w-28 h-28 xl:w-48 xl:h-48;
}
</style>