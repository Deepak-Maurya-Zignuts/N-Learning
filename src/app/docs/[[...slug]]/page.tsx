import React from 'react'

const docs = ({params}: {params: {slug: string[]}}) => {
  if (params.slug?.length === 1) {
    return <div>docs {params.slug[0]}</div>
  }
  if (params.slug?.length === 2) {
    return <div>docs {params.slug[0]} of {params.slug[1]}</div>
  }
  return <div>default</div>
}

export default docs