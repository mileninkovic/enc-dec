//let bigInt = 9007199254740991n;
//let smallerInt = 9007199254740991n;
let url = "https://developer.mozilla.org/";
var splitString = url.split("");
//console.log(bigInt-smallerInt);
//console.log(res[3]);
let encString = "";
let decString = "";


//console.log(encString);

let encode = () => {
    splitString.forEach(char => {
        let val = char.charCodeAt()+3;
        let code = String.fromCharCode(val);
        encString += code;
    });
    return console.log(encString);
}

url = "kwwsv=22ghyhorshu1pr}lood1ruj2";
var splitString = url.split("");

let decode = () => {
    splitString.forEach(char => {
        let val = char.charCodeAt()-3;
        let code = String.fromCharCode(val);
        decString += code;
    });
    return console.log(decString);
}

encode();
decode();