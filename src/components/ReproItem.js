import React,{useEffect} from 'react'
// import Profile from './Profile'

const ReproItem = (props) => {
  useEffect(() => {
     // eslint-disable-next-line
  }, [])

  return (
    <div className="container">
      <div className="my-4">
        <div className="mx-4">
          <div className="card" style={{ width: "18rem", margin: "2px" }}>
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description ? props.description : "no desecription"}</p>
              {props.languages&&<a className="btn btn-primary" href="#" role="button" >{props.languages} </a>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReproItem
