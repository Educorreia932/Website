<template>
    <h1>Welcome to my website
        <kaomoji category="greeting"></kaomoji>
    </h1>

    <div class="text-center">
        <q class="italic inline mx-auto pl-2">Programming is like alchemy and I turn 0s and 1s into things in the internet</q> ⚗️
    </div>

    <!-- Avatar-->
    <img id="avatar" alt="Avatar" src="@/assets/images/Avatar.png" width="400" height="400" class="block mx-auto py-4">

    <section class="text-center my-10">
        <p>Time to end university course ⏲</p>

        <progress-bar :width=width></progress-bar>
        <countdown :end_date=end_date></countdown>
    </section>

    <section id="social-media" class="flex space-x-3 place-content-center">
        <a href="https://github.com/Educorreia932" target="_blank">
            <font-awesome-icon :icon="['fab', 'github']" size="2x"/>
        </a>
        <a href="https://steamcommunity.com/id/Skelozard" target="_blank">
            <font-awesome-icon :icon="['fab', 'steam']" size="2x"/>
        </a>
        <a href="https://open.spotify.com/user/skelozard" target="_blank">
            <font-awesome-icon :icon="['fab', 'spotify']" size="2x"/>
        </a>
        <a href="https://www.linkedin.com/in/eduardo-correia-7a608216a" target="_blank">
            <font-awesome-icon :icon="['fab', 'linkedin']" size="2x"/>
        </a>
        <a href="https://www.instagram.com/educorreia932" target="_blank">
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x"/>
        </a>
        <a href="https://discord.bio/p/skelozard" target="_blank">
            <font-awesome-icon :icon="['fab', 'discord']" size="2x"/>
        </a>
        <a href="mailto:educorreia932@gmail.com" target="_blank">
            <font-awesome-icon :icon="['fas', 'envelope']" size="2x"/>
        </a>
    </section>
</template>

<script>
import Kaomoji from "@/components/Kaomoji";
import ProgressBar from "@/components/ProgressBar.vue"
import Countdown from "@/components/Countdown"

const start_date = new Date(2018, 9, 8);
const end_date = new Date(2023, 6, 21);
const today = new Date();

export default {
    name: 'Home',
    components: {
        "kaomoji": Kaomoji,
        "progress-bar": ProgressBar,
        "countdown": Countdown
    },
    data() {
        return {
            width: this.calculatePercentage(),
            start_date: start_date,
            end_date: end_date,
            today: today
        }
    },
    methods: {
        daysBetween(date1, date2) {
            // The number of milliseconds in one day
            const ONE_DAY = 1000 * 60 * 60 * 24;

            // Convert both dates to milliseconds
            const date1_ms = date1.getTime();
            const date2_ms = date2.getTime();

            // Calculate the difference in milliseconds
            const difference_ms = Math.abs(date1_ms - date2_ms);

            // Convert back to days and return
            return Math.round(difference_ms / ONE_DAY);
        },
        calculatePercentage() {
            const time1 = this.daysBetween(start_date, end_date);
            const time2 = this.daysBetween(start_date, today);

            return ((time2 / time1) * 100).toFixed(4);
        }
    },
}
</script>

<style scoped>
#social-media a {
    @apply text-white hover:text-2xl transition-all;
}

q {
    color: #AAA;
    border-left: 3px solid whitesmoke;
}
</style>

