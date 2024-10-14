import React from 'react'
import Car from './Car'
import Book from './Book'


const App :React.FC= () => {
  const book={
    author:"jason",
    price:234,
  }
  return (
    <div>
      <Book author={book.author} price={book.price}/>
    </div>
  )
  }



export default App