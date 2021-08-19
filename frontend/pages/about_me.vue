<template>
    <div>
        <h1>
            Get to know me better <kaomoji category="sympathy"></kaomoji>
        </h1>

        <section>
            <p>My name is Eduardo and this is my webpage.</p>

            <p>
                I don't know how you ended up here and, since you might not know me,
                here's a brief heads up.
            </p>

            <p>
                I'm currently attending the third year of a "Master in Informatics and
                Computing Engineering" 5-year course in
                <a href="https://sigarra.up.pt/feup/pt/web_page.inicial" target="_blank"
                >FEUP</a
                >
                (Faculty of Engineering of University of Porto).
            </p>

            <p>
                My main hobbies are to watch <i>Youtube</i>/anime, browse <i>reddit</i>,
                play video-games, tabletop games or role-playing games (mainly
                <i>Dungeons & Dragons</i>), code (most of the time in <b>C/C++</b>,
                <b>C#</b>(Unity) <b>Python</b>, <b>Java</b> or
                <del>the Holy Trinity</del>
                <b>HTML</b>/<b>CSS</b>/<b>Javascript</b>), listen to music and
                occasionally draw, do some image editing or read a book.
            </p>

            <p>
                Online, I usually go by the nickname <b>Educorreia932</b> or
                <b>Skelozard</b>.
            </p>
        </section>
    </div>
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
</style>