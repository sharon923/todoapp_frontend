import React, { useEffect, useState } from 'react'
import HeaderList from './HeaderList'
import axios from 'axios'

const ViewList = () => {
        const[data, dataChange] = useState([])

        const fetchData=()=>{
                axios.get("https://dummyjson.com/todos").then(
                        (response)=>{
                               dataChange(response.data.todos)
                        }
                )
        }

        useEffect(()=>{fetchData()}, [])
  return (
    <div>
        <HeaderList/>
        <div className="container">
                <br></br><br></br>
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        {data.map(
                                (value, i)=>{
                                        return <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                        <div class="card">
                                        <h5 class="card-header">{value.id}</h5>
                                        <div class="card-body">
                                        <p class="card-text">{value.todo}</p>
                                        {value.completed?<p className='text-success'>(Task completed)</p>:<p className='text-danger'>(task not completed)</p>}
                                        </div>
                                        </div>
        
                                </div>
                                }
                        )}
                       
                       
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default ViewList