let textBox = document.getElementById("user_input_area");
let wordCountDisp = document.getElementById("word_count");
let charCountDisp = document.getElementById("char_count");

textBox.addEventListener('input', function() {
    let characters = this.value.length;
    let trimedString = this.value.trim();
    charCountDisp.innerHTML = characters;
    switch(trimedString) {
        case "":
            wordCountDisp.innerHTML = 0;
            break;
        default:
            wordCountDisp.innerHTML = countingWords(trimedString);
    }
});

function countingWords(str) {
    let n = 1;
    for(let i = 0; i < str.length; i++) {
        if(((str[i] !== "?") && (str[i] !== ".") && (str[i] !== ",") && (str[i] !== "!")) && str[i] === " " && str[i+1] !== " ") {
            console.log(str[i]);
            n++;
        } 
    }
    return n;
}


/* 
function countingWords(str) {
    let n = 1;
    for(let i = 0; i < str.length; i++) {
        if((str[i-1] === " ") && str[i-2] !== " ") {
            n++;
        } 
    }
    return n;
} 
*/


