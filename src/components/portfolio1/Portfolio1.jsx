import React from 'react'
import '../portfolio1/portfolio1.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.png'

const Portfolio1 = () => {
  return (
    
<section id='portfolio'>
       <h5>My Recent </h5>
        <h2>Portfolio</h2>

   <div className="container portfolio__container">
    <article className='portfolio__item'>
    <div className="portfolio__item-image">
        <img src={IMG1} alt="" />
    </div>
    <h3>This is a portfolio of Github </h3>

       <div className="portfolio__item-cta">
          <a href="https://github.com/chandansiku97" className='btn' target='_blank' > Github </a>
          <a href="https://github.com/chandansiku97" className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>


    </article>

    <article className='portfolio__item'>
    <div className="portfolio__item-image">
        <img src={IMG2} alt="" />
    </div>
    <h3>This is a portfolio of Leetcode </h3>

       <div className="portfolio__item-cta">
          <a href="https://leetcode.com/chandansiku97/" className='btn' target='_blank' > Leetcode </a>
          <a href="https://leetcode.com/chandansiku97/" className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>


    </article>

    <article className='portfolio__item'>
    <div className="portfolio__item-image">
        <img src={IMG3} alt="" />
    </div>
    <h3>This is a portfolio of GFG </h3>

       <div className="portfolio__item-cta">
          <a href="https://auth.geeksforgeeks.org/user/chandanwjin" className='btn' target='_blank' > GFG </a>
          <a href="https://auth.geeksforgeeks.org/user/chandanwjin" className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>


    </article>
    <article className='portfolio__item'>
    <div className="portfolio__item-image">
        <img src={IMG4} alt="" />
    </div>
    <h3>This is a portfolio of  CodeStudio</h3>

       <div className="portfolio__item-cta">
          <a href="https://www.codingninjas.com/studio/profile/chandansiku97" className='btn' target='_blank' > CodeStudio </a>
          <a href="https://www.codingninjas.com/studio/profile/chandansiku97" className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>


    </article>

    <article className='portfolio__item'>
    <div className="portfolio__item-image">
        <img src={IMG5} alt="" />
    </div>
    <h3>This is a portfolio of  Facebook</h3>

       <div className="portfolio__item-cta">
          <a href="https://www.facebook.com/chandanchaturvedi97" className='btn' target='_blank' > Facebook </a>
          <a href="https://www.facebook.com/chandanchaturvedi97" className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>


    </article>

    <article className='portfolio__item'>
    <div className="portfolio__item-image">
        <img src={IMG6} alt="" />
    </div>
    <h3>This is a portfolio of Linkedin </h3>

       <div className="portfolio__item-cta">
          <a href="https://www.linkedin.com/in/chandan-kumar-chaubey" className='btn' target='_blank' > Linkedin </a>
          <a href="https://www.linkedin.com/in/chandan-kumar-chaubey" className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>


    </article>

      </div>
</section>
    
  )
}

export default Portfolio1

