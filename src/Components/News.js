import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner/Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps = {
    country:'in',
    pagesize: 12,
    category: 'general'
    }
    static propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
    }
    constructor(){
        super();
        console.log("hii");
        this.state= {
           articles: [],
           loading: false,
           page:1,
        }
    }

    async updateNews(){
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=249b51477aa64763b616f3b6f48324c6&page=${this.state.page}&pageSize=${this.props.pageSize}` ;
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

    async componentDidMount(){
      this.updateNews();
    }
    handleNextClick = async () => {
      this.setState({page: this.state.page + 1});
      this.updateNews();

    }
    handlePrevClick = async () => {
      this.setState({page: this.state.page - 1});
      this.updateNews();
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
            <NewsItem  title={element.title ?element.title.slice(0,50):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
        </div> })}
          <div className="button-container">
          <div className="d-flex justify-content-between">
            <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type='button' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className='btn btn-dark' onClick={this.handleNextClick}> Next &rarr;</button>
          </div>
          </div>
            
            
        </div>
      </div>

    </>
    )
  }
}
