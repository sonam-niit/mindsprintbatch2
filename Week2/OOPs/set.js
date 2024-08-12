const array= ['a','b','c','a','t'];
const set= new Set(array);
console.log(set);
for(let s of set.entries()){
    console.log(s[0],s[1]);
}

