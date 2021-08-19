<template>
    <div>
        <h1>
            Welcome to my website
            <wbr/>
            <kaomoji category="greeting"></kaomoji>
        </h1>

        <div class="text-center">
            <q class="italic inline mx-auto pl-2">Programming is like alchemy and I turn 0s and 1s into things in the
                internet</q>
            ⚗️
        </div>

        <div class="text-center">
            <nuxt-link to="about_me" class="text-2xl no-underline hover:underline">
                <img id="avatar" alt="Avatar" src="@/assets/images/Avatar.png" width="400"
                     class="py-4 max-w-full transform hover:scale-90 transition-all"/>
                <br>
                <span >Get to know me better</span>
                <font-awesome-icon :icon="['fas', 'external-link-alt']" />
            </nuxt-link>
        </div>
    </div>
</template>

<script>
import Kaomoji from "@/components/Kaomoji";

export default {
    name: "Home",
    components: {
        "kaomoji": Kaomoji,
    },
};
</script>

<style scoped>
q {
    color: #aaa;
    border-left: 3px solid whitesmoke;
}
</style>

