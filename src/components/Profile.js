import React from 'react'
// import useMediaQuery from '@mui/material/useMediaQuery';
import styled, { css } from 'styled-components';

const Profile = (props) => {
  const Stylephone=styled.div`
  width:200px;
   @media(min-width:260px) and (max-width:1000px){
    width:200px;
  //  background-color:red;
    //  margin-top:150px;
     margin-right:250px
   
   }
  `;
  return (
    <div className="container ">
        <div className="row">
          <div className="col-3">  
          <div className="my-1">  
            <img src={`https://avatars.githubusercontent.com/u/${props.id}?v=4`} width="200" height="200" alt="" />
            </div>
          </div>
           
          <Stylephone className="col-3">
          <div className="my-7">
            <a href="#">{props.login}</a> 
          </div>
          <div className="my-2" >
            {props.bio?props.bio:"Bio Not Available"}
            
          </div>
          <div className="my-2">
            {props.location?props.location:"location Not Available"}
           
          </div>
          <div className="my-2">
            {props.twitter_username?props.twitter_username:"Twitter id Not Avalible"}  
          </div>
          </Stylephone>
        </div>
         
        <div className="row">
        <div className="col-3">
          <div className="my-1"> 
            <a href={`https://github.com/${props.login}`} target="_blank" style={{ margin: 20 }}> {`https://github.com/${props.login}`}</a>
          </div>
           </div>
          
        </div>
      </div>
     
     


  )
}

export default Profile
