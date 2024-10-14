import React, { useEffect } from 'react'

interface Book{
    author:string,
    price:number,
}

const Book:React.FC<Book> = ({author,price}) => {

    function addNumbers(a:number,b:number):number{
        return a+b
    }
    const result = addNumbers(212,612)

    // useEffect(()=>{
    //     const result = addNumbers(2,6) 
    // },[])
    function greet(name:string,greeting?:string){
        return `${greeting || "Hello" } ${name}`
    }
    const message = greet("shaheryar")
    const message2 = greet("shaheryar")

    function printId(id:number | string){
        return `your id is ${id}`
    }
    const message3 = printId(1)
    const message4 = printId("abcd")


  return (
    <div>
        <p>{author}</p>
        <p>{price}
            <p>{result}</p>
            <p>{message}</p>
            <p>{message2}</p>
            <p>{message3}</p>
            <p>{message4}</p>
        </p>
    </div>
  )
}

export default Book