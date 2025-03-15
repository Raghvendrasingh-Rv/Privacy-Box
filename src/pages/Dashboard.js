import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import "../App.css"
import "../Style/component.css"

import MediaType from "../Component/MediaType"
import Navbar from '../Component/Navbar';

export const Dashboard = () => {
  const navigate = useNavigate();
  // const navigation = useNavigation();
  // const { username } = route.params;
  // console.log({username});

  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(!token) navigate("/");
  },[navigate]);

  return (
    <div className="main">
      <Navbar/>
      <h2>Homepage</h2>
      <div className='content'>
        <MediaType heading="Texts" param={1} />
        <MediaType heading="Images" param={2} />
        <MediaType heading="Videos" param={3} />
        <MediaType heading="Hidden Item" param={4} />
      </div>
    </div>
  )
}
