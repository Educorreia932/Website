<template>
    <div id="content">
        <header>
            <button @click="$refs.navigationModal.openModal();">Menu</button>

            <modal ref="navigationModal">
                <template v-slot:body>
                    <nav>
                        Hello
                    </nav>
                </template>
            </modal>
        </header>

        <main>
            <nuxt/>
        </main>

        <footer class="text-center py-5">
            <portal-target name="footer"/>
            2021 - Eduardo Correia
        </footer>
    </div>
</template>

<script>
import Modal from "@/components/Modal.vue";

export default {
    components: {
        "modal": Modal
    }
}
</script>

<style lang="scss">
#content {
    @apply font-body bg-dark text-base sm:text-lg min-h-screen flex flex-col;
    color: whitesmoke;
    line-height: 1.3;

    main {
        @apply px-6 sm:px-10 md:px-12 flex-1 flex flex-col;
    }

    footer {
        @apply w-full;
        flex-shrink: 0;
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
}
</style>
