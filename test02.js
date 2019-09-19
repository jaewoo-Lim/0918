document.writeln();

for(var i = 2; i < 10; i++)
{
	document.writeln("<br><br>" +i + "단 <br><br>");
	for(var j = 1; j < 10; j++)
	{
		document.write(i + "x" + j + "=" + i*j + "<br>")
	}
	document.writeln("");
}