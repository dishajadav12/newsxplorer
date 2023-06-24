import React, { Component } from 'react'
import NewsItem from './NewsItem'
import { NEWS_API } from './api';
import Spinner from './spinner/Spinner';

export default class News extends Component {

    constructor(){
        super();
        console.log("hii");
        this.state= {
           articles: [],
           loading: false,
           page:1,
           totalResults: 0
        }
    }
    async componentDidMount(){
        let url = NEWS_API+ "&page=1";
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
          loading: false,
          articles: parsedData.articles,
          totalResults: parsedData.totalResults,
          
        })
    }
    handlePrevClick = async () => {
      const { page } = this.state;
      const prevPage = page - 1;
      let url = NEWS_API + `&page=${prevPage}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        page: prevPage,
        articles: parsedData.articles,
        loading: false

      });
    }
    
    handleNextClick = async () => {
      const { page, totalResults } = this.state;
      const nextPage = page + 1;
      if (!(nextPage > Math.ceil(totalResults / 12))) {
      let url = NEWS_API + `&page=${nextPage}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();      
      this.setState({
        page: nextPage,
        articles: parsedData.articles,
        loading: false
      });
       
      }
    }
    
    
      

  render() {
    return (
    <>
      <div className='conmtainer my-3'>
        <h2 className='text-center'>NewsXplorer - Top Headlines</h2>
        {this.state.loading && <Spinner/>}
        <div className="row my-3" >
         {!this.state.loading && this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url} >
            <NewsItem  title={element.title ?element.title.slice(0,50):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
        </div> })}
          <div className="button-container">
          <div className="d-flex justify-content-between">
            <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type='button' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 12)} className='btn btn-dark' onClick={this.handleNextClick}> Next &rarr;</button>
          </div>
          </div>
            
            
        </div>
      </div>

    </>
    )
  }
}
