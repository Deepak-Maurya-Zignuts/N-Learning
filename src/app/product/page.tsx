import React from 'react'
import Link from 'next/link'

const product = () => {
  const productId = 100;
  return (
    <>
    <div><h1>Product page</h1></div>
    <Link href = 'product/3' replace>Product 3</Link>
    <Link href = {`product/${productId}`}>product {productId}</Link>
    </>
  )
}

export default product;