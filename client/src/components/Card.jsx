import React from "react";


export default function Card({name, weight, image, temperament}) {
    
    return (
        <React.Fragment>
            <h2>{name}</h2>
            <h4>Peso promedio: {weight}Kgs</h4>
            <img src={image} alt='hola' height='250px' weight='300px' />
            <h4>Temperamentos:</h4>
            <ul>
                {temperament.map((temp, index) => 
                    <li key={index}>{temp}</li>
                )}
            </ul>
        </React.Fragment>
    )
}
