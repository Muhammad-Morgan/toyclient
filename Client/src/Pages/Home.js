import React, { useEffect } from 'react'
import { faMessage } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import Hero from '../Components/Hero'
import Footer from '../Components/Footer'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useGlobalContext } from '../Utilities/context'
const Home = () => {
    const {userInfo,updateUserInfo} = useGlobalContext()
    useEffect(() => {
        const localToken = localStorage.getItem('localToken')
        axios.get(`https://toyserver-sage.vercel.app/auth?token=${localToken}`).then(({ data }) => {
            const { type, myToken } = data
            if(type === 'success'){
                const myData = jwtDecode(myToken);
                const {name,myID}=myData
                updateUserInfo({
                    name,
                    myID
                })
                }
        }).catch(err => console.log(err))
    }, [])
    return (
        <>
            <Hero />
            <section className='featured-products'>
                <h2 style={{ color: '#C08701', textAlign: 'center', marginBottom: '3rem' }}>Featured Products</h2>
                <ul>
                    <a href='#' className='card'>
                        <img src='https://www.toptoyseg.com/wp-content/uploads/2024/03/91G0FA4l9RL.jpg' width='200px' height='250px'></img>
                        <div className='card-footer'>
                            <p style={{ marginBottom: '.5rem' }}>Soldier Force Air Falcon Plane</p>
                            <span>19.99 $</span>
                        </div>
                    </a>
                    <a href='#' className='card'>
                        <img src='https://www.toptoyseg.com/wp-content/uploads/2024/03/91G0FA4l9RL.jpg' width='200px' height='250px'></img>
                        <div className='card-footer'>
                            <p style={{ marginBottom: '.5rem' }}>Soldier Force Air Falcon Plane</p>
                            <span>19.99 $</span>
                        </div>
                    </a>
                    <a href='#' className='card'>
                        <img src='https://www.toptoyseg.com/wp-content/uploads/2024/03/91G0FA4l9RL.jpg' width='200px' height='250px'></img>
                        <div className='card-footer'>
                            <p style={{ marginBottom: '.5rem' }}>Soldier Force Air Falcon Plane</p>
                            <span>19.99 $</span>
                        </div>
                    </a>
                </ul>
            </section>
            <section className='contact'>
                <div className="contact-info">
                    <p style={{ marginBottom: '.5rem' }}>We will be happy to help you anytime</p>
                    <p>Our customer service specialists are available at 02-36170527</p>
                </div>
                <div className='contact-icons'>
                    <a href='#' style={{ marginBottom: '0', display: 'flex', alignItems: 'end' }}>
                        <FontAwesomeIcon style={{ marginRight: '.3rem', color: '#c08701' }} icon={faMessage} />
                        Contact Us
                    </a>
                    <p style={{ marginBottom: '0', display: 'flex', alignItems: 'center' }}>
                        <FontAwesomeIcon style={{ marginRight: '.3rem', fontSize: '1.5rem', color: '#c08701' }} icon={faWhatsapp} />
                        0123456789
                    </p>
                </div>
                <hr style={{ marginInline: 'auto', width: '70%', borderColor: '#ACC4F5', marginBlock: '2.5rem' }}></hr>
                <article className='terms-conditions'>
                    <ul>
                        <a href='#' style={{ fontWeight: '100', fontSize: '.8rem', color: 'var(--clr-black)', letterSpacing: '1px' }}>Home</a>
                        <li style={{ fontWeight: '100', fontSize: '.8rem', color: 'var(--clr-black)', letterSpacing: '1px' }}>|</li>
                        <a href='#' style={{ fontWeight: '100', fontSize: '.8rem', color: 'var(--clr-black)', letterSpacing: '1px' }}>Contact Us</a>
                        <li style={{ fontWeight: '100', fontSize: '.8rem', color: 'var(--clr-black)', letterSpacing: '1px' }}>|</li>
                        <a href='#' style={{ fontWeight: '100', fontSize: '.8rem', color: 'var(--clr-black)', letterSpacing: '1px' }}>Terms & Conditions</a>
                        <li style={{ fontWeight: '100', fontSize: '.8rem', color: 'var(--clr-black)', letterSpacing: '1px' }}>|</li>
                        <a href='#' style={{ fontWeight: '100', fontSize: '.8rem', color: 'var(--clr-black)', letterSpacing: '1px' }}>Orders & Returns</a>
                        <li style={{ fontWeight: '100', fontSize: '.8rem', color: 'var(--clr-black)', letterSpacing: '1px' }}>|</li>
                        <a href='#' style={{ fontWeight: '100', fontSize: '.8rem', color: 'var(--clr-black)', letterSpacing: '1px' }}>About Us</a>
                        <li style={{ fontWeight: '100', fontSize: '.8rem', color: 'var(--clr-black)', letterSpacing: '1px' }}>|</li>
                        <a href='#' style={{ fontWeight: '100', fontSize: '.8rem', color: 'var(--clr-black)', letterSpacing: '1px' }}>Brands</a>
                    </ul>
                </article>
                <div className='inst-fac'>
                    <ul>
                        <FontAwesomeIcon style={{ marginRight: '.3rem', fontSize: '2rem', color: '#D474EF' }} icon={faInstagram} />
                        <FontAwesomeIcon style={{ marginRight: '.3rem', fontSize: '2rem', color: '#D474EF' }} icon={faFacebook} />

                    </ul>
                </div>
            </section>
            <Footer />
        </>

    )
}

export default Home