import './App.css';
import axios from 'axios'
import { useEffect, useMemo, useState } from 'react';

function App() {
  const baseUrl = 'http://localhost:5000/v1'
  const [users,setUsers] = useState([])
  const [filteredUsers,setFilteredUsers] = useState([])
  const getItem = async()=>{
   const user = await axios.get(baseUrl+'/user/')
   setUsers(user?.data?.users)
  }

  const handleDelete=(id)=>{

    setFilteredUsers(filteredUsers.filter((user)=>user._id !== id))
  }
  
  useEffect(()=>{
    getItem()
   },[])

   useEffect(()=>{
    setFilteredUsers( users)
   },[users])

  return (
    <div className="App">
      <div className="card_container">
        {filteredUsers?.map((user)=>(
          <div className="card" key={user._id}>
          <div className="user_info">{user.name}</div>
          <div className="user_info">{user.email}</div>
          <div className="user_info">{user.phone}</div>
          <div className="delete_btn" onClick={()=>handleDelete(user._id)}>Delete</div>
        </div>
        ))}

      </div>
    </div>
  );
}

export default App;
