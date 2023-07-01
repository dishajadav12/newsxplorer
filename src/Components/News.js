import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './spinner/Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

 const News = (props) =>  {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState([])
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalize= (string) => {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    News.defaultProps = {
    country:'in',
    pagesize: 12,
    category: 'general'
    }
    News.propTypes = {
    country: PropTypes.string,
    pagesize: PropTypes.number,
    category: PropTypes.string
    }
    
     const updateNews = async() => {
      props.setProgress(10);
      const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}` ;
      setLoading(true);
      const data = await fetch(url);
      props.setProgress(40);
      const parsedData = await data.json();
      props.setProgress(70);
      setArticles(parsedData.articles);
      setTotalResults(parsedData.totalResults);
      setLoading(false);
      props.setProgress(100);
    }
    useEffect(() =>{
      document.title= `${capitalize(props.category)} - NewsXplorer` ;
        updateNews();
        //eslint-disable-next-line
    },[])

     const fetchMoreData = async () => {
      const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apikey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}` ;
      setPage(page+1);
      const data = await fetch(url);
      const parsedData = await data.json();
      console.log(parsedData);
      setArticles(articles.concat(parsedData.articles));
      setTotalResults(parsedData.totalResults);
      setLoading(false);
    };

    return (
    <>
      <div className='conmtainer my-3'>
        <div className="header" style={{marginTop:"20px"}}>
          <h2 className='text-center'>Top {capitalize(props.category)} Headlines </h2>
        </div>
        {loading && <Spinner/>}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults}
          loader={<Spinner />}
        >
          <div className="container">
        <div className="row my-3" >
         {articles.map((element)=>{
            return <div className="col-sm-6 col-md-3" key={element.url} >
            <NewsItem  title={element.title ?element.title.slice(0,50):""}
             description={element.description?element.description.slice(0,88):""} 
             imageUrl={element.urlToImage} newsUrl={element.url} 
             author={element.author} date={element.publishedAt} 
             source={element.source.name} category={props.category}/>
            </div> })}  
            </div>  
        </div>
        </InfiniteScroll>

      </div>

    </>
    )
  }

export default News