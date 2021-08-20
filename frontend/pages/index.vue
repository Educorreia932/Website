<template>
    <div class="flex-1 flex flex-col">
        <h1>
            Welcome to my website
            <wbr/>
            <kaomoji category="greeting"></kaomoji>
        </h1>

        <div class="text-center flex-1">
            <q class="italic inline mx-auto pl-2">Programming is like alchemy and I turn 0s and 1s into things in the
                internet</q>
            ⚗️
        </div>


        <figure class="text-center flex-1 self-stretch">
            <img src="https://count.getloli.com/get/@Educorreia932"/>
            <figcaption>Number of visits so far</figcaption>
        </figure>
    </div>
</template>

<script>
import Kaomoji from "@/components/Kaomoji";

export default {
    name: "Home",
        head: {
        title: 'Home | Eduardo Correia',
        meta: [
            {name: "twitter:title", content: "Home | Eduardo Correia"},
            {property: "og:title", content: "Home | Eduardo Correia"},
        ],
    },
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

