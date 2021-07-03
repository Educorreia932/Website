<template>
    <div v-if="!$route.meta.plain_layout" id="app-content">
        <header class="pt-3">
            <nav class="space-x-3">
                <router-link class="tab" :to="{ name: 'home' }">Introduction</router-link>
                <router-link class="tab" :to="{ name: 'about_me' }">About Me</router-link>
                <router-link class="tab" :to="{ name: 'projects' }">Projects</router-link>
            </nav>
        </header>

        <main class="big-boy">
            <router-view></router-view>
        </main>

        <footer class="text-center py-5">
            2021 - Eduardo Correia
        </footer>
    </div>

    <div v-else>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'App',
}
</script>

<style lang="scss">
#app-content {
    @apply font-body bg-dark px-6 sm:px-10 md:px-12 text-base sm:text-lg;
    color: whitesmoke;
    line-height: 1.3;
    min-height: 100vh;

    h1 {
        @apply text-xl sm:text-2xl md:text-3xl lg:text-3xl;
    }

    a:link {
        @apply text-red-orange no-underline;
    }

    a:visited {
        @apply text-red-orange-dark;
    }

    a:hover {
        @apply text-red-orange-light;
    }
}
</style>

<style>
.tab {
    @apply inline-block text-white bg-dark-light !important;
    padding: 0.3em 1em;
}
</style>

