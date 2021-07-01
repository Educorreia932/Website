<template>
    <div v-if="!$route.meta.plain_layout" id="app-content">
        <header class="pt-3">
            <nav class="space-x-3">
                <router-link class="tab" :to="{ name: 'home' }">Introduction</router-link>
                <router-link class="tab" :to="{ name: 'about_me' }">About Me</router-link>
                <router-link class="tab" :to="{ name: 'projects' }">Projects</router-link>
            </nav>
        </header>

        <main>
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

<style>
#app-content {
    @apply font-body bg-dark px-12;
    color: whitesmoke;
    line-height: 1.3;
    font-size: large;
}

#app-content h1 {
    font-size: 2em;
}

#app-content a:link {
    @apply text-red-orange;
    text-decoration: none;
}

#app-content a:visited {
    @apply text-red-orange-dark;
}

#app-content a:hover {
    @apply text-red-orange-light;
}

.tab {
    @apply inline-block text-white bg-dark-light !important;
    padding: 0.3em 1em;
}
</style>

