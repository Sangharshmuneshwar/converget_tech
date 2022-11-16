
import {v4 as uuid} from "uuid";

let users = [];

export const getUsers = (req, res)=>{
    res.send(users)
};

export const createUsers = (req, res)=>{
    const user = req.body;
    users.push({...user,id: uuid()});

    res.send('User added successfully')
};
export const getUser = (req, res)=>{
    const Singleuser = users.filter((user)=>user.id===req.params.id)
    

    res.send(Singleuser)
};

export const deleteUser = (req,res)=>{
    users = users.filter((user)=> user.id !== req.params.id);
    res.send('User deleted successfully');
};

export const updateUser =(req,res) =>{
    const user = users.find((user)=> user.id === req.params.id);

    user.name = req.body.name;
    user.MIddlename = req.body.MIddlename;

    user.Lastname = req.body.Lastname;
    user.course = req.body.course;
    user.email = req.body.email;
    user.mobileNo = req.body.mobileNo;
    user.gender = req.body.gender;
    user.Address = req.body.Address;
    user.password = req.body.password;

 
    res.send('User update succses');
};