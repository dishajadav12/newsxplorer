import React from 'react'
import '../App.css'

 
  const NewsItem = (props) =>{
  let {title, description, imageUrl,newsUrl, author, date, source} = props;
    return (
 <>
        <div className="card my-3" style={{height:"450px"}}>
            <span className="badge bg-danger" 
            style={{display:"flex", justifyContent:"flex-end", position:"absolute", right:"0", borderRadius:"0%"}}>
              {source}
            </span>
            <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/DA5C/production/_130000955_a0c3eedf-f816-4fce-ac7d-9e752c18ea73.jpg": imageUrl} className="card-img-top" alt="..." style={{height:"180px"}}/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text" style={{height:"70px"}}>{description}...</p>
            <p className='card-text' style={{height:"50px"}}><small className='text-muted'>By {!author?"Unknown" : author} on {date}</small></p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More</a>
        </div>
    </div>
 </>
    )
  }


export default NewsItem