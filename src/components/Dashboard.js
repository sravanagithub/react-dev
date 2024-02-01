import { useEffect, useState } from "react";
import Userdetails from "./Userdetails";

export default function Dashboard(){
    const [users, setUsers] = useState([]);


useEffect(()=>{
    const fetchUsers = async () => {
        try {
          const response = await fetch('https://reqres.in/api/users');
          const data = await response.json();
          setUsers(data.data); // Assuming the API response has a 'data' property containing the list of users
        } catch (error) {
          console.error('Error fetching users:', error);
        }
      };
  
      fetchUsers();
},[])

    return(
        <>
       <div>
      <h2 className="text-center mb-4">Dashboard</h2>
     <Userdetails users={users}/>
    </div>
        </>
    )
}