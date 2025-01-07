import React from 'react'

export const Card = ({title, author, decription, date, imageUrl}) => {
  return (
    <div className='card-container'>
        <img src={imageUrl} alt={title} />
        <div>
            <h1>{title}</h1>
            <p>{author}</p>
            <p>{date}</p>
        </div>
        <p>{decription}</p>
    </div>
  )
}
