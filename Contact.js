function Reg() {
	//For First Name
	let fname = document.getElementById("Fname").value;
	if (fname == "") {
		document.getElementById("Fnamemsg").innerHTML = "Please Enter First Name..!";
		return false;
	}
	else {
		document.getElementById("Fnamemsg").innerHTML = "";
	}
	if (fname.length < 3 || fname.length > 15) {
		document.getElementById("Fnamemsg").innerHTML = "Name length 4-15 char..!";
		return false;
	}
	else {
		document.getElementById("Fnamemsg").innerHTML = "";
	}


	//For Last Name
	let lname = document.getElementById("Lname").value;
	if (lname == "") {
		document.getElementById("Lnamemsg").innerHTML = "Please Enter Last Name..!";
		return false;
	}
	else {
		document.getElementById("Lnamemsg").innerHTML = "";
	}


	//for Mobile Number
	let cnum = document.getElementById("Cnumber").value;
	if (cnum == "") {
		document.getElementById("mobilemsg").innerHTML = "Please Enter contact No..!";
		return false;
	}
	else {
		document.getElementById("mobilemsg").innerHTML = "";
	}
	if (isNaN(cnum)) {
		document.getElementById("mobilemsg").innerHTML = "Please Enter Number only..!";
		return false;
	}
	else {
		document.getElementById("mobilemsg").innerHTML = "";
	}

	//Number start with 6,7,8,9  if(cnum.charAt(0)<=6)
	if ((cnum.charAt(0) != 6) && (cnum.charAt(0) != 7) && (cnum.charAt(0) != 8) && (cnum.charAt(0) != 9)) {
		document.getElementById("mobilemsg").innerHTML = "Please Enter Valid contact..!";
		return false;
	}
	else {
		document.getElementById("mobilemsg").innerHTML = "";
	}

	//10 digit only  if(cnum.length!=10)
	if (cnum.length < 10 || cnum.length > 10) {
		document.getElementById("mobilemsg").innerHTML = "Please Enter 10 Digit No..!";
		return false;
	}
	else {
		document.getElementById("mobilemsg").innerHTML = "";
	}


	//For Email Id
	let email = document.getElementById("email").value;
	if (email == "") {
		document.getElementById("emailmsg").innerHTML = "Please Enter Email..!";
		return false;
	}
	else {
		document.getElementById("emailmsg").innerHTML = "";
	}
	if (email.charAt(email.length - 3) != "." && email.charAt(email.length - 4) != ".") {
		document.getElementById("emailmsg").innerHTML = "Please Enter Valid Email..!";
		return false;
	}
	else {
		document.getElementById("emailmsg").innerHTML = "";
	}


	//for Age
	let age = document.getElementById("age").value;
	if (age == "") {
		document.getElementById("agemsg").innerHTML = "Please Enter Age..!";
		return false;
	}
	else {
		document.getElementById("agemsg").innerHTML = "";
	}

	if (age > 100 || age < 10) {
		document.getElementById("agemsg").innerHTML = "Please Enter Age between 10-100.!";
		return false;
	}
	else {
		document.getElementById("agemsg").innerHTML = "";
	}





	//For Gender
	let gender = form1.gender.value;
	if (gender == "") {
		document.getElementById("gendermsg").innerHTML = "Please Select Gender..!";
		return false;
	}
	else {
		document.getElementById("gendermsg").innerHTML = "";
	}


}