import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { NEWS_API } from './api';


export default class News extends Component {

    constructor(){
        super();
        console.log("hii");
        this.state= {
           articles: [],
           loading: false
        }
    }
    async componentDidMount(){
        let url = NEWS_API;
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
    }
  render() {
    return (
    <>
      <div className='conmtainer my-3'>
        <h2>NewsXplorer - Top Headlines</h2>
        <div className="row my-3" >
        {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url} >
            <NewsItem  title={element.title /* ?element.title.slice(0,50):"" */} description={element.description/* ?element.description.slice(0,88):"" */} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div> })}

            
            
        </div>
      </div>

    </>
    )
  }
}
