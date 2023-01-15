import React from 'react'
import dataContext from "./dataContext";
import { useState } from "react";
import PropTypes from 'prop-types'

const DataState=(props)=> {
    const [reprodata, setreprodata] = useState([]);
    const [username, setusername] = useState('')
    const [notuser,setnotuser]=useState('')
    const [profile,setprofile]=useState('')
    const[notprofile,setnotprofile]=useState(null)
    const[length,setlength]=useState('')
    const [alert, setAlert] = useState(null);
    const showAtset = (message, type) => {
      setAlert({
        message: message,
        type: type
  
      })
  
  
    }
    const updaterepro = async (username) => {
        // console.log("update is calling")
        let url = `https://api.github.com/users/${username}/repos`
        let data = await fetch(url)
        let parseData = await data.json();
        setnotuser(parseData.message)
        setreprodata(parseData)
        // console.log(parseData.message)
        setlength(parseData.length)
      }
      const updateprofile= async (username) => {
        // console.log("update is calling")
        let url = `https://api.github.com/users/${username}`
        let data = await fetch(url)
        let parseData = await data.json();
        setnotprofile(parseData.message)

        setprofile(parseData)
        // console.log(notprofile)
        
      }

     
  return (
      <dataContext.Provider value={{reprodata,updaterepro,setusername,username,notuser,updateprofile,notprofile,profile,length,setlength,showAtset,alert}}>
      {props.children}
    </dataContext.Provider>
     
  )
}
DataState.defaultProps = {
    username: 'CodeWithHarry'
  }
  
DataState.propTypes = {
    username: PropTypes.string  
  }

export default DataState
