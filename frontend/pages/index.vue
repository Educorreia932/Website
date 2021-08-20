<template>
    <div class="flex-1 flex flex-col">
        <h1>
            Welcome to my website
            <wbr/>
            <kaomoji category="greeting"></kaomoji>
        </h1>

        <div class="flex-1"></div>

        <ul id="navigation-icons">
            <nuxt-link to="about_me">
                <font-awesome-icon :icon="['fa', 'address-card']" size="4x"/>
            </nuxt-link>
            <nuxt-link to="projects">
                <font-awesome-icon :icon="['fa', 'folder']" size="4x"/>
            </nuxt-link>
            <nuxt-link to="travel">
                <font-awesome-icon :icon="['fa', 'globe-europe']" size="4x"/>
            </nuxt-link>
            <nuxt-link to="music">
                <font-awesome-icon :icon="['fa', 'music']" size="4x"/>
            </nuxt-link>
            <nuxt-link to="gaming">
                <font-awesome-icon :icon="['fa', 'gamepad']" size="4x"/>
            </nuxt-link>
            <nuxt-link to="anime">
                <font-awesome-icon :icon="['fas', 'tv']" size="4x"/>
            </nuxt-link>
        </ul>

        <div class="flex-1"></div>

        <figure class="text-center flex-0 self-stretch">
            <img src="https://count.getloli.com/get/@Educorreia932" alt="Visits count"/>
            <figcaption>Number of visits so far</figcaption>
        </figure>
    </div>
</template>

<script>
import Kaomoji from "@/components/Kaomoji";

export default {
    name: "Home",
    head: {
        title: 'Home | Eduardo Correia',
        meta: [
            {name: "twitter:title", content: "Home | Eduardo Correia"},
            {property: "og:title", content: "Home | Eduardo Correia"},
        ],
    },
    components: {
        "kaomoji": Kaomoji,
    },
};
</script>

<style scoped>
#navigation-icons {
    @apply flex flex-row space-x-7 justify-center;
}

#navigation-icons > * {
    @apply transition-all hover:text-2xl;
}
</style>

