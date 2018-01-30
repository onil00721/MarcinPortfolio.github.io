var znak = false; // false= wstaw kółko, true wstaw krzyżyk
var jeden = false; // Blokuje możliwość wstawienia więcej niż jednekgo znaku do jednego pola 
var dwa = false;
var trzy = false;
var cztery = false;
var piec = false;
var szesc = false;
var siedem = false;
var osiem = false;
var dziewiec = false;

var jeden_Wygrana; //wartość false odpowiada za wartość O a true  X
var dwa_Wygrana;
var trzy_Wygrana;
var cztery_Wygrana;
var piec_Wygrana;
var szesc_Wygrana;
var siedem_Wygrana;
var osiem_Wygrana;
var dziewiec_Wygrana;
var nrKratki = 0; //Zwraca numer kratki do której się odwołujemy
var koniecKmunuikatu = false; //jeśli true to blokuje wlyświetlanie aktualnego zwycięzcy 




function myFun() { //funkcja wstawiająca odpowiedni znak do kratki

    if (znak == false) {
        $(nrKratki).html('<i class=" icon-circle-empty" style="opacity: 1;"></i>'); // wstawia kółko O  
        znak = true;
    } else {
        $(nrKratki).html('<i class="icon-cancel" style="opacity: 1;"></i>'); // wstawia X
        znak = false;
    }
}

function jakiZnak() { //Wzraca wartość czy O czy X  
    var htmlString = $(nrKratki).html();
    if (htmlString == '<i class=" icon-circle-empty" style="opacity: 1;"></i>') {

        if (nrKratki == "#1") {
            jeden_Wygrana = false;
        } else if (nrKratki == "#2") {
            dwa_Wygrana = false;
        } else if (nrKratki == "#3") {
            trzy_Wygrana = false;
        } else if (nrKratki == "#4") {
            cztery_Wygrana = false;
        } else if (nrKratki == "#5") {
            piec_Wygrana = false;
        } else if (nrKratki == "#6") {
            szesc_Wygrana = false;
        } else if (nrKratki == "#7") {
            siedem_Wygrana = false;
        } else if (nrKratki == "#8") {
            osiem_Wygrana = false;
        } else if (nrKratki == "#9") {
            dziewiec_Wygrana = false;
        }

    } else {
        if (nrKratki == "#1") {
            jeden_Wygrana = true;
        } else if (nrKratki == "#2") {
            dwa_Wygrana = true;
        } else if (nrKratki == "#3") {
            trzy_Wygrana = true;
        } else if (nrKratki == "#4") {
            cztery_Wygrana = true;
        } else if (nrKratki == "#5") {
            piec_Wygrana = true;
        } else if (nrKratki == "#6") {
            szesc_Wygrana = true;
        } else if (nrKratki == "#7") {
            siedem_Wygrana = true;
        } else if (nrKratki == "#8") {
            osiem_Wygrana = true;
        } else if (nrKratki == "#9") {
            dziewiec_Wygrana = true;
        }
    }
}


function ktoWygral() {
    // Jeśli wygrywa x
    if (jeden_Wygrana && dwa_Wygrana && trzy_Wygrana == true) { //true = X
        komunikat();

    } else if (cztery_Wygrana && piec_Wygrana && szesc_Wygrana == true) {
        komunikat();

    } else if (siedem_Wygrana && osiem_Wygrana && dziewiec_Wygrana == true) {
        komunikat();

    } else if (jeden_Wygrana && cztery_Wygrana && siedem_Wygrana == true) {
        komunikat();

    } else if (dwa_Wygrana && piec_Wygrana && osiem_Wygrana == true) {
        komunikat();

    } else if (trzy_Wygrana && szesc_Wygrana && dziewiec_Wygrana == true) {
        komunikat();

    } else if (jeden_Wygrana && piec_Wygrana && dziewiec_Wygrana == true) {
        komunikat();

    } else if (trzy_Wygrana && piec_Wygrana && siedem_Wygrana == true) {
        komunikat();

    }

    //jeśli wygrywa O 
    else if ((jeden_Wygrana == false) && (dwa_Wygrana == false) && (trzy_Wygrana == false)) { //false = O
        komunikat2();

    } else if ((cztery_Wygrana == false) && (piec_Wygrana == false) && (szesc_Wygrana == false)) {
        komunikat2();

    } else if ((siedem_Wygrana == false) && (osiem_Wygrana == false) && (dziewiec_Wygrana == false)) {
        komunikat2();

    } else if ((jeden_Wygrana == false) && (cztery_Wygrana == false) && (siedem_Wygrana == false)) {
        komunikat2();

    } else if ((dwa_Wygrana == false) && (piec_Wygrana == false) && (osiem_Wygrana == false)) {
        komunikat2();

    } else if ((trzy_Wygrana == false) && (szesc_Wygrana == false) && (dziewiec_Wygrana == false)) {
        komunikat2();

    } else if ((jeden_Wygrana == false) && (piec_Wygrana == false) && (dziewiec_Wygrana == false)) {
        komunikat2();

    } else if ((trzy_Wygrana == false) && (piec_Wygrana == false) && (siedem_Wygrana == false)) {
        komunikat2();
    }
}

function komunikat() {
    if (koniecKmunuikatu == false) {
        $("#Komunikat").html("<i>Wygrywa X</i>");
        koniecGry();
    }
}


function komunikat2() {

    if (koniecKmunuikatu == false) {
        $("#Komunikat").html("Wygrywa O");
        koniecGry();
    }
}


function remis() {
    if ((koniecKmunuikatu == false) && (jeden == true) && (dwa == true) && (trzy == true) && (cztery == true) && (piec == true) && (szesc == true) && (siedem == true) && (osiem == true) && (dziewiec == true)) {
        $("#Komunikat").html("Remis, nikt nie wygrywa");
    }
}

function koniecGry() {
    jeden = true;
    dwa = true;
    trzy = true;
    cztery = true;
    piec = true;
    szesc = true;
    siedem = true;
    osiem = true;
    dziewiec = true;
    koniecKmunuikatu = true;
}




$("#1").click(function () { //akcja dla kratki 1
    nrKratki = "#1";
    if (jeden == false) {
        myFun(); //wstawiamy O albo X
    }
    jeden = true; //blokuje możliwość ponownego wstawienia znaku 
    jakiZnak(); //Zwraca informację o wstawionym znaku do kratki w postaci true albo false   
    ktoWygral(); //Wyświetla komunikat o tym kto właśnie wygrał 
    remis();
    boot();

});


$("#2").click(function () {
    nrKratki = "#2";
    if (dwa == false) {
        myFun();
    }
    dwa = true;
    jakiZnak();
    ktoWygral();
    remis();
    boot();
});

$("#3").click(function () {
    nrKratki = "#3";
    if (trzy == false) {
        myFun();
    }
    trzy = true;
    jakiZnak();
    ktoWygral();
    remis();
    boot();
});

$("#4").click(function () {
    nrKratki = "#4";
    if (cztery == false) {
        myFun();
    }
    cztery = true;
    jakiZnak();
    ktoWygral();
    remis();
    boot();
});

$("#5").click(function () {
    nrKratki = "#5";
    if (piec == false) {
        myFun();
    }
    piec = true;
    jakiZnak();
    ktoWygral();
    remis();
    boot();
});

$("#6").click(function () {
    nrKratki = "#6";
    if (szesc == false) {
        myFun();
    }
    szesc = true;
    jakiZnak();
    ktoWygral();
    remis();
    boot();
});

$("#7").click(function () {
    nrKratki = "#7";
    if (siedem == false) {
        myFun();
    }
    siedem = true;
    jakiZnak();
    ktoWygral();
    remis();
    boot();
});

$("#8").click(function () {
    nrKratki = "#8";
    if (osiem == false) {
        myFun();
    }
    osiem = true;
    jakiZnak();
    ktoWygral();
    remis();
    boot();
});

$("#9").click(function () {
    nrKratki = "#9";

    if (dziewiec == false) {
        myFun();
    }
    dziewiec = true;
    jakiZnak();
    ktoWygral();
    remis();
    boot();
});


/*------Play with me--------*/

function boot() {


    if (piec == false) {
        nrKratki = "#5";
        myFun();
        piec = true;
        jakiZnak();
        ktoWygral();
        remis();
    } else if (trzy == false) {
        nrKratki = "#3";
        myFun();
        trzy = true;
        jakiZnak();
        ktoWygral();
        remis();
    } else if (dziewiec == false) {
        nrKratki = "#9";
        myFun();
        dziewiec = true;
        jakiZnak();
        ktoWygral();
        remis();
    } else if (jeden == false) {
        nrKratki = "#1";
        myFun();
        jeden = true;
        jakiZnak();
        ktoWygral();
        remis();
    } else if (dwa == false) {
        nrKratki = "#2";
        myFun();
        dwa = true;
        jakiZnak();
        ktoWygral();
        remis();
    } else if (szesc == false) {
        nrKratki = "#6";
        myFun();
        szesc = true;
        jakiZnak();
        ktoWygral();
        remis();
    } else if (siedem == false) {
        nrKratki = "#7";
        myFun();
        siedem = true;
        jakiZnak();
        ktoWygral();
        remis();
    } else if (cztery == false) {
        nrKratki = "#4";
        myFun();
        cztery = true;
        jakiZnak();
        ktoWygral();
        remis();
    } else if (osiem == false) {
        nrKratki = "#8";
        myFun();
        osiem = true;
        jakiZnak();
        ktoWygral();
        remis();
    }

}
