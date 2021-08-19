<template>
    <div>
        <h1>Music 🎹</h1>

        <p class="text-xl">These are my favorite music albums.</p>

        <p><strong>Favorite genres:</strong> <em>Alternative rock</em>, <em>alternative metal</em>, <em>acid jazz</em>,
            <em>portuguese rock</em> and <em>psychedelic</em></p>

        <favorite-things category="music"/>
    </div>
</template>

<script>
import FavoriteThings from '../components/FavoriteThings.vue';

export default {
    name: "Music",
    components: {
        "favorite-things": FavoriteThings
    },
};
</script>

<style scoped>

</style>