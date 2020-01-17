/*
    DISCLAMER: 
        This is intended to be a proof of concept. While it is fast, don't use it for LARGE JOBS.
        It is a memory HOG. But if you have a lot of ram, go for it.
        Enjoy~! -Aurora
*/


/*
    CONFIG
*/

let length = 2; 
// Change this to change the length of each permutation.

let filename = "output.txt";
// Change this to your desired output file. If it doesn't exist, it will be created.

let strings = 1;
// Change this to the desired outputted characters.
// use `1` for a, b, c...z
// use `2` for 0, 1, 2...9
// use `3` for 0, 1, 2...9, a...y, z
// use `4` to specify a custom query.


let customcharacters = "aurora-was-here";
// If 4 is selected in strings, this will be used instead.

/*
    START OF CODE
*/

const fs = require("fs");

let chars;
switch (strings) {
    case 1: 
        chars = "abcdefghijklmnopqrstuvwxyz".split("");
        break;
    case 2:
        chars = "0123456789".split("");
        break;
    case 3:
        chars = "abcdefghijklmnopqrstuvwxyz0123456789".split("");
        break;
    case 4:
        chars = customcharacters.split("");
        break;
    default:
        chars = "";
        break;
}

let front = "";
let middle = "";
let end = "";
for (let i = 0; i < length; i++)
{
    front+=`for (let i${i} of chars) {`;
    end+="}";
    if (length == i+1) middle+=`i${i}`
    else middle+=`i${i}+`;
};
console.log("Opening File..")
let file = fs.createWriteStream(filename)
console.log("Starting File Write..")
eval(front+`file.write(${middle}+"\\n")`+end)