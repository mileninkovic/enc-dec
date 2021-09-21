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
            console.log("Virker!");
            spaceArr.push(index);
            console.log(spaceArr);
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
    let splitString = decoded.split("");
    let splitArray = decoded.split(/(\s)/);
    let splitDecode = splitArray[2].split(",");
    let decodable = splitArray[0].split("");
    decodable.forEach((char, index ) => {
        let val = char.charCodeAt()-3;
        let code = String.fromCharCode(val);
        if (splitDecode.indexOf(index.toString()) !== -1) {
            decString += " ";
        } else {
            decString += code;
        }
    });
    return console.log(decString);
}

encode();
decode();