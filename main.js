let plaintext = "Hallo, hvad er dit navn?";
var splitString = plaintext.split("");
let encString = "";
let decString = "";
let spaceArr = [];
let randomSymbol = ["!", "#", "%", "&", "/", "(", ")", "=", "?"];

let encode = () => {
    splitString.forEach((char, index) => {
        let val = char.charCodeAt()+3;
        let code = String.fromCharCode(val);
        if (code === "#") {
            spaceArr.push(index);
            encString += randomSymbol[Math.floor(Math.random() * 9)];
        } else {
            encString += code;
        }
    });
    encString += " " + spaceArr;
    return  console.log(encoded = Buffer.from(encString).toString('hex'));
}

let decode = () => {
    let decoded = Buffer.from(encoded, 'hex').toString();
    console.log(decoded);
    let splitEnc = decoded.split(/(\s)/);
    let encText = splitEnc[0].split("");
    let spaceIndex = splitEnc[2].split(",");
    encText.forEach((char, index ) => {
        let val = char.charCodeAt()-3;
        let code = String.fromCharCode(val);
        if (spaceIndex.indexOf(index.toString()) !== -1) {
            decString += " ";
        } else {
            decString += code;
        }
    });
    return console.log(decString);
}

encode();
decode();