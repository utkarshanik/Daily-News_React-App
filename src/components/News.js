import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  static defalutProps={
    country:'us',
    pageSize: 8,
    category:'general',
    apikey:'bd64f3f05ed14e49bb0b6a801f362017'
  }
  
   static propTypes={
       country: PropTypes.string,
       pageSize:PropTypes.number,
       category:PropTypes.string,
       apikey:PropTypes.string
  
  }
   

  constructor(props){
    super(props);
    this.state={
       articles:[],
       loading:true,
       page:1,
       totalResults:0
    }
    // console.log(this.state.page);     
     console.log(this.state.loading);        
    document.title=`${this.capitalizeFirstLetter(this.props.category)} -DailyNews` 
  }    

async updateNews()
{
    this.props.setProgress(10);
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data =await fetch(url);
    this.props.setProgress(25);
    this.props.setProgress(57);
    let parsedData= await data.json();
    this.setState({
      articles:parsedData.articles,
      totalResults:parsedData.totalResults,
      loading:false      
  })
  this.props.setProgress(100)
  console.log(this.state.page);     
   
}  
      
async  componentDidMount()
  {
  //   this.props.setProgress(10);
  //   let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
  //   this.setState({loading:true})
  //   let data =await fetch(url);
  //   this.props.setProgress(25);
  //   let parsedData= await data.json();
  //   this.props.setProgress(57);
  //   this.setState({articles:parsedData.articles,
  //   totalResults:parsedData.totalResults,
  //   loading:false
  // })
  // this.props.setProgress(100)
    this.updateNews();
    console.log(this.state.page);
  }

 capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

fetchMore= async()=>{
    this.setState({page:this.state.page + 1 })  
    const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
    let data =await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:this.state.articles.concat(parsedData.articles),
    totalResults:parsedData.totalResults,
  })
}

  render() {
    return (
    <>
      <h2 className="text-center" style={{margin: '25px 0px'}}>DailyNews  - Top HeadLine On  {this.capitalizeFirstLetter(this.props.category)}</h2>
      {this.state.loading && <Spinner/>}        
       <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMore}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}>
      <div className="container">
         <div className="row">
       {/* {!this.state.loading && this.state.articles.map((element)=>{  */}
         {this.state.articles.map((element)=>{return <div className="col-md-4"  key={element.url}>
           <NewsItem title={element.title ? element.title.slice(0,45):""} description={element.description ? element.description.slice(0,88) : ""} imageUrl={element.urlToImage}  newsUrl={element.url }
           author={element.author} date={element.publishedAt} source={element.source.name} />
           </div>
        })}
        </div>             
      </div>
      </InfiniteScroll>
      
        {/* <div className="contaniner d-flex justify-content-between" > 
        <button type="button" disabled={ this.state.page<=1} className="btn btn-dark" onClick={this.handleprevious}>&larr;Previous</button>
        <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark " onClick={this.handlenext}>Next&rarr;</button>
          
         </div>
          */}

    </>   
    )
  }
}

export default News

    
//  handlenext=async()=>{
   
//   if(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))
//      {

//      }
//     else{    
//       let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
//       let data =await fetch(url);
//       this.setState({loading:true})
//       let parsedData= await data.json();
//       console.log(parsedData);
//       console.log(this.state.page);
//       this.setState({
//         page:this.state.page+1 ,
//         articles:parsedData.articles,
//         loading:false    
//       })  
//     } 
    
//           // this.setState({page:this.state.page+1})
//           //   // console.log(this.state.page);
//           // this.updateNews();
//   }

//   handleprevious=async()=>{
//     let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
//     this.setState({loading:true});
   
//     let data =await fetch(url);
//     let parsedData= await data.json();
//     console.log(this.state.page);
//     this.setState({
//       page:this.state.page-1 ,
//       articles:parsedData.articles,
//       loading:false    
      
//     })
   
//     // this.setState({page:this.state.page - 1});
//     // this.updateNews();

//   }



  // articles=[
//           {
//             "source": {
//                 "id": "espn-cric-info",
//                 "name": "ESPN Cric Info"
//             },
//             "author": null,
//             "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
//             "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
//             "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
//             "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
//             "publishedAt": "2020-03-30T15:26:05Z",
//             "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
//         },
//         {
//           "source": {
//               "id": "espn-cric-info",
//               "name": "ESPN Cric Info"
//           },
//           "author": null,
//           "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
//           "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
//           "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
//           "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
//           "publishedAt": "2020-04-27T11:41:47Z",
//           "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
//       },
//       {
//         "source": {
//         "id": null,
//         "name": "ESPN"
//         },
//         "author": null,
//         "title": "Yankees place Giancarlo Stanton (hamstring) on 10-day IL - ESPN",
//         "description": "The Yankees placed Giancarlo Stanton on the 10-day injured list after he felt an injury to his hamstring while running the bases.",
//         "url": "https://www.espn.com/mlb/story/_/id/36205678/yankees-place-giancarlo-stanton-hamstring-10-day-il",
//         "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0819%2Fr1050455_1296x729_16%2D9.jpg",
//         "publishedAt": "2023-04-16T15:55:25Z",
//         "content": "The New York Yankees placed Giancarlo Stanton on the 10-day injured list with a left hamstring strain, the team announced Sunday.\r\nStanton was replaced by a pinch runner after hitting a two-run doubl… [+2148 chars]"
//     }   
// ]  
