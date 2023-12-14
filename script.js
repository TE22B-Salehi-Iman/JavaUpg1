// variabeln för nummer 1 och 2
const nummer1 = document.querySelector("#nummer1");
const nummer2 = document.querySelector("#nummer2");
const svar = document.querySelector("#svar");

// funktionen för addition
function plus()
{
    let tal1 = parseInt( nummer1.value);
    let tal2 = parseInt(nummer2.value);
    let summa = tal1 +tal2; // matte lösningen
    svar.value = summa; // svar
}

// funktionen för subtraktion
function minus()
{
    let tal1 = parseInt( nummer1.value);
    let tal2 = parseInt(nummer2.value);
    let summa = tal1 - tal2;
    svar.value = summa;
}

// funktionen för multiplikation
function multi()
{
    let tal1 = parseInt( nummer1.value);
    let tal2 = parseInt(nummer2.value);
    let summa = tal1 * tal2;
    svar.value = summa;
}

// fumktionen för division
function divi()
{
    let tal1 = parseInt( nummer1.value);
    let tal2 = parseInt(nummer2.value);
    let summa = tal1 / tal2;
    svar.value = summa;
}