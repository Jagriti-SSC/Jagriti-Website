import React from 'react'
import './about.css'
import Typed from "react-typed"

function About() {
  return (
    <>
      <div>
        <section className='container-fluid react1'>
          <video className="videoPlay" autoPlay loop muted>
            <source src="https://imgur.com/HlJjv44.mp4" type='video/mp4' />
          </video>
          <div className="jagriti-text">
            <h1 className='text-center font-weight-bolder hey'>
            <Typed 
              strings={[
                "What is Jagriti?",
              ]}
              typeSpeed={150}
              backSpeed={100}
              loop
            />
            </h1>
            <p class="lead text-center">
              Jagriti is the Social-awareness based annual fest organized by Social Service Council, IIT (BHU) Varanasi, to spread awareness among society about social service. It provides a platform where students gather and talk about the community and their needs and brainstorm solutions.
            </p>
          </div>
        </section>
      </div>

      <div className='container-fluid react'>
        <h1 className='text-center font-weight-bolder hey'>Social Service Council</h1>
        <p class="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae reprehenderit nam rerum quas saepe. Consequatur quaerat fuga aliquam, quidem sapiente, nostrum assumenda consectetur sint, aliquid tenetur facere quis dignissimos dolorem!
        </p>
      </div>

      <div className="cover row">
        <div class="testimonial col-md-auto">

          <div class="card" id='card2'>
            <div class="layer"></div>

            <div class="content">
              <div class="image"><img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-128.png" alt="avatar" />
              </div>
              <div class="details">
                <h2>Someone Famous</h2> <br />
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            </div>
          </div>
          <div class="card" id='card2'>
            <div class="layer"></div>

            <div class="content">
              <div class="image"><img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-128.png" alt="avatar" />
              </div>
              <div class="details">
                <h2>Someone Famous</h2> <br />
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            </div>
          </div>
          <div class="card" id="card2">
            <div class="layer"></div>

            <div class="content">
              <div class="image">
                <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-128.png" alt="avatar" />
              </div>
              <div class="details">
                <h2>Someone Famous</h2> <br />
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            </div>
          </div>

          <div class="card" id='card2'>
            <div class="layer"></div>

            <div class="content">
              <div class="image"><img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/oscar_boy-128.png" alt="avatar" />
              </div>
              <div class="details">
                <h2>Someone Famous</h2> <br />
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default About