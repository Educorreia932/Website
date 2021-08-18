<template>
    <main id="content">
        <sidebar-menu :menu="menu"/>

        <modal ref="informationModal">
            Information
        </modal>

        <section id="stamps" class="text-center">
            <button @click="$refs.informationModal.openModal()">Click Me</button>
        </section>
    </main>
</template>

<script>
// Sidebar Menu
import {SidebarMenu} from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Modal from "@/components/Modal.vue";

export default {
    name: "Collage",
    layout: "empty",
    head: {
        title: "A Beautiful Collage",
    },
    components: {
        "sidebar-menu": SidebarMenu,
        "modal": Modal
    },
    data() {
        return {
            menu: [
                {
                    header: true,
                    title: 'A Beautiful Collage',
                    hiddenOnCollapse: true
                },
                {
                    title: 'Add a new stamp',
                    icon: 'fa fa-plus'
                },
                {
                    title: 'Download collage',
                    icon: 'fa fa-file-download'
                },
                {
                    title: 'Check timeline',
                    icon: 'far fa-hourglass'
                },
                {
                    title: 'Consult information',
                    icon: 'fa fa-info',
                }
            ]
        }
    },
    mounted() {
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');

#content {
    font-family: 'Inter', sans-serif;
}
</style>