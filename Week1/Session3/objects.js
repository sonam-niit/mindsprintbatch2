let person={
    firstName:"John",
    lastName:"doe",
    age:56,
    email:'john@gmail.com',
    address:{
        street:'XYZ',
        city:'Mumbai',
        zipcode:345678
    },
    fullName:function(){
        console.log(this.firstName+" "+this.lastName);
        console.log(this.address);
        
    }
}
person.fullName();
console.log(person['age']); //access using square bracket
console.log(person.address.street);
console.log(person.address.city+" , "+person.address.zipcode);

for(let key in person){
    if( person[key] instanceof Object){
        for(let k in person[key]){
            console.log(k+" "+ person[key][k]);
        }
    }else{
        console.log(key+" "+ person[key]);
    }
   
    
}

