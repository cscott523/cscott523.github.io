function startTime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	
	var dd = today.getDate();
	var mm = today.getMonth() + 1;
	var yyyy = today.getFullYear();
	
	dd = checkTime(dd);
	mm = checkTime(mm);
	m = checkTime(m);
	s = checkTime(s);
	var todayTime = h + ":" + m + ":" + s;
	var todayDate = mm+'/'+dd+'/'+yyyy;
	document.getElementById('clock').innerHTML = todayTime;
	document.getElementById('date').innerHTML = todayDate;
	var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	if( i < 10 ) { i = "0" + i};
	return i;
}