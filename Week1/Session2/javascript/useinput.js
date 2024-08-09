// const readline = require('readline-sync');

const arr1=[];
while (true) {
    const data = prompt("Enter any number: ");
    arr1.push(+ data);

    const op= prompt('enter y to continue: ');
    if(op=='y' || op=='Y')
        continue;
    else
        break;
}
console.log(arr1);



