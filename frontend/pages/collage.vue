<template>
    <main id="content">
        <sidebar-menu :menu="menu"/>

        <modal ref="informationModal">
            <template v-slot:header>
                <h1>Information</h1>
            </template>

            <template v-slot:body>
                <em>A Beautiful Collage</em> consists in a social experiment in which users are welcome to post
                images (stamps) on a collaborative collage.

                <p>
                    <strong>Warning:</strong> Since there isn't any type of filter on the submitted images, beware of
                    <strong class="text-red-600">NSFW/NSFL</strong> content. By closing this modal you consent to be by
                    your own risk.
                </p>

                <div class="text-center">
                    <img src="https://count.getloli.com/get/@Educorreia" alt=":name"/>
                    <p class="text-center">Stamps submitted so far</p>
                </div>
            </template>
        </modal>

        <section id="stamps" class="text-center">
            <stamp v-for="stamp in stamps" :key="stamp" :stamp="stamp"/>
        </section>
    </main>
</template>

<script>
// Sidebar Menu
import {SidebarMenu} from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import '@fortawesome/fontawesome-free/css/all.css';

import Modal from "@/components/Modal.vue";

import Stamps from "static/api/Collage";
import Stamp from '../components/Stamp.vue';

export default {
    name: "Collage",
    layout: "empty",
    head: {
        title: "A Beautiful Collage",
    },
    components: {
        "sidebar-menu": SidebarMenu,
        "modal": Modal,
        "stamp": Stamp
    },
    data() {
        return {
            stamps: [],
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
        this.getData();

        this.$refs.informationModal.openModal();
    },
    methods: {
        getData() {
            Stamps.list().then((response) => {
                for (let project of response.data)
                    project.image_url = "http://localhost:8000" + project.image_url;

                this.stamps = response.data;
            });
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');

#content {
    font-family: 'Inter', sans-serif;
}
</style>