import React from 'react'

const About = () => {
  return (
    <div className='about-app my-3'>
     <h2>Welcome to NewsXplorer!</h2>
        <p className="intro-about">
           At NewsXplorer, we believe that information is the key to understanding the world around us. <br />
           We strive to deliver accurate and up-to-date news to our readers, empowering them to make informed decisions and stay connected with the latest happenings.
        </p>
        <p className='accurate-about'>
            <h3> Our Commitment to Accuracy:</h3>
                We understand the importance of reliable information in today's fast-paced world. <br />
                That's why our team of experienced journalists and researchers is dedicated to ensuring the accuracy of every news article we publish. <br />
                We follow strict editorial guidelines and verify our sources to provide you with trustworthy news you can rely on.
        </p>
        <p className="categories">
            <h3>Diverse Categories:</h3>
            At NewsXplorer, we cover a wide range of categories to cater to the diverse interests of our readers. <br />
            Whether you're interested in current affairs, politics, technology, entertainment, sports, or any other topic, we've got you covered. <br />
             Our team of expert journalists carefully curates news from around the globe, bringing you comprehensive coverage from various perspectives.
        </p>
    </div>
  )
}

export default About