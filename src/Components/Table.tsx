import React, { useState, useEffect } from 'react'
import { Button, Table } from 'reactstrap';
import axios from "axios";
// import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';

interface userType {
  image:string;
  name:string;
  email:string;
  role:string;
  lastlogin:string;
  satus:string;
  id:string;
}

const DataTable=()=>{

  const [users, setUsers] = useState<userType[]>([]);

    const fetchdata=()=>{
      axios.get("https://63c2b94cb0c286fbe5f25686.mockapi.io/api/intern/free")
      .then((Response)=>{
        // console.log(Response.data)
        setUsers(Response.data)
      })
    }

    useEffect(() => {
      fetchdata();
      }, []);

    return (
      <div style={{border:"5px solid red",height:"100%"}}>
        <div style={{display:"flex",position:"relative",border:"5px solid blue"}}>
          <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",marginLeft:"0.5rem"}}>
            <h5>
              Users
            </h5>
            <p>
              Manage your team menmbers and their account permission here.
            </p>
          </div>
          <div style={{position:"absolute",right:"15px",top:"20%"}}>
            <Button>
              Download CSV
            </Button>
            <Button>
              Add User
            </Button>
          </div>
        </div>
        <Table bordered>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Status</th>
            <th>Role</th>
            <th>Last Login</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          
          {
          users.map((data)=>{
            return(
              <tr>
            <td >{data.id}</td>
            <td>
              <div style={{display:"flex",alignItems:"center"}}>
                <img src={data.image} style={{height:"40px" ,borderRadius:"100%"}}></img>
              <div style={{display:"flex",flexDirection:"column",alignItems:"flex-start",marginLeft:"0.5rem"}}>
                <div>{data.name}</div>
                <div>{data.email}</div>
                
              </div>
              </div></td>
            <td>{data.satus}</td>
            <td>{data.role}</td>
            <td>{data.lastlogin}</td>
            <td><Button>Delete</Button> <Button>Edit</Button></td>
          </tr>
            )
          })
        }
        
        </tbody>
      </Table>
      <div>
          <Button>Previous</Button>
          <Button>Next</Button>
         </div>
      </div>
    );
  
}

export default DataTable;