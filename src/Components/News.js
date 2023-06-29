import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner/Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

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
    capitalize= (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props){
        super(props);
        this.state= {
           articles: [],
           loading: true,
           page:1,
           totalResults: 0,
        }
        document.title= `${this.capitalize(this.props.category)} - NewsXplorer` ;
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
     fetchMoreData = async () => {
      this.setState({page: this.state.page + 1})
      let url =`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=249b51477aa64763b616f3b6f48324c6&page=${this.state.page}&pageSize=${this.props.pageSize}` ;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        loading: false,
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults,

        
      })
    };

  render() {
    return (
    <>
      <div className='conmtainer my-3'>
        <h2 className='text-center'>NewsXplorer - Top {this.capitalize(this.props.category)} Headlines </h2>
        {this.state.loading && <Spinner/>}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length < this.state.totalResults}
          loader={<Spinner />}
        >
          <div className="container">
        <div className="row my-3" >
         {this.state.articles.map((element)=>{
            return <div className="col-md-3" key={element.url} >
            <NewsItem  title={element.title ?element.title.slice(0,50):""}
             description={element.description?element.description.slice(0,88):""} 
             imageUrl={element.urlToImage} newsUrl={element.url} 
             author={element.author} date={element.publishedAt} 
             source={element.source.name}/>
            </div> })}  
            </div>  
        </div>
        </InfiniteScroll>

      </div>

    </>
    )
  }
}
