var my_job = "학생";

switch(my_job)
{
	case "사장":
		money = 100000;
	break;
	case "아르바이트생":
		money = 1010000;
	break;
	case "학생":
		money = 102000;
	break;
	default:
		money = 100000;
	break;
}

document.writeln("");
document.writeln("현재 나의 금액은 "+money);