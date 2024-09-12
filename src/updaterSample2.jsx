
import React, { useState } from 'react';

function updaterV2() {

    const [cars, setCars] = useState([
        { year: 2020, model: 'Model S', make: 'Tesla' },
        { year: 2019, model: 'Mustang', make: 'Ford' },
        { year: 2018, model: 'Civic', make: 'Honda' }
    ]);
    const [carYear, setcarYear] = useState(new Date().getFullYear());
    const [carModel, setcarModel] = useState("");
    const [carMake, setcarMake] = useState("");

    const handleAddcar = () => {

         const newCar = {
            year: carYear,
            model: carModel,
            make: carMake
         }

         setCars(c => [...c,newCar]);

         setcarMake("");
         setcarModel("");
         setcarYear(new Date().getFullYear());
    };

    const handleRemoveCar = (index) => {
         setCars(c => c.filter((_,i) => i !== index))
    };

    const handleYearChange = (e) => {
         setcarYear(e.target.value)
    };

    const handleModelChange = (e) => {
        setcarModel(e.target.value)
    };

    const handleMakeChange= (e) => {
        setcarMake(e.target.value)
    };



    return ( 

        <div className="">
      <h2>List of Cars</h2>
      <ul>
      {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year} {car.make} {car.model}
          </li>
        ))}
      </ul>
      <input type="number" id="inputFruit" value={carYear}  onChange={handleYearChange}/> <br /><br />
      <input type="text" id="inputMake" value={carMake} placeholder="Input Car Make"  onChange={handleMakeChange}/><br /><br />
      <input type="text" id="inputModel" value={carModel} placeholder="Input Car Model"  onChange={handleModelChange} /><br /><br />
      <button onClick={handleAddcar}>Add Fruit</button>
    </div>
    );
}

export default updaterV2;