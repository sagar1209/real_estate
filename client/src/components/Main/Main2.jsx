import React from "react";
import Card2 from "../Card/Card2";

const Main = (props) => {
    console.log(props);
    return<>
        <div className='Header'>
        <div className={props.c1} id='here'>
          NEW PROPERTIES
          <span className={props.c2}>FOR RENT</span>
        </div>
        <div className='parent'>
          <div className='cards'>
            <Card2/>
           
          </div>
          <button className={props.c3}>View More</button>
        </div>
      </div>
    </>
}

export default Main;