import React from 'react'
import { Link } from 'react-router-dom'

const NavBar=(props)=>{    
    // const [bg, setBg] = useState('dark')
    // const [coll, setColl] = useState('white')

    //   const [bg, setBg] = useState('light')
  //   const [mode, setMode] = useState("Enable Dark Mode")


  // const togg=()=>{
  //     if(bg==='light')
  //     {
  //         setBg('dark');
  //         setMode("Enable Light Mode")
  //         document.body.style.backgroundColor='#343a40';
  //     }
  //     else{
  //        setBg('light');
  //        setMode("Enable Dark Mode")
  //        document.body.style.backgroundColor=" white";
  //     }
  // }

    return (

//       // ={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==='dark'?'black':'light'}`}>
 <nav className={`navbar fixed-top navbar-expand-lg navbar-${props.bg} bg-${props.bg==='dark'?'dark':'white'}`}> 
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">DailyNews</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/">Home</Link>
        </li>
        {/* <li className="nav-item"><Link className="nav-link active " to="/">About</Link>
        </li>  */}
             
        <li className="nav-item"><Link className="nav-link " to="/business">Business</Link> </li>
        <li className="nav-item"><Link className="nav-link " to="/entertainment">Entertainment</Link> </li>
        <li className="nav-item"><Link className="nav-link " to="/general">General</Link></li> 
        <li className="nav-item"><Link className="nav-link " to="/health">Health</Link></li> 
        <li className="nav-item"><Link className="nav-link " to="/science">Science</Link></li> 
        <li className="nav-item"><Link className="nav-link " to="/sports">Sports</Link></li>
        <li className="nav-item"><Link className="nav-link " to="/technology">Technology</Link></li> 


      </ul>

      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-success" type="submit">Search</button>
      </form>
             
    </div>

  </div>
  <div className={`form-check form-switch text-${props.bg==='light'?'dark':'white'}`}>
  {/* <div className={`form-check form-switch text-${coll==='white'?'dark':'white'}`}> */}
  <input className="form-check-input my-3 " onClick={props.togg}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label  "  forhtml="flexSwitchCheckDefault" ><h6>{props.mode}</h6></label>
  </div>
</nav>

  // {/* <div className={`form-check form-switch mx-4 text-${props.mode==='light' ? 'dark':'light' }  ` */}

    )
  }
export default NavBar


  // const togg=()=>
  // {
  //     if(bg==='white')
  //     {
  //          setBg('dark')
  //          setColl('white')
  //          setMode("Enable Dark Mode")
  //          document.body.style.backgroundColor='white';
  //          //  console.log("Clicked 1");
  //         }
  //     else{
  //       setBg('white')
  //       setColl('dark')
  //       setMode("Enable Light Mode")
  //       document.body.style.backgroundColor="#343a40";
  //     }
  // }

// **********class based compnent*************
// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

// export class NavBar extends Component { 
//     constructor()
//     {
//        super();
//        this.state={
//             bg:'dark',
//             coll:'white',
//             mode:"Enable Dark Mode "        }
//     }
   
//   togg=()=>
//   {
   
//       if(this.state.bg==='white')
//       {
//            this.setState({
//              bg:'dark',
//              coll:'white',
//              mode:"Enable Dark Mode"

//            })
  
//            console.log("Clicked 1");
//           }
//       else{
//         this.setState({
//           bg:'white',
//           coll:'dark',
//           mode:"Enable Light Mode"
//         })          
        
//         console.log("Clickeddddd");
//       }
//   }

//    render() {
//     return (

//       // ={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode==='dark'?'black':'light'}`}>

// <nav className={`navbar navbar-expand-lg navbar-${this.state.coll} bg-${this.state.bg==='white'?'dark':'white'}`}>
//   <div className="container-fluid">
//     <Link className="navbar-brand" to="/">DailyNews</Link>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//         <li className="nav-item">
//           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//         </li>
//         {/* <li className="nav-item"><Link className="nav-link active " to="/">About</Link>
//         </li>  */}
             
//         <li className="nav-item"><Link className="nav-link active " to="/business">Business</Link> </li>
//         <li className="nav-item"><Link className="nav-link active " to="/entertainment">Entertainment</Link> </li>
//         <li className="nav-item"><Link className="nav-link active " to="/general">General</Link></li> 
//         <li className="nav-item"><Link className="nav-link active " to="/health">Health</Link></li> 
//         <li className="nav-item"><Link className="nav-link active " to="/science">Science</Link></li> 
//         <li className="nav-item"><Link className="nav-link active " to="/sports">Sports</Link></li>
//         <li className="nav-item"><Link className="nav-link active " to="/technology">Technology</Link></li> 


//       </ul>

//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-success" type="submit">Search</button>
//       </form>
             
//     </div>

//   </div>
//   <div className={`form-check form-switch text-${this.state.coll==='white'?'dark':'white'}`}>
//   <input className="form-check-input my-3 " onClick={this.togg}  type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
//   <label className="form-check-label  "  forhtml="flexSwitchCheckDefault" ><h6>{this.state.mode}</h6></label>
//   </div>
// </nav>

//   // {/* <div className={`form-check form-switch mx-4 text-${props.mode==='light' ? 'dark':'light' }  ` */}

//     )
//   }
// }

// export default NavBar