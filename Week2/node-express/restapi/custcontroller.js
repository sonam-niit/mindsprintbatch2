const express= require('express');
const storage= require('node-persist');
storage.init();

const router= express.Router();

router.get('/',async(req,res)=>{
    const data= await storage.values();
    res.status(200).send(data);
})
router.get('/:id',async(req,res)=>{
    const id= req.params.id;
    const data= await storage.getItem(id);
    if(data)
        return res.status(200).send(data);
    res.status(404).send('Data not found');
})

// router.get('/lowtohigh',(req,res)=>{
//     const data= storage.values();
//     data.sort((obj1,obj2)=>obj1.price-obj2.price);
//     res.send(data);
// })
// router.get('/hightolow',(req,res)=>{
//     const data= storage.values();
//     data.sort((obj1,obj2)=>obj2.price-obj1.price);
//     res.send(data);
// })


router.post('/',async(req,res)=>{
    const {id,name,email} =req.body;
    if(!id || !name || !email){
        return res.status(403).send({message:'All fields are mandatory'});
    }
    const resp=await storage.setItem(id,{id,name,email});
    res.status(201).send({message:"User Registered successfully",resp})

})
router.delete('/:id',async(req,res)=>{
    const id= req.params.id;
    const data= await storage.getItem(id);
    if(data){
        await storage.removeItem(id);
        return res.status(200).send("Data Deleted");
    }
    res.status(404).send('Data not found');
})
router.put('/:id',async(req,res)=>{
    const id= req.params.id;
    const data= await storage.getItem(id);
    if(data){
        const {name,email}=req.body;
        await storage.updateItem(id,{id,name,email})
        return res.status(200).send("Data Updated");
    }
    res.status(404).send('Data not found');
})


module.exports=router;