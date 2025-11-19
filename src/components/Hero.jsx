import React, { useEffect, useRef } from 'react'

const Hero = () => {
  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) videoRef.current.playbackRate= 2.0;
    }, []);

    
  return (
    <section id="hero">
        <div>
            <h1>MacBook Pro</h1>
            <img src='/title.png' alt='MacBook Title' />
        </div>

        <video ref={videoRef} src ='/videos/hero.mp4' autoPlay muted playsInline />

        <button>Buy</button>

        <p>From $2999 or $1559/mo. for 24 months</p>
    </section>
  )
  
}

export default Hero
