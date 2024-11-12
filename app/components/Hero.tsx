

import React from 'react';
import "../style/Hero.css";
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="hero"
    style={{
      backgroundImage: "url('/images/bg.jpg')",
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <div className="content">
        <h1 className="title">Hello, I am Nimra Akram..!</h1>
        <p className="subtitle">A passionate web developer and graphic designer who loves crafting visually striking, user-centered digital experiences. With a unique blend of technical expertise and creative flair, I specialize in building responsive websites, branding, and visual assets that resonate with audiences and elevate brands.</p>
        <a href="https://github.com/Nimraakram12" className="ctaButton" target="_blank" rel="noopener noreferrer">View My Work</a>
      </div>
      <div className="profile-image">
        <Image src="/images/my2.png" alt="Nimra Akram" height={600} width={300} />
      </div>
    </section>
  );
}

export default Hero;
