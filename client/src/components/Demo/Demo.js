import React from 'react';
// import './card.css';
import Details from  '../Details/Details.jsx';
import {useLocation} from 'react-router-dom';





const Demo = (ankit) => {
    const location = useLocation();
    return<>
            <Details
                 
                 
                 title = {location.state.name}
                //  address = {ankit.address}
                //  url ={ankit.url} 
               />
            

    </>
   
}

export default Demo;