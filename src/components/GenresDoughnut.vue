<script>
import {Doughnut, mixins} from "vue-chartjs";

export default {
	extends: Doughnut,
	name: "GenresDoughnut",
	props: ["chartData"],
	mixins: [mixins.reactiveProp],
	data() {
		return {
			chartOptions: {
				legend: {
					display: false
				},
				responsive: true,
			}
		}
	},
	mounted() {
		this.renderChart(this.chartData, this.chartOptions)
	},
}
</script>
