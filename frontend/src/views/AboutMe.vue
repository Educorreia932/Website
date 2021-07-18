<template>
    <h1>
        Get to know me better
        <kaomoji category="sympathy"></kaomoji>
    </h1>

    <section>
        <p>My name is Eduardo, and this is my webpage.</p>

        <p>I don't know how you ended up here and, since you might not know me, here's a brief heads up.</p>

        <p>I'm currently attending the third year of a "Master in Informatics and Computing Engineering" 5-year
            course in
            <a href="https://sigarra.up.pt/feup/pt/web_page.inicial" target="_blank">FEUP</a>
            (Faculty of Engineering of University of Porto).</p>

        <p>My main hobbies are to watch <i>Youtube</i>/anime, browse <i>reddit</i>, play video-games, tabletop games
            or role-playing games (mainly <i>Dungeons & Dragons</i>), code (most of the time in <b>C/C++</b>, <b>C#</b>(Unity)
            <b>Python</b>, <b>Java</b> or
            <del>the Holy Trinity</del>
            <b>HTML</b>/<b>CSS</b>/<b>Javascript</b>), listen to music and occasionally draw, do some image editing
            or read a book.
        </p>

        <p>
            Online, I usually go by the nickname <b>Educorreia932</b> or <b>Skelozard</b>.<br>
            I'm guessing it's fairly obvious to see where the first nickname comes from (the <b>932</b> part was
            just
            because there were already 931 "Eduardo's" in a game I created an account many years ago and it sticked
            since).<br>
            About the second one, it's a contraction between <b>Skeleton</b> and <b>Lizard</b> (my favorite animal)
            /
            <b>Wizard</b> (my favorite RPG class), but also the name of a <a
            href="https://pokegods-or-fakemon.fandom.com/wiki/Skelozard" target="_blank">fake pokémon</a>
            apparently.<br>
            I sometimes use <b>Skelozard1</b> in platforms where an account named <b>Skelozard</b> already exists
            <del>curse you Skelozardε</del>
            .
        </p>
    </section>

    <!-- Visited countries -->
    <h3>Visited countries 🌍</h3>

    <section id="countries">
        <div class="flags">
            <country-flag country='pt' size='big' class="flag"/>
            <country-flag country='es' size='big' class="flag"/>
            <country-flag country='fr' size='big' class="flag"/>
            <country-flag country='gb' size='big' class="flag"/>
            <country-flag country='it' size='big' class="flag"/>
            <country-flag country='de' size='big' class="flag"/>
        </div>

        <globe width=400 height=400 speed=0.005 id="globe"></globe>

        <div class="flags">
            <country-flag country='be' size='big' class="flag"/>
            <country-flag country='pl' size='big' class="flag"/>
            <country-flag country='ch' size='big' class="flag"/>
            <country-flag country='cz' size='big' class="flag"/>
            <country-flag country='ie' size='big' class="flag"/>
        </div>
    </section>

    <!-- Favorite things-->
    <favorite-things></favorite-things>
</template>

<script>
import Kaomoji from "@/components/Kaomoji";
import Globe from "@/components/Globe";
import CountryFlag from 'vue-country-flag-next'
import FavoriteThings from "@/components/FavoriteThings";

export default {
    name: "AboutMe",
    components: {
        "kaomoji": Kaomoji,
        "globe": Globe,
        "country-flag": CountryFlag,
        "favorite-things": FavoriteThings
    }
}
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

.flags {
    @apply hidden sm:flex flex-col space-y-5 place-content-center;
}

.flag {
    border-radius: 8px 8px;
}

#countries {
    @apply flex flex-row sm:space-x-16 place-content-center;
    height: 400px;
}
</style>