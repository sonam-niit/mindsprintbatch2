const name="Sonam Soni";
function welcome(name){
    console.log("Welcome "+name);  
}

function check(age){
    console.log(age>=18);
}

module.exports= {
    name,
    welcome,
    check
}