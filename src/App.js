import './App.css';
import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  Routes,
  HashRouter,
  Route,
} from "react-router-dom";


const App=()=> {
  const pageSize=12
  const apikey=process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0);
  const [bg, setBg] = useState('light')
  const [mode, setMode] = useState("Enable Dark Mode")

const togg=()=>{
    if(bg==='light')
    {
        setBg('dark');
        setMode("Enable Light Mode")
        document.body.style.backgroundColor='#343a40';
    }
    else{
       setBg('light');
       setMode("Enable Dark Mode")
       document.body.style.backgroundColor=" white";
    }
}

  // .env file should be in base folder(NewsApp) and use REACT_APP to access the var
  
    return (
     <HashRouter basename='/'> 
      {/* <Router> */}
      <div>  
       <NavBar bg={bg} togg={togg} mode={mode}/>
        <LoadingBar height={4}
        color='#f11946'
        progress={progress}/>

        <Routes>
          <Route exact path="/" element={<News bgg={bg} key="general"  setProgress={setProgress}   pageSize={pageSize} country="in" category="general" apikey={apikey}/>}> </Route>
          <Route exact path="/business" element={<News bgg={bg} key="business" setProgress={setProgress}  pageSize={pageSize} country="in" category="business" apikey={apikey}/>}> </Route>
          <Route exact path="/entertainment" element={<News bgg={bg} key="entertainment"  setProgress={setProgress}  pageSize={pageSize} country="in" category="entertainment" apikey={apikey}/>}> </Route>
          <Route exact path="/general" element={<News bgg={bg} key="general" setProgress={setProgress}  pageSize={pageSize} country="in" category="general" apikey={apikey}/>}> </Route>
          <Route exact path="/health" element={<News bgg={bg} key="health" setProgress={setProgress}   pageSize={pageSize} country="in" category="health" apikey={apikey}/>}> </Route>
          <Route exact path="/science" element={<News bgg={bg} key="science" setProgress={setProgress}  pageSize={pageSize} country="in" category="science" apikey={apikey}/>}> </Route>
          <Route exact path="/sports" element={<News bgg={bg}  key="sports" setProgress={setProgress}   pageSize={pageSize} country="in" category="sports" apikey={apikey}/>}> </Route>
          <Route exact path="/technology" element={<News bgg={bg}  key="technology"  setProgress={setProgress} pageSize={pageSize} country="in" category="technology" apikey={apikey}/>}> </Route>
        </Routes>
      </div>
      {/* </Router> */}
      </HashRouter>
    )
  }
  export default App;

// render() method is life cycle method it renders html on screen
// *******************class basedcompnent*****************
// import './App.css';
// import React, { Component } from 'react'
// import NavBar from './components/NavBar';
// import News from './components/News';
// import {
//   Routes,
//   HashRouter,
//   Route,
// } from "react-router-dom";
// import LoadingBar from 'react-top-loading-bar';

// export default class App extends Component {
//   state={
//      progress:0
//   }
//   setProgress=(progress)=>
//   {
//       setState({progress:progress})
//   }
  
//   pageSize=12
//   apikey=process.env.REACT_APP_NEWS_API
//   // .env file should be in base folder(NewsApp) and use REACT_APP to access the var
  
//   render() {
//     return (
//      <HashRouter basename='/'> 
//       {/* <Router> */}
//       <div>
       
//        <NavBar/>
//        <LoadingBar height={4}
//         color='#f11946'
//         progress={state.progress}/>

//         <Routes>
//           <Route exact path="/" element={<News key="general"  setProgress={setProgress}   pageSize={pageSize} country="in" category="general" apikey={apikey}/>}> </Route>
//           <Route exact path="/business" element={<News key="business" setProgress={setProgress}  pageSize={pageSize} country="in" category="business" apikey={apikey}/>}> </Route>
//           <Route exact path="/entertainment" element={<News key="entertainment"  setProgress={setProgress}  pageSize={pageSize} country="in" category="entertainment" apikey={apikey}/>}> </Route>
//           <Route exact path="/general" element={<News key="general" setProgress={setProgress}  pageSize={pageSize} country="in" category="general" apikey={apikey}/>}> </Route>
//           <Route exact path="/health" element={<News key="health" setProgress={setProgress}   pageSize={pageSize} country="in" category="health" apikey={apikey}/>}> </Route>
//           <Route exact path="/science" element={<News key="science" setProgress={setProgress}  pageSize={pageSize} country="in" category="science" apikey={apikey}/>}> </Route>
//           <Route exact path="/sports" element={<News  key="sports" setProgress={setProgress}   pageSize={pageSize} country="in" category="sports" apikey={apikey}/>}> </Route>
//           <Route exact path="/technology" element={<News  key="technology"  setProgress={setProgress} pageSize={pageSize} country="in" category="technology" apikey={apikey}/>}> </Route>
//         </Routes>
//       </div>
//       {/* </Router> */}
//       </HashRouter>
//     )
//   }
// }
