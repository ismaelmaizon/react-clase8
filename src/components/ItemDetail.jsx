import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const ItemDetail = ({data}) => {

  const {name} = useParams();
   const category =  useLocation().pathname.split('/')[1]; // movie
   console.log(category);
   const items = data[category]
   const item = items.find((item) =>  item.name === name)
   console.log(item);
  return (
    <div>
       <h2> {item.name} </h2>
       <p> {item.description} </p>
       <p> {item.score} </p>
    </div>
  )
}

export default ItemDetail
