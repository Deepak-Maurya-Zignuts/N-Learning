import React, { Children } from 'react'

const ProductLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1>Product Layout</h1>
      {children}
    </div>
  )
}

export default ProductLayout