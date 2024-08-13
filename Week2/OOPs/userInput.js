const rl= require('readline-sync');

const op= + rl.question('Enter your option');
switch(op){
    case 1: const fname= rl.question('enter filename');
            fileName(fname);
            break;

}