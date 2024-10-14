import React from 'react'

interface Car {
    id:number,
    model:number,
    price:number,
    company:string,
    sedan:boolean,
}

const Car:React.FC<Car> = ({id,model,price,company,sedan}) => {
  return (  
    <div key={id}>
        <h1>{model}</h1>
        <p>{price}</p>
        <p>{company}</p>
       <p> {sedan && <p>Sedan</p>}</p>
    </div>
  )
}

export default Car