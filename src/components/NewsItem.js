import React from "react";

const NewsItem =(props)=> {
  
    let {title,description,imageUrl,newsUrl,author,date,source}=props;
    return (
      <div className="my-3">
        <div className="card" >
          {/* <span class="position-absolute top-1  translate-middle badge rounded-pill bg-danger" style={{left:'9%',zIndex:'1'}}>{source}
          <span class="visually-hidden"></span>
          </span> */}
     
          <img src={!imageUrl ? "https://www.deccanherald.com/sites/dh/files/articleimages/2023/04/17/file7pom2v9espj4zb50hsh-1209269-1681713285.jpg" : imageUrl} 
          className="card-img-top" alt="..." />
                
          <div className="card-body" style={{backgroundColor:'#d5ebe3'}}>
          {/* <span className="badge bg-danger" style={{left:'1%'}}>{source}</span> */}
            <h5 className="card-title">{title}...  <span className="badge bg-success" style={{left:'1%'}}>{source}</span></h5>
            <p className="card-text">
                {description}....
            </p>
            <p className="card-text"><small className="text-body-secondary">By {author? author:"Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }

export default NewsItem;


//  target="_blank"  opens in new tab when clicked