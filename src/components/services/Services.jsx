import React from 'react'
import './services.css';
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>My Background</h5>
      <h2>My Educational and Professional Journey</h2>

      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>Certifications</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Python | Rooman Technologies | Jun 20.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Core Java | Rooman Technologies | July 20.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Full Stack Web Development | UPGRAD | Feb 2021.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Structures | Scalar Academy | Pursuing.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>LLD | HLD | Scalar Academy | Pursuing</p>
            </li>
            
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className='service'>
          <div className="service__head">
            <h3>Education</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Data Structure From Scalar Academy (Intewrview Bit)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Low Level Design From Scalar Academy (Intewrview Bit)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>High Level Design From Scalar Academy (Intewrview Bit)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>PGC Full Stack Development.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>B.E. in Electronics and Telecommunication</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>HSC in Computer Science</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>SSC Maharashtra board</p>
            </li>
          </ul>
        </article>
        {/* Web Development */}


        <article className='service'>
          <div className="service__head">
            <h3>Profession</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Free Lancing (Web Development)</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Technical Consultant
              <p>Razorpay Software PVT LTD</p>
              <p>Payments</p>
              <p>Dashboard Products</p>
              <p>API's</p>
              </p>
              


            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Sr. Prod Compliance Associate
                <p>Amazon Development Centre India PNQ13</p>
                <p>Document Review</p>
                <p>ML Classification</p>
              </p>
            </li>
            
          </ul>
        </article>
        {/* End of Content Creation */}


      </div>

      
    </section>
  )
}

export default Services