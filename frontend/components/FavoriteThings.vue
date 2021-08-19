<template>
    <section class="category">
        <div v-for="(item, name) in favorite_things[category]" :key="item" class="card">
            <img :src="require(`@/assets/images/favorite_things/${item}`)" :alt="name"
                 class="w-full h-full object-cover rounded-md"/>

            <div class="hovering">
                <p class="m-3">{{ name }}</p>
            </div>
        </div>
    </section>
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
            favorite_things: favorite_things_json, // TODO: Move to content
        };
    },
};
</script>

<style>
.category {
    @apply flex flex-wrap gap-6 justify-center;
}

.card {
    @apply w-28 h-28 md:w-48 md:h-48 relative;
}

.hovering {
    @apply transition-all absolute bottom-0 text-sm h-full w-full align-bottom rounded-md bg-black bg-opacity-60 opacity-0;
}

.hovering:hover {
    @apply opacity-100;
}
</style>