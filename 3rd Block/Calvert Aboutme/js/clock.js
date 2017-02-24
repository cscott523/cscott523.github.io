function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	
	var month = today.getMonth();
	var d = today.getDate();
	var day = today.getDay();
	var y = today.getFullYear();
	
	months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'Jully', 'August', 'September', 'October', 'November', 'December');
	
	days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
	
	d = checkTime(d);
	
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
	document.getElementById('date').innerHTML = days[day] + ' ' + months[month] + ' ' + d + ' ' + y;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if (i < 10) { i = "0" + i};
	return i;
}