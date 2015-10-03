function alltab()

{
	alert("Welcome! Keep track and take control!")
}

//alltab();

prompt("Enter your time in months of when you would like to finish this task")


function reminder(month) {

	if(month > 12){

		//years = (month/12);

		var years = Math.floor(month/12);

		var month = month%12;

		alert("You still have " + years + " years and " + month + " months left!");
	}
else{

 var month = 12 - month;
 alert("You still have " + month + " months left!");
}
}
document.getElementById("demo").innerHTML = myFunction(4, 3);
//return reminder();

