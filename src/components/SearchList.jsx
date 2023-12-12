import React, { useState } from 'react'
import HeaderList from './HeaderList'

const SearchList = () => {
    const[inputData, changeInputData] = useState(
        {
            "todo":""
            
        }
    )

    const inputHandler =(event)=>{
         changeInputData({...inputData,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(inputData)
    }
  return (
    <div>
        <HeaderList/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                     <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">To-Do:</label>
                            <input type="text" className="form-control" name='todo' value={inputData.todo} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-success">SUBMIT</button>
                        </div>
                     </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SearchList