var myVar = setInterval(function () {
    myTimer()
}, 1000);


function myTimer() {
    var d = new Date();
    var t = d.toLocaleTimeString();
    $("#time").html('<div id="time">' + t + '</div>');
}


var dayOfWeek = [];
dayOfWeek = ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];

var Moonth = [];
Moonth = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];

//Wtorek','Środa','Czwartek','Piątek','Sobota','Niedziela'


function myTimer() {

    var d = new Date();
    var t = d.toLocaleTimeString();


    console.log(d);
    var m = d.getMinutes();

    var LA = d.getHours() - 8;
    var NY = d.getHours() - 5;
    var LO = d.getHours();
    var PA = d.getHours() + 1;
    var MS = d.getHours() + 3;
    var PE = d.getHours() + 8;
    var TK = d.getHours() + 9;

    var DAY = d.getDay();
    var dayOfMonnth = d.getDate();
    var MonntH = d.getMonth();
    var Year = d.getFullYear();



    $("#time").html('<div id="time">' + t + '</div>');
    $("#LA").html('<div><p>' + LA + ":" + m + '</p></div>');
    $("#NY").html('<div><p>' + NY + ":" + m + '</p></div>');
    $("#LO").html('<div><p>' + LO + ":" + m + '</p></div>');
    $("#PA").html('<div><p>' + PA + ":" + m + '</p></div>');
    $("#MS").html('<div><p>' + MS + ":" + m + '</p></div>');
    $("#PE").html('<div><p>' + PE + ":" + m + '</p></div>');
    $("#TK").html('<div><p>' + TK + ":" + m + '</p></div>');
    $("#DAY").html('<div><p>' + dayOfWeek[DAY] + "," + dayOfMonnth + " " + Moonth[MonntH] + " " +
        +Year + '</p></div>');
}
