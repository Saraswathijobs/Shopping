import React from 'react'

const Footer = () => {
  return (
    <div className='footerSection'>
       <div className="bannerBox">
        {/* <img src="assets/footer.jpg" alt="banner" /> */}
        <h2 id="h2">Subscription to our awesome emails.</h2>
        <p>gets our latest offers and news straight in our inbox </p>
        <div className="input">
        <input type="email" placeholder='please enter your email address'/>
        <input type="submit" className='sub' />
      </div>
      </div>
      <div className="download">
        <h2 id='h2'>Download our apps</h2>
        <p>shop our products and offers on-the-go</p>
        <div className="button">
        <button className='btn'><h5>Download on the <h1>App store</h1></h5></button>
        <button className='btn'><h5>GET IT ON <h1>Google Play</h1></h5></button>
        </div>
      </div>
    </div>
  )
}

export default Footer