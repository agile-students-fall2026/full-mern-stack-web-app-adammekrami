import { useState, useEffect } from 'react'
import axios from 'axios'
import './AboutUs.css'


const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_HOSTNAME}/AboutUs`)
      .then(response => response.json())
      .then(data => {
        setAboutData(data)
      })
      
      .catch(error => {
        console.error('Error fetching data from AboutUs:', error)
      })
  }, [])

  if (!aboutData) {
    return <p>Loading...</p>
  } 

  return (
    <div className="about-us-page">
      <h1>About Me</h1>

      <div className="about-bio">
         <p>{aboutData.bio}</p>
      </div>

      <div className="about-img">
        <img src={aboutData.imageURL} alt= "Me" />
      </div>
    </div>
  )
}

export default AboutUs
