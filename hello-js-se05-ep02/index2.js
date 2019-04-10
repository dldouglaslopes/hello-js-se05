const CryptoJS = require("crypto-js");

if(process.argv[2] == "MD5"){
    const md5 = require("./lib2").md5;
    console.log(md5(process.argv[3]));
}
else{
    const gibberish = require("./lib2").gibberish;
    console.log(gibberish(process.argv[2]));
}