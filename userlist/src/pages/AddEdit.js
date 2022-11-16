import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./AddEdit.css";
import { useNavigate, useParams } from 'react-router-dom';



function AddEdit() {

    const initialState = {
        name: "",
        email:"",
        mobileNo:"",
        gender:"",
        password:"",
        MIddlename:"",
        Lastname:"",
        course:"",
        Address:"",
        re_password:"",
    };

    const [state, setState] = useState(initialState);
    const [error, seterror] = useState(false);
    const [Formerror, setFormerror] = useState(false);
    const{name,MIddlename,Lastname,email,mobileNo,gender,course,Address,password,re_password} = state;

    const {id}  = useParams();
   useEffect(()=>{
    if(id){
        getSingleStudent(id);
    }
   },[id])

   const getSingleStudent = async (id)=>{
    const res = await axios.get(`http://localhost:5000/user/${id}`);
    if(res.status===200){
       setState({...res.data[0]});
    }
   }

   const navigate = useNavigate();


    const addStudent = async (data)=>{
        const res = await axios.post('http://localhost:5000/user', data);
        if(res.status===200){
            alert(res.data)
        }
    }

    const updateStudent = async (data,id)=>{
        const res = await axios.put(`http://localhost:5000/user/${id}`, data);
        if(res.status===200){
            alert(res.data)
        }
    }
  const handleSubmit = (e)=>{
    e.preventDefault();

    if(!name || !email || ! mobileNo || !gender || !password || !MIddlename || !Lastname || !Address || !re_password || !course ){
        alert("please fill and select input field")
        setFormerror(true);
    }
    if(password !==re_password){
        seterror(true);
        setFormerror(true);
    }
   
    else{
        if(!id && Formerror ){
            addStudent(state);
            
        }
        else{
            updateStudent(state,id);
           
        }
        seterror(false);
       setTimeout(() => {
       if(Formerror){
        navigate("/");
       }
       }, 500);
    }

    
  }
  
 const handleInput = (e)=>{
  let {name, value} = e.target;
  setState({...state, [name]: value});
 }

  return (
    <div style={{marginTop:"100px"}}>
        <form style={{margin:"auto", padding: "15px", maxWidth:"400px", alignContent:"center"}} onSubmit={handleSubmit} >
     <label htmlFor='name'>First Name</label>
     <input type="text" id = "name" name='name' placeholder='enter first name...' onChange={ handleInput} value = {name}  />

     <label htmlFor='Middlename'> Middle Name</label>
     <input type="text" id = "MIddlename" name='MIddlename' placeholder='enter middle name...' onChange={ handleInput} value = {MIddlename}  />

     <label htmlFor='Lastname'> Last Name</label>
     <input type="text" id = "Lastname" name='Lastname' placeholder='enter Last name...' onChange={ handleInput} value = {Lastname}  />

     
     <label htmlFor='course'>course</label>
<select id="course" name='course' onChange={handleInput} value={course}>
                  
                  <option>course</option>
                  <option value="python">python</option>
                  <option value="java">java</option>
                  
               </select>

               <label htmlFor='gender'>Gender</label>
<select id="gender" name='gender' onChange={handleInput} value={gender}>
                  <option>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="other">other</option>
               </select>

               <label htmlFor='mobileNo'>Phone</label>
    <input type="number" id = "mobileNo" name='mobileNo' placeholder='enter Mobile Number...' onChange={ handleInput} value = {mobileNo} />


     <label htmlFor='email'>Email</label>
     <input type="email" id = "email" name='email' placeholder='enter email...' onChange={ handleInput} value = {email} />

     <label htmlFor='email'>Address</label>
     <input type="text" id = "Address" name='Address' placeholder='enter Address...' onChange={ handleInput} value = {Address} />


     {/* <label htmlFor='gender'>gender</label>
     <input type="text" id = "gender" name='gender' placeholder='enter gender...' onChange={ handleInput} value = {gender} /> */}


     <label htmlFor='Password'>Password</label>
     <input type="password" id = "password" name='password' placeholder='enter password...' onChange={ handleInput} value = {password} />

     <label htmlFor='Password'>Re-Type Password</label>
     <input type="password" id = "re_password" name='re_password' placeholder='reenter password...' onChange={ handleInput} value = {re_password} />
       {error && <span style={{color:"red"}}>*password not matched</span>}
     <input type="submit" value = {id? "update": "Submit"}/>

        </form>
    </div>
  )
}

export default AddEdit;