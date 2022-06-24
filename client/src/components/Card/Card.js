import React from 'react';
import { useState,useEffect } from 'react';
import bed from "../../icons/bed.png"
import bath from "../../icons/bath.png"
import city_building from "../../icons/city-buildings.png"
import surface from "../../icons/surface.png"


const Card = () => {
    const [houses,setHouses] = useState([
        {
            title : "",
            address: "",
            url :"",
        },
        
    ])
    useEffect(() =>{
        fetch("http://localhost:3005/")
        .then((res) =>res.json())
        .then((jsonRes) => setHouses(jsonRes));
    
    },[]);
    
    useEffect(() => {
        console.log(houses);
    
    },[houses]);
    console.log("abc");
    return<>
     {houses.map( house => {
        
            return<>
               
      
       <div className="main">
           
           <div className="img">
              
                   
                            <img key ={house.name} src={house.url} alt={house.address} name={house.name} />
                            <div className="container">
               <p className="add1">{house.address} </p>
               <p className="add2">{house.title}</p>
               <p className="price">10,000💰</p>
               
               <hr />
               <div className="data">
                   <div className="d">
                       {/* <img src={require('../../Icon/icons8-empty-bed-50.png')} alt="" /> */}
                       <p className="t">Bed</p>
                       <p className="digit">2</p>
                   </div>
                   <div className="d">
                       {/* <img src={require('../../Icon/icons8-bath-48.png')} alt="" /> */}
                       <p className="t">Bath</p>
                       <p className="digit">2</p>
                   </div>
                   <div className="d">
                       {/* <img src={require('../../Icon/icons8-city-buildings-48.png')} alt="" /> */}
                       <p className="t">Levels</p>
                       <p className="digit">2</p>
                   </div>
                   <div className="d">
                       {/* <img src={require('../../Icon/icons8-surface-64.png')} alt="" /> */}
                       <p className="t">Sqft</p>
                       <p className="digit">2</p>
                   </div>
               </div>

           </div>
              
           </div>
          




           
           
       </div>
       </>
         })}
           
    </>
}

export default Card;