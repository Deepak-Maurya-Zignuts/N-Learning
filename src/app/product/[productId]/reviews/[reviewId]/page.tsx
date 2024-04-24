import React from 'react'
import notFound from './not-found'

const review = ({ params }: { 
    params: { 
        reviewId: string 
        productId: string
    } 
}) => {
    if (parseInt(params.reviewId) >= 100) {
        return notFound()
    }
  return (
    <div>review {params.reviewId} of product {params.productId}</div>
  )
}

export default review