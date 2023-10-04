import React from 'react'
import main from '../images/main.jpg'
import { Link } from 'react-router-dom'
function About() {
  return (
    <>
    <div class="container">
    <div class="card text-center boxclr">
        <div class="card-body">
            <img src={main} class="rounded-circle" width="140" height="140" alt="this is a smart boy" />
            <h5 class="card-title">Hii I'm </h5>
          <h5 class="card-title purple"><b>Saurabh Tiwari</b></h5>
          <p class="card-text">Developer</p>
          <Link to="https://drive.google.com/file/d/1cKvL6ST1ku5yWMwXwiytBsvI4kXFbRcg/view?usp=sharing" target="_blank" class="btn btn-primary">Download CV</Link>
          {/* <a href="/contact" class="btn btn-primary">Contact</a> */}
        </div>
        <div class="card-footer text-body-secondary">
        </div>
      </div>
</div>

    </>
  )
}

export default About
