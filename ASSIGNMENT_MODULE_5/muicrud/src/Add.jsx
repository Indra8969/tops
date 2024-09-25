import React, { useState } from "react";
import BasicButtons from "./Btn.jsx";
import { useNavigate } from "react-router-dom";

export const Add = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [des, setDes] = useState('');
  const handlesubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:4001/data',{
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            name,des
        })
    })
    .then(()=>{
        navigate('/')
    })
  };
  return (
    <>
      <div>
        <BasicButtons route={"/add"} />
        <form
          onSubmit={handlesubmit}
          style={{
            padding: "20px 0px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <input
            required
            type="text"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            placeholder="Enter name"
            style={{ height: "40px", padding: "0px 10px" }}
          />
          <input
            required
            type="text"
            value = {des}
            onChange={(e)=>{setDes(e.target.value)}}
            placeholder="Enter Discription"
            style={{ height: "40px", padding: "0px 10px" }}
          />
          <input
            required
            type="submit"
            placeholder="Enter Discription"
            style={{ height: "40px", padding: "0px 10px" }}
          />
        </form>
      </div>
    </>
  );
};
