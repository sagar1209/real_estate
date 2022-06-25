import React from 'react';
// import './card.css';
import Details from  '../Details/Details.jsx';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const Card = () => {
    const navigate = useNavigate();
    
const [modalShow , setModalShow] = useState(false);
const [houses,setHouses] = useState([
    {
        title : "",
        address: "",
        url :"",
    },
    
])

const [house,setHouse] = useState({
    title : "",
    address: "",
})


useEffect(() =>{
    fetch("http://localhost:3005/")
    .then((res) =>res.json())
    .then((jsonRes) => setHouses(jsonRes));

},[]);

const handleClick = (e) => {
    setModalShow(true);
    const {name,alt,src} = e.target;
    setHouse({
        title : name,
        address: alt,
        url : src,
        
    });
    navigate('/demo');

}
    return<>

    <div>

         {houses.map( house => {
            return<>
        <div className="main">
           
            <div className="img">
                    
                 <img key ={house.title} src={house.url} alt={house.address} name={house.title} onClick={handleClick} />
                 <div className="container">
                <p className="add1">{house.address} </p>
                <p className="add2">{house.title}</p>
                <p className="price" >10,000💰</p>
                
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

     
    
    </div>
   
      
            {/* <Details
                 
                 show = {modalShow}
                 onHide = {() => setModalShow(false)}
                 title = {house.title}
                 address = {house.address}
                 url ={house.url} 
               />
             */}


    </>
   
}

export default Card;