window.addEventListener('load',drawScreen,false)
window.addEventListener('keydown',onkeydown,false)
window.addEventListener('keyup',onkeyup,false)

var strKeyEventType = "None";
var strKeyEventValue = "None";
function drawScreen() {
    var theCanvas = document.getElementById("GameCanvas");
    var context = theCanvas.getContext("2d");
    context.fillStyle = "#000000"
    context.fillRect(0,0,800,600)
    context.fillStyle = "#ffffff"		// 글자 색을 검은색으로 지정
    context.font = '25px Arial';		 //글자 크기를 25px Arial 폰트로 지정
    context.textBaseline = "top";
    context.fillText("입력된 키 : " + strKeyEventValue,5,5);
    context.fillText("키 입력 상태 : "+strKeyEventType,5,30);
}
function onkeydown(e) {
    strKeyEventType = e.type;
    strKeyEventValue = e.key;
    drawScreen();
}
function onkeyup(e) {
    strKeyEventType = e.type;
    strKeyEventValue = e.key;
    drawScreen();
}