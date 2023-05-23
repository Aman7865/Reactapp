import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imgUrl,newsUrl,author,date,source} = this.props; //iss class based react me props hum function ki trah parameter se props.title krke fetch ni kr skte uske liye humko aise let {title,dexi}=this.props krna hoga class base react \me
    return (
      <div>
        
        <div className="card my-3" style={{width: "18rem"}}>
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {source }  </span>
  <img src={imgUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title.slice(0,30)}</h5>
    <p className="card-text">{description?description.slice(0,88):"Click Read More"}</p>
    <p className="card-text"><small className="text-body-secondary">By {author?author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
    <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-primary">Read More</a>
  </div>
</div>
      </div>
    )
  }
}

export default Newsitem
