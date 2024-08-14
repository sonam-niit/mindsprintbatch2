const storage = require('node-persist')
const bcrypt = require('bcryptjs');
const jwt= require('jsonwebtoken');
async function register(req, res) {
    const { name, username, email, password } = req.body;
    if (!name || !email || !username || !password) {
        return res.status(400).send({ message: "All fields are mandatory" });
    }
    const user = await storage.getItem(email);
    if (user) {
        return res.status(400).send({ message: "Email ID is already registered" })
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = {
        name,
        username,
        email,
        password: hashPassword
    }
    const resp = await storage.setItem(email, newUser);
    res.status(201).send({ message: "User Registered successfully", createdObj: resp })

}

async function login(req, res) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ message: "All fields are mandatory" });
    }
    const user = await storage.getItem(email);
    if (!user) {
        return res.status(400).send({ message: "Email ID is not registered with US" })
    }
    const check =await bcrypt.compare(password, user.password);
    if (check){
        const token= jwt.sign(user.email,"iamsonamsoni")
        res.cookie('token',token);
        return res.status(200).send({ message: "User LoggedIn successfully", user,token })
    }
    else
        return res.status(403).send({ message: "Invalid credentials" })
}

async function changePassword(req, res) {
    const { oldPassword,newPassword} = req.body;
    if (!oldPassword || !newPassword) {
        return res.status(400).send({ message: "All fields are mandatory" });
    }
    //email is coming from middleware
    const email= req.email;
    const user = await storage.getItem(email);
    if (!user) {
        return res.status(400).send({ message: "Email ID is not registered with US" })
    }
    const pw=user.password;
    console.log(oldPassword);
    const check =await bcrypt.compare(oldPassword,pw);
    if (check){
        user.password= await bcrypt.hash(newPassword,10);
        storage.setItem(email,user);
        return res.status(200).send({ message: "User Password Changed successfully"})
    }
    else
        return res.status(403).send({ message: "password is not matching with current password" })
}

module.exports = { register, login,changePassword }