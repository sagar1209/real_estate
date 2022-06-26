import React from 'react';
// import './card.css';
import Details from  '../Details/Details.jsx';
import {useLocation} from 'react-router-dom';




<<<<<<< HEAD
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
=======

const Demo = (ankit) => {
    const location = useLocation();
>>>>>>> a2d89417d8a316c80debcedbc28effe311e893b6
    return<>
            <Details
                 
                 
                 title = {location.state.name}
                //  address = {ankit.address}
                //  url ={ankit.url} 
               />
            

    </>
   
}

export default Demo;