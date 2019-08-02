function days_between(date1, date2) {
	// The number of milliseconds in one day
	var ONE_DAY = 1000 * 60 * 60 * 24;
	// Convert both dates to milliseconds
	var date1_ms = date1.getTime();
	var date2_ms = date2.getTime();
	// Calculate the difference in milliseconds
	var difference_ms = Math.abs(date1_ms - date2_ms);
	// Convert back to days and return
	return Math.round(difference_ms / ONE_DAY);
}

function fill() {
	var el = document.getElementById("after");
	var today = new Date();
	var date1 = new Date(2018, 8, 9);
	var date2 = new Date(2024, 21, 6);
	var time1 = days_between(date1, date2);
	var time2 = days_between(date1, today);

	el.style.width = String((time2 / time1) * 100) + "%";
}