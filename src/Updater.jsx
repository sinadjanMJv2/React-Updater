import React, { useState } from 'react';


function Updater() {

    const [car, setCar] = useState({year:2024,make:"ford" ,model:"mustang"});

    
    
    const handleYear = (e) => {
        setCar(c =>({...c, year: event.target.value}))
        console.log(car)
    };

    const handleModel = (e) => {
         setCar(c =>({...c, model: event.target.value}))
    };

    const handleMake = (e) => {
        setCar(c =>({...c, make: event.target.value}))
    };


    return ( 

     <div className="car">
        <p>  Your favorite car is : {car.year} ,{car.make} ,{car.model} </p>
            <input type="number" value={car.year} onChange={handleYear}/>
            <input type="text" value={car.make} onChange={handleMake}/>
            <input type="text" value={car.model} onChange={handleModel}/>
        
     </div>

    );
}

export default Updater;