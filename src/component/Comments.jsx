import React,{useContext} from 'react'
import { DataContext } from '../Context'

function Comments() {
    const context = useContext(DataContext)
    const [comments]=context.commentApi.comments

  return (
    <div className="container">
      <div className="row">
          <div className="col-md-12 text-center">
            <div className="display-3 text-success">Comments</div>
          </div>
      </div>
      <div className="row">
        {
          comments && comments.map((item,index)=>{
            return(
              <div className="col-md-3 mt-2 mb-2">
                <div className="card">
                  <div className="card-header"><h4>{item.id}{item.name}</h4></div>
                  <div className="card-body"><p className="text-primary">{item.body}</p></div>
                  <div className="card-footer"><p className="text-success float-end">{item.email}</p></div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Comments
