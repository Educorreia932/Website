<template>
    <div>
        <h1>Anime & Manga 📺</h1>

        <p class="text-xl">These are my favorite anime and manga works.</p>

        <favorite-things category="anime/manga"/>
    </div>
</template>

<script>
import FavoriteThings from '../components/FavoriteThings.vue';

export default {
    name: "AnimeManga",
    components: {
        "favorite-things": FavoriteThings
    },
};
</script>

<style scoped>

</style>