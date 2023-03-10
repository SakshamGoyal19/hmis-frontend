import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';

const Home = () => {
  
  const [isSideBarOpen, setSidebar] = useState(false);

//  const [patCount, setPatCount] = useState(0);

//  const getPatCount = () => {
//     axios.get("http://localhost:8080/getPatientCount")
//     .then((res) => setPatCount(res.data))
//  }

//  useEffect(() => {
//     getPatCount();
//     setInterval(()=>{
//         getPatCount();
//     },10000); 
// },[])

  return (
    <>
      <Navbar isSideBarOpen={isSideBarOpen} setSidebar={setSidebar}/>
      {isSideBarOpen && <Sidebar />}
      <div style={{paddingTop: "7vh", width: "100vw"}}>
        <Outlet />
      </div>
    </>
  )
}

export default Home