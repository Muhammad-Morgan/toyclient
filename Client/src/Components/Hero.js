import React from 'react'
import { useGlobalContext } from '../Utilities/context'
import { Link } from 'react-router-dom'
const Hero = () => {
  const { closeSubmenu, userInfo } = useGlobalContext()

  return <section onMouseOver={closeSubmenu} className='hero'>
    <div className='hero-center'>
      <article className='hero-info'>
        <h1 style={{ color: 'var(--clr-primary-1)' }}>Show love to your loved ones by giving them gifts</h1>
        <p style={{ color: 'var(--my-color)' }}>"Designing a game is like crafting a symphony – every piece must work harmoniously to create a beautiful, engaging experience." - Shigeru Miyamoto, creator of Super Mario Bros. and The Legend of Zelda

        </p>
        {!userInfo.name && <Link to='/login' className='btn-h'>Start Now</Link>
        }
      </article>
      <article className='hero-images'>
        <img src='https://www.freepnglogos.com/uploads/toy-story-png/sheriff-woody-png-7.png' className='phone-img' />
      </article>
    </div>
  </section>
}

export default Hero
