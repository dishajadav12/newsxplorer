import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { NEWS_API } from './api';


export default class News extends Component {

    constructor(){
        super();
        console.log("hii");
        this.state= {
           articles: [],
           loading: false,
           page:1
        }
    }
    async componentDidMount(){
        let url = NEWS_API+ "&page=1";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles,  totalResults: parsedData.totalResults})
    }
    handlePrevClick = async () => {
      const { page } = this.state;
      const prevPage = page - 1;
      let url = NEWS_API + `&page=${prevPage}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: prevPage,
        articles: parsedData.articles
      });
    }
    
    handleNextClick = async () => {
      const { page, totalResults } = this.state;
      const nextPage = page + 1;
      if (nextPage > Math.ceil(totalResults / 8)) {

        return;
      }
      let url = NEWS_API + `&page=${nextPage}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      
      console.log(parsedData);
      
      this.setState({
        page: nextPage,
        articles: parsedData.articles
      });
    }
    
    
      

  render() {
    return (
    <>
      <div className='conmtainer my-3'>
        <h2>NewsXplorer - Top Headlines</h2>
        <div className="row my-3" >
        {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url} >
            <NewsItem  title={element.title ?element.title.slice(0,50):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div> })}
          <div className="button-container">
          <div className="d-flex justify-content-between">
            <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type='button' className='btn btn-dark' onClick={this.handleNextClick}> Next &rarr;</button>
          </div>
          </div>
            
            
        </div>
      </div>

    </>
    )
  }
}
