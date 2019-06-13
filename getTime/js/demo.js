var getDay = function(inc){
	const date = new Date();
	date.setHours(date.getHours() + inc);
	const month = date.getMonth()+1;	//月
	const day = date.getDate();		//日付
	const time = date.getHours();	//時間

	const dayOfWeek = date.getDay() ;	// 曜日(数値)
	const dayOfWeekStr = [ "日", "月", "火", "水", "木", "金", "土" ][dayOfWeek] ;	// 曜日(日本語表記)

	
	return month + '月' + day + '日(' + dayOfWeekStr + ')' + time + '時';
}

console.log(getDay(-1*24*14));
console.log(getDay(-1*24*13));
console.log(getDay(-1*24*12));