import React from 'react';
// import './card.css';
import Details from  '../Details/Details.jsx';
import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Demo from '../Demo/Demo';



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

const [House,setHouse] = useState({
    title : "sagar",
    address: "",
})


useEffect(() =>{
    fetch("http://localhost:3001/demo")
    .then((res) =>res.json())
    .then((jsonRes) => setHouses(jsonRes));

},[]);



const handleClick = async(e) => {
    setModalShow(true);
    const {name,alt,src} = e.target;


    
    // await setHouse({
    //     // ...this.state,
    //     title:  name,
    //     address : alt,

    //    })
    //    alert(House.title);
     
    //    setTimeout(() => {
        
    //          alert(House.title);
    //    }, 2000);
    
    
    navigate('/demo',{state:{id:name,name:name}});

}




    return<>

    <div>

         {houses.map( house => {
            return<>
        <div className="main" onClick = {handleClick}>
           
            <div className="img">
                    
                 <img  key ={house.title} src={house.url} alt={house.address} name={house.title}   />
                 <div className="container">
                <p className="add1">{house.address} </p>
                <p className="add2">{house.title}</p>
                <p className="price" >10,000💰</p>
                
                <hr />
                <div className="data" >
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
   

             
             

    </>
    
   
}

export default Card;