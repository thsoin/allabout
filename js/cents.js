//var amount = document.getElementById('amount');
var current;

let eink = 144882; // Ausgangsgehalt Workday 
let seck = 31536000; // vom Internet2019: 31535999 - nicht ganz genau ist 365*24*60*60 Sekunden pro Jahr - 2025 (kein Schaltjahr): 31.536.000

let cent = eink / seck; // Einkommen pro Sekunde

var dateObj = new Date();
var dateInit = new Date(dateObj.getFullYear(), "0", "1");
dateInit = Math.round(dateInit.getTime() / 1000);

var dateCurrent = Math.round(dateObj.getTime() / 1000);
let sekJahr = dateCurrent - dateInit; // Sekunden dieses Jahr bis jetzt
let verd = cent * sekJahr; // verdient bis jetzt = sekunden dieses Jahr mal cent pro sekunden

var current = verd;

function update() {
  //amount.innerText = formatMoney(current);
  var numb = current;
  numb = numb.toFixed(3); // runden auf 3 Kommastellen
  clock.setValue(numb);
};

setInterval(function() {
  current += cent;
  update();
}, 1000);

/*
// nur zum Zahlen darstellen ohne FlipClock
function formatMoney(amount) {
  var dollars = Math.floor(amount).toString().split('');
  var cents = (Math.round((amount % 1) * 100) / 100).toString().split('.')[1];
  if (typeof cents == 'undefined') {
    cents = '00';
  } else if (cents.length == 1) {
    cents = cents + '0';
  }
  var str = '';
  for (i = dollars.length - 1; i >= 0; i--) {
    str += dollars.splice(0, 1);
    if (i % 3 == 0 && i != 0) str += '';
    //      if(i%3 == 0 && i != 0) str += ',';  für Komma 12,000 = 12000
  }
  return str + ',' + cents + " " + '€';

}
*/
