<template>
    <div id="content">
        <header>
            <div id="navigation-div">
                <nuxt-link to="/">
                    <font-awesome-icon :icon="['fas', 'home']"/>
                </nuxt-link>

                <button id="navigation-button" @click="$refs.navigationModal.openModal();">
                    <font-awesome-icon :icon="['fas', 'bars']"/>
                </button>
            </div>

            <modal id="navigation-modal" ref="navigationModal">
                <template v-slot:body>
                    <nav class="flex flex-col">
                        <nuxt-link to="/">Home</nuxt-link>
                        <nuxt-link to="about_me">About Me</nuxt-link>
                        <nuxt-link to="projects">Projects</nuxt-link>
                        <nuxt-link to="travel">Travelling</nuxt-link>
                        <nuxt-link to="music">Music</nuxt-link>
                        <nuxt-link to="gaming">Gaming</nuxt-link>
                        <nuxt-link to="anime">Anime & Manga</nuxt-link>
                    </nav>
                </template>
            </modal>
        </header>

        <main>
            <nuxt/>
        </main>

        <footer class="text-center py-5">
            <portal-target name="footer"/>
            &copy; 2021 - Eduardo Correia
        </footer>
    </div>
</template>

<script>
import Modal from "@/components/Modal";

export default {
    components: {
        "modal": Modal
    },
    watch: {
        $route() {
            this.$refs.navigationModal.closeModal();
        }
    },
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
        @apply w-full flex-shrink-0;
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

    #navigation-div {
        @apply text-3xl m-5 float-right;
    }

    #navigation-button {
        @apply text-white transition-all cursor-pointer border-none bg-transparent text-3xl;
    }

    #navigation-modal .modal {
        @apply transition-all;

        &__dialog {
            @apply bg-dark-light;
        }

        &__close {
            @apply hidden;
        }
    }

    #navigation-modal nav a {
        @apply no-underline;
    }
}
</style>
