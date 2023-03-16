import React, { useEffect, useState } from 'react'
import axios from "../utils/axiosInstance"
import BedUi from './BedUi';

const StatusDashboard = () => {

  const [statusData, setStatusData] = useState();
  const [bedCount, setBedCount] = useState({});
  const [showList, setShowList] = useState([]);

  const getDeptData = ()=>{
    axios.get("getDepartments")
    .then((res) => {setStatusData(res.data);
      setShowList(Array(res.data.length).fill(false))})
  }

  const getBedCount = () => {
     axios.get("getBedCount")
     .then((res) => setBedCount(res.data))
  }

  const setList = (i) => {
    const temp = Array(statusData.length).fill(false)
    temp[i] = true;
    setShowList(temp);
  }
 
  useEffect(() => {
     getDeptData();
     getBedCount();
    },[])

    return (
    <div style={{margin: "40px 180px"}}>
      <div style={{background: "gray", height: "7vh", display: "flex", justifyContent: "space-around", alignItems: "center",
      marginTop: "3vh"}}>
        <b>Total Beds: {bedCount.totalBeds}</b>
        <b>Beds occupied: {bedCount.occupiedBeds}</b>
        <b>Beds vaccant: {bedCount.vaccnatBeds}</b>
      </div>
      <div>
        {statusData && statusData.map((x, i) => {
            return(
                <div key={i} style={{border: "1px solid", borderColor: "gray"}}>
                   <h1 style={{display: "flex", justifyContent: "center", cursor: "pointer"}} onClick={() => setList(i)}>{x.deptName}</h1>
                   {showList[i] && x.units.map((y, j) => {
                    return(
                      <div key={j}>
                        <h2 style={{display: "flex", justifyContent: "center"}}>{y.unitName}</h2>
                        {y.wards.map((z, k) => {
                           return(
                            <>
                            <h3 style={{display: "flex", justifyContent: "center"}}>{z.wardName}</h3>
                            <div key={k} style={{display: "flex", flexWrap: "wrap"}}>
                      
                                {z.beds.map((a, l) => {
                                   return(
                                    <div key={l}>
                                       <BedUi name={a}/>
                                    </div>
                                   )
                                })}
                            </div></>
                           )
                        })}
                      </div>
                    )
                   })}
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default StatusDashboard