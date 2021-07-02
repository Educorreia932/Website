<template>
    <Menu>
        <nav class="flex-col">
            <a>
                <font-awesome-icon :icon="['fas', 'plus']"/>
                Add a new stamp</a>
            <a>
                <font-awesome-icon :icon="['fas', 'eye']"/>
                Check stamps</a>
            <a>
                <font-awesome-icon :icon="['fas', 'hourglass']" />
                Check timeline</a>
            <a>
                <font-awesome-icon :icon="['fas', 'download']"/>
                Download collage</a>
            <a>
                <font-awesome-icon :icon="['fas', 'info-circle']"/>
                Information</a>
        </nav>
    </Menu>

    <canvas>

    </canvas>
</template>

<script>
import {Menu} from 'vue3-burger-menu'

export default {
    name: "Collage",
    components: {
        Menu
    }
}
</script>

<style scoped>
nav a {
    @apply flex-row;
}

</style>