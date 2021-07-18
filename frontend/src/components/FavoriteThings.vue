<template>
    <div v-for="category in favorite_things" :key="category" class="w-4/6 m-auto">
        <h3 class="text-center">Favorite things</h3>

        <div class="category">
            <img v-for="item in category"
             :key="item"
             :src="require(`@/assets/images/favorite_things/${item}`)"
             alt=""
            >
        </div>
    </div>
</template>

<script>
const favorite_things_json = require("../assets/favorite_things.json");

export default {
    name: "FavoriteThings",
    data() {
        return {
            "favorite_things": favorite_things_json,
        }
    }
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
    @apply w-52 h-52 object-cover rounded-md;
}
</style>