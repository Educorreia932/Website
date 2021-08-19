<template>
    <div>
        <main>
            <Nuxt/>
        </main>

        <footer class="text-center py-5">2021 - Eduardo Correia</footer>
    </div>
</template>

<style lang="scss">
body {
    @apply font-body bg-dark px-6 sm:px-10 md:px-12 text-base sm:text-lg;
    color: whitesmoke;
    line-height: 1.3;
}

h1 {
    @apply text-white text-xl sm:text-2xl md:text-3xl lg:text-3xl m-0 py-5;
}

strong {
    @apply text-white;
}

a:link {
    @apply text-white;
}

a:visited {
    @apply text-white;
}

a:hover {
    @apply text-gray-200;
}
</style>

<style>
.tab {
    @apply inline-block text-white bg-dark-light !important;
    padding: 0.3em 1em;
}
</style>