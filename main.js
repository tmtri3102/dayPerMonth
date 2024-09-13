function countDays() {
	let result = document.getElementById("result");
	let month = +document.getElementById("month").value; // vẫn phải ó (+) để nhận diện số
	switch (month) {
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			result.innerHTML = `Tháng ${month} có 31 ngày`;
			break;
		case 2:
			result.innerHTML = `Tháng ${month} có 28 hoặc 29 ngày`;
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			result.innerHTML = `Tháng ${month} có 30 ngày`;
			break;
	}
	console.log(month);
}
