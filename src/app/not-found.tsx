import React from 'react'
import Link from 'next/link'

const notFound = () => {
  return (
    <>
    <h1>404</h1>
    <p>Page not found</p>
    <Link href='/'>Home</Link>
    </>
  );
}

export default notFound;