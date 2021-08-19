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

        <section class="text-center my-10">
            <p>Time to end university course ⏲</p>

            <progress-bar :width="width" class="xs:w-full sm:w-full md:w-9/12"></progress-bar>
            <countdown :end_date="end_date"></countdown>
        </section>

        <nuxt-link to="about_me">
            Get to know me better <kaomoji category="sympathy"></kaomoji>
        </nuxt-link>
    </div>
</template>

<script>
import Kaomoji from "@/components/Kaomoji";
import ProgressBar from "@/components/ProgressBar.vue";
import Countdown from "@/components/Countdown";

const start_date = new Date(2018, 9, 8);
const end_date = new Date(2023, 6, 21);
const today = new Date();

export default {
    name: "Home",
    components: {
        "kaomoji": Kaomoji,
        "progress-bar": ProgressBar,
        "countdown": Countdown,
    },
    data() {
        return {
            width: this.calculatePercentage(),
            start_date: start_date,
            end_date: end_date,
            today: today,
        };
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
        },
    },
};
</script>

<style scoped>
q {
    color: #aaa;
    border-left: 3px solid whitesmoke;
}
</style>

