import React from 'react'

const ResenyasLibroComponent = (props) => {

  const {
    reviewList
  } = props

  return (
    <div>
        <h2>Reseñas</h2>
        {
            reviewList.map((review, index) => (
                <div key={index}>
                    <p>Name: {review.name}</p>
                    <p>Date: {review.created_at}</p>
                    <p>Review: {review.review}</p>
                </div>
            ))
        }
    </div>
  )
}

export default ResenyasLibroComponent