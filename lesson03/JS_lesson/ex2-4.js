var now;
var seconds;
var iroNum;
	
now = new Date();
seconds = now.getSeconds();

iroNum = seconds % 4;
document.write(seconds,"秒 <br>")
document.write(iroNum);

switch (iroNum){
	case 0:
		document.body.style.backgroundColor = "white";
	break;
	
	case 1:
		document.body.style.backgroundColor = "yellow";
	break;
	
	case 2:
		document.body.style.backgroundColor = "red";
	break;
	
	case 3:
		document.body.style.backgroundColor = "green";
	break;
}
