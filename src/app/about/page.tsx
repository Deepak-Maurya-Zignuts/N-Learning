import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    absolute: "AboutUS",
    default: "About",
  },
  description: "About page description",
}

const About = () => {
  return (
    <div>About</div>
  )
}

export default About