import React from 'react'
import './guesttalk.css'

function GuestTalk() {
  return (
    <>
      <div class="main">
        <h1 className='hello'>GuestTalk</h1>
        <ul class="cards">
          <li class="cards_item">
            <div class="card">
              <div class="card_image"><img className="photo" src="https://picsum.photos/500/300/?image=10" /></div>
              <div class="card_content">
                <h2 class="card_title">Card Grid Layout</h2>
                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                <button class="btn card_btn">Register Now</button>
              </div>
            </div>
          </li>
          <li class="cards_item">
            <div class="card">
              <div class="card_image"><img className="photo" src="https://picsum.photos/500/300/?image=5" /></div>
              <div class="card_content">
                <h2 class="card_title">Card Grid Layout</h2>
                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                <button class="btn card_btn">Register Now</button>
              </div>
            </div>
          </li>



          <li class="cards_item">
            <div class="card">
              <div class="card_image"><img className="photo" src="https://picsum.photos/500/300/?image=2" /></div>
              <div class="card_content">
                <h2 class="card_title">Card Grid Layout</h2>
                <p class="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
                <button class="btn card_btn">Register Now</button>
              </div>
            </div>
          </li>
        </ul>
      </div>


    </>
  )
}

export default GuestTalk