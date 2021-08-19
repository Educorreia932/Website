<template>
    <div>
        <h1>Gaming 🎮</h1>

        <p class="text-xl">These are my favorite games.</p>

        <p><strong>Favorite genres:</strong> <em>RPG</em>, <em>roguelike</em>, <em>strategy</em>, <em>puzzle</em>,
            <em>sandbox</em> and <em>adventure</em></p>

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