import React from 'react'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useGlobalContext } from '../Utilities/context'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navigate = useNavigate()
  const { openSidebar, openSubmenu, closeSubmenu, userInfo, updateUserInfo } = useGlobalContext()
  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right) / 2
    const bottom = (tempBtn.bottom - 3)
    openSubmenu({
      location: { center, bottom },
      page
    })
  }
  const hideSubmenu = (e) => {
    if (!e.target.classList.contains('link-btn')) {
      closeSubmenu()
    }
  }
  const logOut = () => {
    updateUserInfo({
      name: '',
      myID: ''
    })
    localStorage.removeItem('localToken')
    navigate('/')
  }
  return <nav onMouseOver={hideSubmenu} className='nav'>
    <div className='nav-center'>
      <div className='nav-header'>
        <h3 className='nav-logo'><Link style={{ color: 'var(--clr-primary-1)' }} to='/'>TOYS</Link></h3>
        <button className='btn toggle-btn' onClick={openSidebar}>
          <FontAwesomeIcon className='fa-xl' icon={faBars} />
        </button>
      </div>
      <ul className='nav-links'>
        {userInfo.name && <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            products
          </button>
        </li>
        }
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            categories
          </button>
        </li>
        <li>
          <button className='link-btn' onMouseOver={displaySubmenu}>
            company
          </button>
        </li>
      </ul>
      {userInfo.name &&
        <button
          onClick={logOut}
          style={{ backgroundColor: 'var(--clr-red-dark)', fontSize: '1rem' }}
          className='btn signin-btn'>
          Log Out
        </button>}
      {!userInfo.name &&
        <Link to='/login' style={{ textDecoration: 'none' }} className='btn signin-btn'>Register / Sign in</Link>
      }
    </div>
  </nav>
}

export default Navbar
