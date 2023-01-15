import React from 'react'

function Alert(props) {
  return (

    // console.log(props.alert)


             props.alert!==null && <div className="alert alert-success alert-dismissible fade show"  role="alert">
            
                 <strong>{props.alert.type} </strong>:-{props.alert.message}
                 <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
             
 
    
  )
}

export default Alert