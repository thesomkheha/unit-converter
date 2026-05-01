/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputField = document.getElementById("input");
const convertButton = document.getElementById("convert-btn");
const [mAndFt, lAndGal, kgAndLbs] = [document.getElementById("m-and-ft"),
    document.getElementById("l-and-gal"),
    document.getElementById("kg-and-lbs")];
let value;
    
convertButton.addEventListener("click", () => {
    value = Number(inputField.value) === NaN ? 0 : Number(inputField.value);
    renderConversion(value);
})

function renderConversion(value){
    let mToFt, ftToM, lToGal, galToL, kgToLbs, lbsToKg;
    mToFt = (value * 3.281).toFixed(3);
    ftToM = (value * 0.305).toFixed(3);
    lToGal = (value * 0.264).toFixed(3);
    galToL = (value * 3.785).toFixed(3);
    kgToLbs = (value * 2.204).toFixed(3);
    lbsToKg = (value * 0.454).toFixed(3);
    mAndFt.textContent = `${value} meter(s) = ${mToFt} feet | ${value} feet = ${ftToM} meter(s)`;
    lAndGal.textContent = `${value} liter(s) = ${lToGal} gallon(s) | ${value} gallon(s) = ${galToL} liter(s)`;
    kgAndLbs.textContent = `${value} kilogram(s) = ${kgToLbs} pound(s) | ${value} pound(s) = ${lbsToKg} kilogram(s)`;
}