<template>
    <div>
        <img :src="stamp.source" :alt="stamp.name">
    </div>
</template>

<script>
export default {
    name: "Stamp",
    props: [
        "stamp"
    ]
}
</script>

<style scoped>

</style>