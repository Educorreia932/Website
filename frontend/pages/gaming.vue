<template>
    <div>
        <h1>Gaming 🎮</h1>

        <p class="text-xl">These are my favorite games.</p>

        <favorite-things category="games"/>
    </div>
</template>

<script>
import FavoriteThings from '../components/FavoriteThings.vue';

export default {
    name: "Gaming",
    components: {
        "favorite-things": FavoriteThings
    },
};
</script>

<style scoped>

</style>