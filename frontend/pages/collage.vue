<template>
    <div id="content">
        <sidebar-menu :menu="menu"/>
    </div>
</template>

<script>
import {SidebarMenu} from 'vue-sidebar-menu';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import '@fortawesome/fontawesome-free/css/all.css';

export default {
    name: "Collage",
    layout: "empty",
    head: {
        title: "A Beautiful Collage",
    },
    components: {
        SidebarMenu
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
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@200&display=swap');

#content {
    font-family: 'Inter', sans-serif;
}
</style>