function f1(){
    console.log("Function 1 executed");
}
function f2(){
    setTimeout(()=>{
        console.log("Function 2 executed");
    },3000) 
}
function f3(){
    console.log("Function 3 executed");
}
f1();
f2();
f3();