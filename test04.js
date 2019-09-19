var arrayInt = new Array();

arrayInt.push(10);
arrayInt.push(547);
arrayInt.push(140);
arrayInt.push(2);

for(var i = 0; i < arrayInt.length; i++) {
	document.writeln(i + "번 인덱스의 원소 값 : " + arrayInt[i]+"<br>");
}

document.writeln("arrayInt 배열 원소 수 : " + arrayInt.length);