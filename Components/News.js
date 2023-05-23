import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  //articles ek array variable hai news ka 
  // Articles = [  yeh sirf this.state ko explain krne k liye kia tha baki toh fetchapi se real newz dynamic layenge so cmment krdia
  //   {
  //     "source": {
  //       "id": "google-news",
  //       "name": "Google News"
  //     },
  //     "author": null,
  //     "title": "England fast bowler Sciver-Brunt retires from international cricket - Reuters",
  //     "description": "England fast bowler Sciver-Brunt retires from international cricket  Reuters",
  //     "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9jcmlja2V0L2VuZ2xhbmQtZmFzdC1ib3dsZXItc2NpdmVyLWJydW50LXJldGlyZXMtaW50ZXJuYXRpb25hbC1jcmlja2V0LTIwMjMtMDUtMDUv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
  //     "urlToImage": "https://i.guim.co.uk/img/media/9e66474315711585dc52422212fa326ca9f636f7/0_324_4858_2915/master/4858.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=f12de47c4ed190794d6f6d2ac5b398da",
  //     "publishedAt": "2023-05-05T12:14:00Z",
  //     "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "google-news",
  //       "name": "Google News"
  //     },
  //     "author": null,
  //     "title": "Sydney Cricket Ground gates named after Tendulkar, Lara - Reuters",
  //     "description": "Sydney Cricket Ground gates named after Tendulkar, Lara  Reuters",
  //     "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiYWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9zeWRuZXktY3JpY2tldC1ncm91bmQtZ2F0ZXMtbmFtZWQtYWZ0ZXItdGVuZHVsa2FyLWxhcmEtMjAyMy0wNC0yNC_SAQA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
  //     "urlToImage": "https://i.guim.co.uk/img/media/36edf1458b8ad0c191f224c06bf2a85ba747e8a2/0_300_4500_2700/master/4500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=effd5744db179d2cd45eb31d3fbd44cc",
  //     "publishedAt": "2023-04-24T08:20:00Z",
  //     "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "google-news",
  //       "name": "Google News"
  //     },
  //     "author": null,
  //     "title": "Mickey Arthur appointed Pakistan's director of cricket - Reuters",
  //     "description": "Mickey Arthur appointed Pakistan's director of cricket  Reuters",
  //     "url": "https://consent.google.com/ml?continue=https://news.google.com/rss/articles/CBMiZWh0dHBzOi8vd3d3LnJldXRlcnMuY29tL3Nwb3J0cy9jcmlja2V0L21pY2tleS1hcnRodXItYXBwb2ludGVkLXBha2lzdGFucy1kaXJlY3Rvci1jcmlja2V0LTIwMjMtMDQtMjAv0gEA?oc%3D5&gl=FR&hl=en-US&cm=2&pc=n&src=1",
  //     "urlToImage": "https://i.guim.co.uk/img/media/a35f3547b7b314ca707f1786b2421bc1f70469af/0_0_7725_4638/master/7725.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=e5c4cba378e549805e4df20b30b661d5",
  //     "publishedAt": "2023-04-20T14:51:00Z",
  //     "content": "We use cookies and data to<ul><li>Deliver and maintain Google services</li><li>Track outages and protect against spam, fraud, and abuse</li><li>Measure audience engagement and site statistics to unde… [+1131 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "wired",
  //       "name": "Wired"
  //     },
  //     "author": "Reece Rogers",
  //     "title": "What’s AGI, and Why Are AI Experts Skeptical?",
  //     "description": "ChatGPT and other bots have revived conversations on artificial general intelligence. Scientists say algorithms won’t surpass you any time soon.",
  //     "url": "https://www.wired.com/story/what-is-artificial-general-intelligence-agi-explained/",
  //     "urlToImage": "https://media.wired.com/photos/644051ca78b1686b7e2ea1bf/191:100/w_1280,c_limit/Scientists-Are-Sketpical-Of-AGI-Business-499295092.jpg",
  //     "publishedAt": "2023-04-20T11:00:00Z",
  //     "content": "Vishal Misra loves cricket and computer science. Years ago, the Columbia University professor cofounded Cricinfo, a collaborative website for sports fans to stay updated on match statistics. (Its now… [+3129 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "The Guardian"
  //     },
  //     "author": "Simon Burnton",
  //     "title": "England ‘legend’ Katherine Sciver-Brunt retires from international cricket",
  //     "description": "<ul><li>‘Cricket has given me a purpose and many golden memories’</li><li>ECB’s Clare Connor: ‘She has been an unbelievable role model’</li></ul>After 267 games, 335 wickets, 1,864 runs, 19 years, four Ashes victories and three in World Cups, Katherine Sciver…",
  //     "url": "https://www.theguardian.com/sport/2023/may/05/england-legend-katherine-sciver-brunt-retires-from-international-cricket",
  //     "urlToImage": "https://i.guim.co.uk/img/media/0aa9057291d9e239c1bde68d1664123118faad71/0_101_2772_1663/master/2772.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=b0720409335fa6ac1a3270bb08f52486",
  //     "publishedAt": "2023-05-05T14:34:28Z",
  //     "content": "After 267 games, 335 wickets, 1,864 runs, 19 years, four Ashes victories and three in World Cups, Katherine Sciver-Brunt has announced her retirement from international cricket. The decision continue… [+8232 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "The Guardian"
  //     },
  //     "author": "Gary Naylor",
  //     "title": "County cricket: Warwickshire go top with Surrey lurking in second",
  //     "description": "The 2021 champions have taken an early lead in Division One, with 2022 champions Surrey looming in their rear-view mirrorBy Gary Naylor for the 99.94 Cricket BlogSometimes winning cricket matches looks easy, as if there is a recipe or formula to be followed, …",
  //     "url": "https://www.theguardian.com/sport/99-94-cricket-blog/2023/apr/17/county-cricket-warwickshire-top-surrey-second",
  //     "urlToImage": "https://i.guim.co.uk/img/media/e915692eab3bd6d21cd5ca70d1dcec89bc3d10fe/0_129_4590_2754/master/4590.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=e4377a5c7104ccd1a3ce39ca6572298e",
  //     "publishedAt": "2023-04-17T12:06:14Z",
  //     "content": "Ball one: Bears find sealing the win no picnic\r\nSometimes winning cricket matches looks easy, as if there is a recipe or formula to be followed, but its seldom as straightforward as it appears. Invit… [+7455 chars]"
  //   }
  // ];



  //contructor call hoga jab jab class ka object bnega

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

  // handleprevclick = async ()=>{
  // //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f091ddf22bdb4ecbbf42e1ecaf210696&page=${this.state.page-1}&pageSize=${this.props.pageSize}`; 
  // //  let fetchapi = await fetch(url);  //yeh didmount async wait kr raha fetch(url) se data ane ka by using await key 
  // //  let parsedata = await fetchapi.json(); //same here jabtak json me parse ni hoga await krega parsedata
  // //  this.setState({loading:true});
  // await this.setState({ //setstate se hum articles key me parsedata.articles dal denge
  //   page : this.state.page - 1,
  //   // articles: parsedata.articles,
  //   // loading:false

  //     //await isiliye use ki this.state me kuki next per click krte hi phle hum increment ka wait krenge with help of await uske baadd fetchnews hogi next page agr awati ni use krte toh setstate page ko increment krta but wait ni krta or fetchnew function call ho jara same news k old page k sth same for prev

  // })
  // this.fetchnews();


  // } //yeh comment krdia kuki ab hum next prev ni inifine scroll krnenge

  // handlenextclick = async ()=>{
  // //  if(!(this.state.page+1 > Math.ceil(this.state.totalArticles/this.props.pageSize))){ //agr iska viceversa krna hai coniditon ka toh <= krna tab sahi run hoga or if k andr phir else waal code ayega or else blaank hoga tab

  //   // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=f091ddf22bdb4ecbbf42e1ecaf210696&page=${this.state.page+1}&pageSize=${this.props.pageSize}`; 
  //   // let fetchapi = await fetch(url);  //yeh didmount async wait kr raha fetch(url) se data ane ka by using await key 
  //   // let parsedata = await fetchapi.json(); //same here jabtak json me parse ni hoga await krega parsedata

  //   // this.setState({loading:true});
  //   await this.setState({ //setstate se hum articles key me parsedata.articles dal denge
  //     // articles: parsedata.articles,
  //     page : this.state.page + 1,
  //     // loading:false

  //     //await isiliye use ki this.state me kuki next per click krte hi phle hum increment ka wait krenge with help of await uske baadd fetchnews hogi next page agr awati ni use krte toh setstate page ko increment krta but wait ni krta or fetchnew function call ho jara same news k old page k sth same for prev
  //   })
  //   this.fetchnews();


  // //}

  // } //yeh comment krdia kuki ab hum next prev ni inifine scroll krnenge

  
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
