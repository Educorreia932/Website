<template>
    <div>
        <h1>Visited countries 🌍</h1>

        <p class="text-xl">These are the countries I've visited so far.</p>
        <p class="text-base bg-dark-light p-3 rounded mx-10"><strong>Note:</strong> No, I've not visited <a
            href="https://en.wikipedia.org/wiki/French_Guiana" target="_blank">French Guiana</a>, but it's highlighted
            because it's part of France and I and haven't figured out how to individually remove it ¯\_(ツ)_/¯</p>

        <section id="countries">
            <div class="flags">
                <country-flag country="pt" size="big" class="flag"/>
                <country-flag country="es" size="big" class="flag"/>
                <country-flag country="fr" size="big" class="flag"/>
                <country-flag country="gb" size="big" class="flag"/>
                <country-flag country="it" size="big" class="flag"/>
                <country-flag country="de" size="big" class="flag"/>
            </div>

            <globe width="400" height="400" speed="0.005" id="globe"></globe>

            <div class="flags">
                <country-flag country="be" size="big" class="flag"/>
                <country-flag country="pl" size="big" class="flag"/>
                <country-flag country="ch" size="big" class="flag"/>
                <country-flag country="cz" size="big" class="flag"/>
                <country-flag country="ie" size="big" class="flag"/>
            </div>
        </section>
    </div>
</template>

<script>
import Globe from "@/components/Globe";

export default {
    name: "Travelling",
    head: {
        title: 'Travelling | Eduardo Correia',
        meta: [
            {name: "twitter:title", content: "Travelling | Eduardo Correia"},
            {property: "og:title", content: "Travelling | Eduardo Correia"},
        ],
    },
    components: {
        "globe": Globe,
    },
};
</script>


<style scoped>
.flags {
    @apply hidden sm:flex flex-col space-y-5 place-content-center;
}

.flag {
    border-radius: 8px 8px;
}

#countries {
    @apply flex flex-row sm:space-x-16 place-content-center my-12;
    height: 400px;
}
</style>