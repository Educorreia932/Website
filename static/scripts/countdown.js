// Set the date we're counting down to
const countDownDate = new Date("Jun 21, 2023").getTime();

// Update the count down every 1 second
let x = setInterval(function() {
	// Get today's date and time
	const now = new Date().getTime();

	// Find the distance between now and the count down date
	const distance = countDownDate - now;

	// Time calculations for days, hours, minutes and seconds
	const days = Math.floor(distance / (1000 * 60 * 60 * 24));
	const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	const seconds = Math.floor((distance % (1000 * 60)) / 1000);

	// Display the result in the element with id="demo"
	document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

	// If the count down is finished, write some text 
	if (distance < 0) {
		clearInterval(x);
		document.getElementById("countdown").innerHTML = "Finished";
	}
}, 1000);

function daysBetween(date1, date2) {
	// The number of milliseconds in one day
	const ONE_DAY = 1000 * 60 * 60 * 24;

	// Convert both dates to milliseconds
	const date1_ms = date1.getTime();
	const date2_ms = date2.getTime();

	// Calculate the difference in milliseconds
	const difference_ms = Math.abs(date1_ms - date2_ms);

	// Convert back to days and return
	return Math.round(difference_ms / ONE_DAY);
}

function fillProgressBar() {
	const el = document.getElementById("after");
	const today = new Date();
	const date1 = new Date(2018, 9, 8);
	const date2 = new Date(2023, 6, 21);
	const time1 = daysBetween(date1, date2);
	const time2 = daysBetween(date1, today);

	el.style.width = String((time2 / time1) * 100) + "%";

	document.getElementById("progress_percentage").innerHTML = el.style.width;
}

fillProgressBar();
