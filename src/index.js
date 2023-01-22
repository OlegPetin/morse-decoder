const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    let arr =[];
    let morse = [];
    let result = [];
    let count = expr.length/10;
    for(let i=0;i<count; i++){
        arr[i]=expr.slice((i*10), (i*10) + 10);
    }
    arr.forEach(item => {
        let letter ='';
        for(i=0;i<item.length;i=i+2){
            if(item[i] == '1' && item[i+1] == '1'){
                letter = letter + '-';
               // morse.push('-')
            } else if(item[i] == '1' && item[i+1] == '0') {
                letter = letter + '.';
               // morse.push('.')
            } else if(item[i] == '*'){
                letter = letter + ' ';
               // morse.push(' ');
                i=i+8;
            } 
        }

        morse.push(letter);
    })
    morse.forEach(item => {
        if(item == ' '){
            result.push(' ');
        }
        for ( let key in MORSE_TABLE){
            if(item == key){
                result.push(MORSE_TABLE[key]);
            }
        }
    })
    
    // for(let j = arr[i].length-1;j=0;j=j-2){
    //     if (arr[i][j]=== 0 && arr[i][j-1] === 1 ) {
    //        morse.push('.');
    //     } else {
    //         if (arr[i][j]=== 1 && arr[i][j-1] === 1 ){
    //             morse.push('-')
    //         }
    //         else {
    //             morse.push(' ');
    //         }
    //     }
    
    //}
    return result.join('');

    }


module.exports = {
    decode
}