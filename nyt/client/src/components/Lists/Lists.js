import React from "react";
import "./style.css"


function List(props, handleBookSave) {
    return (
        props.books.map(item => (
          <div className="border" key={item.id}>
            <h5 className="title">{item.volumeInfo.title}</h5>
            <input className="btn btn-primary click" type="button" value="Save" key={item.id} onClick={handleBookSave(item.id)}/>
            <a className="btn btn-primary click" href={item.volumeInfo.infoLink} target="_blank"role="button">View</a>
            <p>Written By: {item.volumeInfo.authors[0]}</p>
                <div className="img-container">  
                    <img 
                        alt={item.volumeInfo.title}
                        src={item.volumeInfo.imageLinks.smallThumbnail}
                        key={item.id}
                        className="image"
                    />
                    <p className="description">{item.volumeInfo.description}</p>                    
            </div>
         </div>   
        ))
    );
}

export default List;
