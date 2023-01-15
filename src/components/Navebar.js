import React,{useContext} from 'react'

import Repo from './Repo';
import dataContext from '../context/dataContext'
import Profile from './Profile'
import Alert from './Alert';

const Navebar = () => {
    const context=useContext(dataContext)
    const{setusername,username,updaterepro,notuser,updateprofile,profile,showAtset,alert}=context
    
     
    const onchange=(e)=>{
        setusername(e.target.value)
    }
     
    const handleclick = async(event) => {
        
        event.preventDefault();
          setusername(event.target.value)
          await updaterepro(username);
          await updateprofile(username);
          notuser==="Not Found"||notuser===null||notuser===''? showAtset("your repro is here","Sucess"):showAtset("Not Found","User");
          // eslint-disable-next-line 
        
        
      }


       

    return ( 
        <div > 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Bootstrap" width="30" height="30" />
                </a>
                <a className="navbar-brand" href="#">YourGitHub</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex mx-5" role="search">
                        {/* <input className="form-control me-2" type="search" placeholder="Github userid"  onChange={onchange} value={username} aria-label="Search" /> */}
                        <input type="text" className="form-control me-2" id="username" placeholder="Github userid" value={username} name="username" aria-describedby="emailHelp" onChange={onchange} />
                        <button className="btn btn-outline-success"type="submit" onClick={handleclick}>Search</button>
                        
                    </form>
                </div>
            </div>
        </nav> 
        <Alert alert={alert}/>  
           {notuser==="Not Found"||notuser==="undefine"||notuser===''?'':<Profile id={profile.id} login={profile.login} bio={profile.bio} location={profile.location} twitter_username={profile.twitter_username}/>}
           {notuser==="Not Found"||notuser==="undefine"?'':<Repo/>}
        </div>
         

    )
     
}

export default Navebar
