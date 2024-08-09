const array= [1,2,3,5,6,7,8,9];

const newArray=array.map(value=> value*3);
console.log(newArray);
const evenArray= array.filter(value=> value%2==0);
console.log(evenArray);
array.forEach((value,index)=>{
    console.log(`Index: ${index}: ${value}`);
})
//satisfy all values with some condition
const results=[67,45,89,90,38];
console.log(results.every(value=>value>=35));
console.log(results.some(value=>value==90));

const found= results.find(value=> value==38);
console.log(found);
const index= results.findIndex(value=> value==38);
console.log(index);

const sum= array.reduce((acc,curr)=>acc+curr,0)
console.log(sum);

