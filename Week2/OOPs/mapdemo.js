const map= new Map();
map.set(1,'alex');
map.set(2,'bob');
map.set(3,'catty');
map.set(4,'denis');
console.log(map);
console.log('Map Contains key 4? '+ map.has(4));
console.log('Size of Map: ',map.size);
console.log('Get Value for key 3: '+map.get(3));
for(let entry of map.entries())
    console.log(`Key: ${entry[0]} value: ${entry[1]}`);
for(let key of map.keys())
    console.log(key);
for(let value of map.values())
    console.log(value);    
map.delete(1);
console.log(map);
map.clear();
console.log('Size of Map: ',map.size);

const data='malayalam';
const map2=new Map();
for(let str of data){
    if(!map2.has(str)){
        map2.set(str,1)
    }else{
        map2.set(str,map2.get(str)+1)
    }
}
console.log(map2);





