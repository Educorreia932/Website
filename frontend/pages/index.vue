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

        <!-- Avatar-->
        <img id="avatar" alt="Avatar" src="@/assets/images/Avatar.png" width="400"
             class="block mx-auto py-4 max-w-full"/>

        <nuxt-link to="about_me">
            Get to know me better <kaomoji category="sympathy"></kaomoji>
        </nuxt-link>
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

