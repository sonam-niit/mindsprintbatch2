console.log("For Loop");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("While Loop");
let sum = 0;
while (true) {
    let num =+ prompt("Enter any number");
    sum += num;

    const input = prompt("Enter y to continue");
    if (input == 'y' || input == 'Y')
        continue;
    else
        break;
}
console.log(`Sum is ${sum}`);

