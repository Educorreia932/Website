<template>
    <div>
        <img :src="image" alt="A stamp">
    </div>
</template>

<script>
export default {
    name: "Stamp",
    props: {
        image: String
    }
}
</script>

<style scoped>

</style>