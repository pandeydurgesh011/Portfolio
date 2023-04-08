import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'My Portfolio Website',
    github: 'https://github.com/pandeydurgesh011/Portfolio',
    demo: 'https://pandeydurgesh011.github.io/Portfolio/#'
  },

  {
    id: 2,
    image: IMG2,
    title: 'Lazy Shuriken Bot',
    github: 'https://github.com/pandeydurgesh011/RZP_Hackathon_ChatBot',
    demo: 'https://github.com/pandeydurgesh011/RZP_Hackathon_ChatBot/blob/main/Screenshot%202023-04-08%20at%208.46.53%20PM.png'
  },

  {
    id: 3,
    image: IMG3,
    title: 'Test 3 Project',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },

  {
    id: 4,
    image: IMG4,
    title: 'Test 4 Project',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },

  {
    id: 5,
    image: IMG5,
    title: 'Test 5 Project',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  },

  {
    id: 6,
    image: IMG6,
    title: 'Test 6 Project',
    github: 'https://github.com',
    demo: 'https://dribbble.com/Alien_pixels'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>

    </section>
  )
}

export default Portfolio