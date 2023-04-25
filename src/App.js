
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  Routes,
  HashRouter,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';

export default class App extends Component {
  state={
     progress:0
  }
  setProgres=(progress)=>
  {
      this.setState({progress:progress})
  }
  
  pageSize=12
  apikey=process.env.REACT_APP_NEWS_API
  // .env file should be in base folder(NewsApp) and use REACT_APP to access the var
  
  render() {
    return (
     <HashRouter basename='/'> 
      {/* <Router> */}
      <div>
       
       <NavBar/>
       <LoadingBar height={4}
        color='#f11946'
        progress={this.state.progress}/>

        <Routes>
          <Route exact path="/" element={<News key="general"  setProgress={this.setProgres}   pageSize={this.pageSize} country="in" category="general" apikey={this.apikey}/>}> </Route>
          <Route exact path="/business" element={<News key="business" setProgress={this.setProgres}  pageSize={this.pageSize} country="in" category="business" apikey={this.apikey}/>}> </Route>
          <Route exact path="/entertainment" element={<News key="entertainment"  setProgress={this.setProgres}  pageSize={this.pageSize} country="in" category="entertainment" apikey={this.apikey}/>}> </Route>
          <Route exact path="/general" element={<News key="general" setProgress={this.setProgres}  pageSize={this.pageSize} country="in" category="general" apikey={this.apikey}/>}> </Route>
          <Route exact path="/health" element={<News key="health" setProgress={this.setProgres}   pageSize={this.pageSize} country="in" category="health" apikey={this.apikey}/>}> </Route>
          <Route exact path="/science" element={<News key="science" setProgress={this.setProgres}  pageSize={this.pageSize} country="in" category="science" apikey={this.apikey}/>}> </Route>
          <Route exact path="/sports" element={<News  key="sports" setProgress={this.setProgres}   pageSize={this.pageSize} country="in" category="sports" apikey={this.apikey}/>}> </Route>
          <Route exact path="/technology" element={<News  key="technology"  setProgress={this.setProgres} pageSize={this.pageSize} country="in" category="technology" apikey={this.apikey}/>}> </Route>
        </Routes>
      </div>
      {/* </Router> */}
      </HashRouter>
    )
  }
}


// render() method is life cycle method it renders html on screen
