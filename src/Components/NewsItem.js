import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title, description, imageUrl,newsUrl} = this.props;
    return (
 <>
    
        <div className="card my-3" style={{height:"400px"}}>
            <img src={!imageUrl?"https://ichef.bbci.co.uk/news/1024/branded_news/DA5C/production/_130000955_a0c3eedf-f816-4fce-ac7d-9e752c18ea73.jpg": imageUrl} className="card-img-top" alt="..." style={{height:"180px"}}/>
        <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text" style={{height:"70px"}}>{description}...</p>
            <a rel='noreferrer' href={newsUrl} target="_blank" className="btn btn-primary btn-sm">Read More</a>
        </div>
    </div>
 </>
    )
  }
}

export default NewsItem