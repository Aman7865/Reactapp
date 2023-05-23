import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

 
  constructor() {
    super(); //yeh keywowrd jrurit hia likna agr constructor use krna  toh or constructor render body se phle caall hota hai
    console.log("i m news.js constructor and run sabse phle yeh first run hoga");
    this.state = {
      articles: [],//isko blank krdia hai kuki hum isko set componentdidmount me krenge
      loading: true,
      page: 1,
      totalArticles: 0
    }
  }

  //fetchnews from url function for reuse in class
  async fetchnews() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f091ddf22bdb4ecbbf42e1ecaf210696&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let fetchapi = await fetch(url);  //yeh didmount async wait kr raha fetch(url) se data ane ka by using await key 
    let parsedata = await fetchapi.json(); //same here jabtak json me parse ni hoga await krega parsedata
    this.setState({ //setstate se hum articles key me parsedata.articles dal denge
      articles: parsedata.articles,
      totalArticles: parsedata.totalResults,
      loading: false
    })
  }


  //componendtdidmount ek react clsss k lifecycle ka part hai jo ki render boldy k run k bd run hota jisko humko this.setstate krne me or fetch code likne me use krenge

  async componentDidMount() { //async mtlb yeh didmount wait krega ek promise return hone tak jab tak run ni hoga
    console.log("run cdm after render function")
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f091ddf22bdb4ecbbf42e1ecaf210696&page=${this.state.page}&pageSize=${this.props.pageSize}`; 
    // this.setState({loading:true});
    // let fetchapi = await fetch(url);  //yeh didmount async wait kr raha fetch(url) se data ane ka by using await key 
    // let parsedata = await fetchapi.json(); //same here jabtak json me parse ni hoga await krega parsedata
    this.fetchnews();
    // this.setState({ //setstate se hum articles key me parsedata.articles dal denge
    //   articles: parsedata.articles,
    //   totalArticles : parsedata.totalResults,
    //   loading:false
    // })
  }

  

  
  fetchMoreData = async  ()=>{
    this.setState({page: this.state.page+1});

    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f091ddf22bdb4ecbbf42e1ecaf210696&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    let fetchapi = await fetch(url);  //yeh didmount async wait kr raha fetch(url) se data ane ka by using await key 
    let parsedata = await fetchapi.json(); //same here jabtak json me parse ni hoga await krega parsedata
    this.setState({ //setstate se hum articles key me parsedata.articles dal denge
      articles: this.state.articles.concat(parsedata.articles)
    })
  }
  render() {
    return (
      <>
        <h1 className='text-center'>IndiaNews - Top Headlines</h1>
        {this.state.loading && <Spinner/>} 

          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length!==this.state.totalArticles}
            loader={<Spinner/>}>
              <div className="container my-3">
        <div className="row my-4">
              
            {this.state.articles.map((elements) => {
              return <div className="col-md-4" key={elements.url}>
                <Newsitem title={elements.title} description={elements.description} imgUrl={elements.urlToImage} newsUrl={elements.url} author={elements.author} date={elements.publishedAt} source={elements.source.name} />
              </div>
            })}
        </div>
        </div>
          </InfiniteScroll>
        {/* <div className="container d-flex justify-content-between">
          <button disabled={this.state.page === 1 && "disabled"} type="button" className="btn btn-dark" onClick={this.handleprevclick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalArticles / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handlenextclick}>Next &rarr;</button>
        </div> */}

</>
    )
  }
}

export default News
