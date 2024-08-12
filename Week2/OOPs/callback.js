let data=[];
const fetchData=(cb)=>{
    setTimeout(()=>{
        console.log('Data Fetched');
        data=[1,2,3,4,5,6];
        cb();
    },2000)
}
const display=()=>{
    console.log("Display Function");
    console.log(data);
}

fetchData(display);