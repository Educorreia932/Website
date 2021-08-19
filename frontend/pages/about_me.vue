<template>
    <section>
        <h1>
            <nuxt-link to="/" class="no-underline">Eduardo Correia</nuxt-link>
        </h1>

        <p>
            Currently attending a <em>Master in Informatics and Computing Engineering</em> 5-year course in
            <a href="https://sigarra.up.pt/feup/pt/web_page.inicial" target="_blank">FEUP</a>.
        </p>

        <p>
            Interested in
            <nuxt-link to="projects">building things</nuxt-link> 📝,
            <nuxt-link to="travel">travelling</nuxt-link> 🌍,
            <nuxt-link to="music">music</nuxt-link> 🎹,
            <nuxt-link to="gaming">gaming</nuxt-link> 🎮 and
            <nuxt-link to="anime">anime & manga</nuxt-link> 📺.
        </p>

        <p>Online, I usually go by the username <b>Educorreia932</b> or <b>Skelozard</b>.</p>

        <!-- Social Media-->
        <section id="social-media" class="flex space-x-3 place-content-center">
            <a href="https://github.com/Educorreia932" target="_blank">
                <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
            </a>
            <a href="https://steamcommunity.com/id/Skelozard" target="_blank">
                <font-awesome-icon :icon="['fab', 'steam']" size="2x"/>
            </a>
            <a href="https://open.spotify.com/user/skelozard" target="_blank">
                <font-awesome-icon :icon="['fab', 'spotify']" size="2x"/>
            </a>
            <a
                href="https://www.linkedin.com/in/eduardo-correia-7a608216a"
                target="_blank"
            >
                <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/>
            </a>
            <a href="https://www.instagram.com/educorreia932" target="_blank">
                <font-awesome-icon :icon="['fab', 'instagram']" size="2x"/>
            </a>
            <a href="https://discord.bio/p/skelozard" target="_blank">
                <font-awesome-icon :icon="['fab', 'discord']" size="2x"/>
            </a>
            <a href="mailto:educorreia932@gmail.com" target="_blank">
                <font-awesome-icon :icon="['fas', 'envelope']" size="2x"/>
            </a>
        </section>
    </section>
</template>

<script>
import Kaomoji from "@/components/Kaomoji";
import Globe from "@/components/Globe";
import FavoriteThings from "@/components/FavoriteThings";

export default {
    name: "AboutMe",
    components: {
        kaomoji: Kaomoji,
        globe: Globe,
        "favorite-things": FavoriteThings,
    },
};
</script>

<style scoped>
h3 {
    @apply text-center;
}

img {
    @apply block mx-auto;
}

ul {
    text-align: center;
    list-style: inside none;
}

#social-media a {
    @apply hover:text-2xl transition-all;
}
</style>