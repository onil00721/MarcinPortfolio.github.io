var jakiZnak = false; // false = O true = X

var tab = []; //ot taka tablica na samym początku---pomocnicza
var tab2 = []; //tablica zawierająca numery zwycięzkich indeksów
var tab3 = []; //tablica zawierająca numery zwycięzkich indeksów
var tab4 = []; //tablica zawierająca numery zwycięzkich indeksów
var tab5 = []; //tablica zawierająca numery zwycięzkich indeksów

for (var i = 1; i < 257; i++) {
    tab[i] = i;
}

function szukajPionowo(t) {
    for (var k = 1; k <= 192; k++) {
        var l = 0;
        var h = 0;
        for (var j = k; j <= k + 65; j += 16) { //przeszukujem pola pionowo po 5 kratek i z przesunięciem w bok   
            if (tab[j] == t) {
                tab2[h] = j;
                h++;
                l++;
                if (l == 5) { //zwraca informacje o numerach zwycięzkich pól 
                    jakiZnak = null;
                    zwyciezkieKratki("#" + tab2[0], "#" + tab2[1], "#" + tab2[2], "#" + tab2[3], "#" + tab2[4]);
                    if (t == 1000) {
                        $("#zwyciezca").html("<p>Zwycięzcą jest X !!!!! Gratulacje</p>");
                    } else {
                        $("#zwyciezca").html("<p>Zwycięzcą jest O !!!!! Gratulacje</p>");
                    }
                }
            }
        }
    }
}

function szukajPoziomo(t) {
    var m = 1;
    for (var o = m; o <= 256; o++) { //wyszukujemy zwycięzkie pola w poziomie 
        var q = 0;
        var w = 0;
        if (o >= 12 + m) {
            o += 4;
            m += 16;
        }
        for (var v = o; v < 6 + o; v++) {
            if (tab[v] == t) {
                tab3[w] = v;
                w++;
                q++;
                if (q == 5) { //zwraca informacje o numerach zwycięzkich pól w poziomie         
                    jakiZnak = null;
                    zwyciezkieKratki("#" + tab3[0], "#" + tab3[1], "#" + tab3[2], "#" + tab3[3], "#" + tab3[4]);
                    if (t == 1000) {
                        $("#zwyciezca").html("<p>Zwycięzcą jest X !!!!! Gratulacje</p>");
                    } else {
                        $("#zwyciezca").html("<p>Zwycięzcą jest O !!!!! Gratulacje</p>");
                    }

                }
            }
        }

    }
}

function szukajUkosP(t) {
    var r = 12;
    for (var a = 1; a <= 188; a++) {
        var b = 0;
        var c = 0;
        if (a <= r) {} else {
            a += 4;
            r += 16;
        }
        for (var d = a; d <= a + 68; d += 17) { //przeszukujem pola na ukos w prawo po 5 kratek i z przesunięciem w bok
            if (tab[d] == t) {
                tab4[c] = d;
                c++;
                b++;
                if (b == 5) { //zwraca informacje o numerach zwycięzkich pól 
                    jakiZnak = null;
                    zwyciezkieKratki("#" + tab4[0], "#" + tab4[1], "#" + tab4[2], "#" + tab4[3], "#" + tab4[4]);
                    if (t == 1000) {
                        $("#zwyciezca").html("<p>Zwycięzcą jest X !!!!! Gratulacje</p>");
                    } else {
                        $("#zwyciezca").html("<p>Zwycięzcą jest O !!!!! Gratulacje</p>");
                    }
                }
            }
        }
    }
}


function szukajUkosL(t) {
    var s = 181;
    for (var f = 192; f >= 5; f--) {
        var g = 0;
        var n = 0;
        if (f >= s) {} else {
            f -= 4;
            s -= 16;
        }
        for (var p = f; p <= f + 68; p += 15) { //przeszukujem pola na ukos w lewo  po 5 kratek i z przesunięciem w bok              
            if (tab[p] == t) {
                tab5[n] = p;
                n++;
                g++;
                if (g == 5) { //zwraca informacje o numerach zwycięzkich pól 
                    jakiZnak = null;
                    zwyciezkieKratki("#" + tab5[0], "#" + tab5[1], "#" + tab5[2], "#" + tab5[3], "#" + tab5[4]);
                    if (t == 1000) {
                        $("#zwyciezca").html("<p>Zwycięzcą jest X !!!!! Gratulacje</p>");
                    } else {
                        $("#zwyciezca").html("<p>Zwycięzcą jest O !!!!! Gratulacje</p>");
                    }
                }
            }
        }
    }
}


function zwyciezkieKratki(f, g, n, s, p) {
    $(f).animate({
        backgroundColor: "#b5bdc9"
    });
    $(g).animate({
        backgroundColor: "#b5bdc9"
    });
    $(n).animate({
        backgroundColor: "#b5bdc9"
    });
    $(s).animate({
        backgroundColor: "#b5bdc9"
    });
    $(p).animate({
        backgroundColor: "#b5bdc9"
    });
};


function znak() { //tutaj jest odczytywany numer kratki i wstawiany odpowiedni znak (X lub O ) oraz dodawana w miejsce znaku wartość (1=O lub X=10)
    $("p").click(function () {
        var htmlString = $(this).html();
        if (jakiZnak == false) {
            $("#" + htmlString).html("<p>X</p>");
            $("#" + htmlString + " " + "p").animate({
                "opacity": "1",
                "font-size": "100%"
            }, 1000);
            jakiZnak = true;
            var d = 0;
            tab[htmlString] = d + 1000; //dodawanie liczby do tablicy             
            szukajPionowo(1000);
            szukajPoziomo(1000);
            szukajUkosP(1000);
            szukajUkosL(1000);
        } else if (jakiZnak == true) {
            $("#" + htmlString).html("<p>O</p>");
            $("#" + htmlString + " " + "p").animate({
                "opacity": "1",
                "font-size": "100%"
            }, 1000);
            jakiZnak = false;
            var d = 0;
            tab[htmlString] = d + 500; //dodawanie liczby do tablicy              
            szukajPionowo(500);
            szukajPoziomo(500);
            szukajUkosP(500);
            szukajUkosL(500);
        } else {




            console.log("Tu powinien być koniec gry");
        }
    });
}



for (var i = 1; i < 257; i++) { //generujemy kolejne kwadraty z ich numerami id i nr. p 
    $(" .rzad ").append('<div id=' + i + ' class="kratka">  <p>' + i + "</p> </div>");
}
znak();
