const arr1=[1,2,3,4,5,6,7];
const arr2=["A1","B2","C3","D4"];
const arr3=[];
arr3[0]=10;
arr3[1]=20;
arr3[4]=40;
console.log(arr1);
console.log(`Length: ${arr2.length}`);
// console.log(`Access Element at Index4: ${arr3[4]}`);
// console.log("Array 3",arr3,"Array 4",arr4);
console.log("Print array 1");
for(let i=0;i<arr1.length;i++){
    console.log(arr1[i]);
}
console.log("for of loop");
for(let n of arr1){
    console.log(n);   
}
console.log("for in loop");
for(let i in arr1){
    console.log(arr1[i]);   
}
const arr4= new Array();
console.log(arr4.push('sonam','alex','bobby','catty','john')+" is the updated length");
// console.log(arr4.push('alex')+" is the updated length");
// console.log(arr4.push('john')+" is the updated length");
console.log(arr4);
arr4.unshift('jack');
console.log(arr4);
console.log(arr4.shift(),"Removed");
console.log(arr4.pop(),"Removed");
console.log(arr4);








