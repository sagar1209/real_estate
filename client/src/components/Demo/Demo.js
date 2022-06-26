import React from 'react';
// import './card.css';
import Details from  '../Details/Details.jsx';
import { useState,useEffect } from 'react';



const Demo = () => {
    
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
	url: "",
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

}
    return<>
            <Details
                 
                 show = {modalShow}
                 onHide = {() => setModalShow(false)}
                 title = {house.title}
                 address = {house.address}
                 url ={house.url} 
               />
            

    </>
   
}

export default Demo;