import React, {useState,useEffect} from 'react'
import { useGlobalContext } from '../Utilities/context'
import { Link, useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import axios from 'axios'

const Login = () => {
  const navigate = useNavigate()
  const { closeSubmenu, userInfo, updateUserInfo } = useGlobalContext()
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const handleChange = (e) => {
    const name = e.target.name.toLowerCase()
    const value = e.target.value
    setUser({
      ...user,
      [name]: value
    })
  }
  const handleClick = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/login', user).then(({ data }) => {
      const { token, msg, type } = data
      if(type === 'success'){
        localStorage.setItem('localToken',token)
        const myData = jwtDecode(token)
        const {name,myID}=myData
        updateUserInfo({name,myID})
        setUser({
          email: '',
          password: ''
        })
        navigate('/')
        }else {
          console.log(msg)
        }
    }).catch(err => console.log(err))
  }
useEffect(()=>{
  if(userInfo.name){
    navigate('/')
  }
},[userInfo.name])
  return (
      <article className='form-con'   onMouseOver={closeSubmenu}>
        <section class="form-center">
          <section className='form-info'>
            <h2 style={{lineHeight: '1.2',color: '#fff',textShadow: '3px 2px 1px rgba(0,0,0,.2)'}}>A toy is a cute object that keeps a child engaged.</h2>
            <p style={{lineHeight: '1.7',color: 'var(--clr-primary-2)',fontSize: '1.25rem'}}>As the creative adult needs to toy with ideas, the child, to form his ideas, needs toys--and plenty of leisure and scope to play with them as he likes, and not just the way adults think proper.</p>
            <p style={{lineHeight: '1.7',color: 'var(--clr-primary-3)'}}>
            A child may spend hours playing and enjoying leisure time.
            Despite being playful objects, toys play an essential role in the intellectual development of a child. Along with mental development, toys also help children in learning new things about their surroundings.
            </p>
          </section>
          <form
            className="card-log">
            <h2 style={{ color: 'var(--clr-primary-4)', textShadow: '3px 2px 1px rgba(0,0,0,.2)' }}>Log In</h2>
            <div className="email mb-1">
              <label htmlFor="email" className="form-label">Email</label>
              <input
              value={user.email}
              onChange={handleChange}
                name="email"
                type="text"
                id="email"
                className="form-control" />
            </div>
            <div className="password mb-1">
              <label htmlFor="password" className="form-label">Password</label>
              <input
              value={user.password}
              onChange={handleChange}
                name="password"
                type="password"
                id="password"
                className="form-control" />
            </div>
            <div>
              <p style={{ color: 'var(--clr-black)' }}>If you don't have an account <Link to='/register' style={{ color: 'var(--clr-primary-3)' }}>Register</Link></p>
            </div>
            <div style={{ marginBlock: '1rem', display: 'flex', justifyContent: 'center' }}>
              <button
              onClick={handleClick}
              style={{ padding: '.5rem 1.5rem', fontSize: '1.1rem', letterSpacing: '1px' }} className='btn'>Sign In</button>
            </div>
          </form>
        </section>
      </article>
  )
}

export default Login