import React, { useContext, useEffect } from 'react'
import ReproItem from './ReproItem'
import dataContext from '../context/dataContext'


const Repo = () => {
   
  const context = useContext(dataContext)
  const { reprodata} = context

  useEffect(() => {
    // eslint-disable-next-line
  }, [])


  return (
    <div>
      <div className="row">
        {reprodata.map((element) => {
          return (
            <div className="col-md-4" key={element.id}>
              <ReproItem name={element.name} description={element.description} languages={element.language} id={element.owner.id} /> 
            </div>
          );
        })}
      
      </div>
    </div>
  )
}

export default Repo
