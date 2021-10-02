<template>
    <span class="inline-block">{{ kaomoji }}</span>
</template>

<script>
const kaomoji_json = require("../assets/kaomoji.json")["kaomoji"];

export default {
    name: "Kaomoji",
    props: ["category"],
    data() {
        return {
            // Selected a random kaomoji from the selected category
            kaomoji: kaomoji_json[this.category][Math.floor(Math.random() * kaomoji_json[this.category].length)]
        }
    },
}
</script>
