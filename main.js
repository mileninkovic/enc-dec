let plaintext = "https://developer.mozilla.org/";
var splitString = plaintext.split("");
let encString = "";
let decString = "";

let encode = () => {
    splitString.forEach(char => {
        let val = char.charCodeAt()+3;
        let code = String.fromCharCode(val);
        encString += code;
    });
    return  console.log(encoded = Buffer.from(encString).toString('hex'));
}

let decode = () => {
    let decoded = Buffer.from(encoded, 'hex').toString();
    console.log(decoded);
    let splitString = decoded.split("");
    splitString.forEach(char => {
        let val = char.charCodeAt()-3;
        let code = String.fromCharCode(val);
        decString += code;
    });
    return console.log(decString);
}

encode();
decode();