import React from 'react'
import ProfileImage from '../../assets/profile_photo.png'

const About = () => {
    return(
        <>
            <section id="about">
              <div className="py-2 border-bottom">
                  <h2>
                      About
                  </h2>
              </div>
              <div className="content-section">
                  <div className="d-flex g-1 align-items-center pb-4 md-flex-column">
                      <img className="profile-img" loading="lazy" src={ProfileImage} alt="Profile image"/>
                        <p>
                            Olá! I am Manuel Lucas.<br/> a Lisbon-born Portuguese native deeply passionate about fostering growth through technology.
                        </p>
                  </div>
                  <p>
                      With a natural inclination towards physical and mental health, I pursued a degree in Nutrition and have worked in the mental health field. For many years, I dedicated myself to helping individuals lead healthier, happier lives through personalised dietary guidance and education.
                  </p>
                  <p>
                        However, my curiosity and drive for continuous growth led me to embark on a new adventure in the world of technology. Motivated by the transformative potential of tech to enhance lives and create meaningful change, I made the bold decision to transition my career into the dynamic realm of software development.
                  </p>
                  <p>
                        Taking the leap, I enrolled in a software development bootcamp with nology in 2020, where I honed my skills and took my first exhilarating steps into the world of coding. This immersive experience not only expanded my technical proficiency but also ignited a fire within me to innovate, create, and contribute to the ever-evolving landscape of technology.
                  </p>
                  <p>
                        I am based in Bristol, and I am driven by a desire to leverage my diverse background and new-found expertise to make a positive impact in the tech community and beyond. Whether crafting elegant code or advocating for holistic wellness, I am committed to embracing challenges, embracing growth, and making a difference, one line of code at a time.
                  </p>
              </div>
          </section>
        </>
    )
}

export default About;