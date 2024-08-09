const arr1=[1,2,3,4];
const arr2=[5,6,7];
// console.log(arr1.concat(arr2));
// console.log([...arr1,...arr2,89,90,34]);
console.log(arr1.slice(1,3));
//update
arr1.splice(3,0,6,7);
console.log(arr1);
console.log(arr1.indexOf(2));
console.log(arr1.includes(6));

