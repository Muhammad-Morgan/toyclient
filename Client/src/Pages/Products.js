import React, { useEffect, useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import { useGlobalContext } from '../Utilities/context'
const Products = () => {
    const navigate = useNavigate()
    const { category } = useParams()
    const [products, setProducts] = useState([])
    const { userInfo, updateUserInfo, closeSubmenu } = useGlobalContext()
    const getCat = (cat) => {
        axios.get(`https://toyserver-sage.vercel.app/products?category=${cat}`).then(({ data }) => {
            const { newList } = data
            setProducts(newList)
        }).catch(err => console.log(err))
    }
    useEffect(() => {
        axios.get(`https://toyserver-sage.vercel.app/products?category=${category}`).then(({ data }) => {
            const { newList } = data
            setProducts(newList)
        }).catch(err => console.log(err))
    }, [])
    useEffect(() => {
        const localToken = localStorage.getItem('localToken')
        axios.get(`https://toyserver-sage.vercel.app/auth?token=${localToken}`).then(({ data }) => {
            const { myToken, type } = data
            if (type !== 'success') {
                navigate('/login')
            }
            if (type === 'success') {
                const myData = jwtDecode(myToken)
                const { name, myID } = myData
                updateUserInfo({
                    name,
                    myID
                })
            }
        }).catch(err => console.log(err))
    }, [userInfo.name])
    return (
            <div onMouseOver={closeSubmenu} className='container-products' style={{ position: 'relative', paddingBottom: '3rem' }}>
                <section className='search-filters'>
                    <p style={{ marginBottom: '.5rem', letterSpacing: '1px', fontWeight: 'bold', color: 'var(--my-color)' }}>Categories</p>
                    <hr style={{ width: '70%', borderColor: '#222', marginBottom: '1rem' }} />
                    <ul>
                        <button onClick={() => getCat('all')} className='cat-links'>All</button>
                        <button onClick={() => getCat('babys')} className='cat-links'>Babys</button>
                        <button onClick={() => getCat('boys')} className='cat-links'>Boys</button>
                        <button onClick={() => getCat('girls')} className='cat-links'>Girls</button>

                    </ul>
                </section>
                <section className='products'>
                    <div className='prod-card'>
                        {products.map((item, index) => {
                            const { name, img, price } = item
                            return <Link key={index} className='prod-item'>
                                <img style={{ marginBottom: '1rem' }} src={img} width='180px' height='180px' />
                                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '.5rem' }}>
                                    <p style={{ margin: '0' }}>{name}</p>
                                    <p style={{ margin: '0' }}>{price}</p>

                                </div>
                            </Link>

                        })}
                    </div>
                </section>
            </div>

    )
}

export default Products