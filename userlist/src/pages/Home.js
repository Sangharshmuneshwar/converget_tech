import React, { useEffect, useState } from 'react'
import "./Home.css"
import axios from 'axios'
import { Link } from 'react-router-dom';

function Home() {
    const [data, setdata] = useState([]);

    useEffect(()=>{
        getStudent();
    },[])


    const onDeleteUser = async (id)=>{
        if(window.confirm("are You sure You Want to delete")){
     const res = await axios.delete(`http://localhost:5000/user/${id}`)
     if(res.status===200){
        alert(res.data);
        getStudent();
     }
        }
    }

    const getStudent = async ()=>{
        const res = await axios.get('http://localhost:5000/users');
        if(res.status===200){
            setdata(res.data)
        }
    }

    // const ondeleteUser = async (id)=>{
    //     if(window.confirm("Are you Sure")){
    //         const res = await axios.delete(`http://localhost:5000/user/${id}`);
    //         if(res.status===200){
    //             alert(res.data);
    //             getStudent();
    //         }
    //     }
       
    // }
//     const ondeleteUser = async (id)=>{
//    const res = await axios.delete(`http://localhost:5000/user/${id}`);
//    if(res.status === 200){
//     alert(res.data)
//     getStudent();
//    }
//     }


  return (
    <div style={{marginTop: "150px"}}>
        <table className='styled-table'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>Sr No</th>
                    <th style={{textAlign:"center"}}>First Name</th>
                    <th style={{textAlign:"center"}}>Middle Name</th>
                    <th style={{textAlign:"center"}}>Last Name</th>
                    <th style={{textAlign:"center"}}>course</th>
                    <th style={{textAlign:"center"}}>Email</th>
                    <th style={{textAlign:"center"}}>Phone</th>

                    <th style={{textAlign:"center"}}>Gender</th>
                    <th style={{textAlign:"center"}}>Address</th>
                    <th style={{textAlign:"center"}}>Password</th>
                    <th style={{textAlign:"center"}}>Action</th>

                </tr>
            </thead>
            <tbody>
                {data && data.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <th scope='row'>{index+1}</th>
                            <td>{item.name}</td>
                            <td>{item.MIddlename}</td>
                            <td>{item.Lastname}</td>
                            <td>{item.course}</td>
                            <td>{item.email}</td>

                            <td>{item.mobileNo}</td>

                            <td>{item.gender}</td>
                            <td>{item.Address}</td>
                            <td>{item.password}</td>
                        

                            <td>
                                <Link to={`/update/${item.id}`}>
                                    <button className='btn btn-edit'>edit</button>
                                </Link>
                                <button className='btn btn-delete' onClick={()=> onDeleteUser(item.id)}>delete</button>

                            </td>

                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Home;