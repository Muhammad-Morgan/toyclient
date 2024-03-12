import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa';
import React from 'react';
const sublinks = [
  {
    page: 'products',
    links: [
      { label: 'babys', icon: <FaBook />, url: `/products/babys` },
      { label: 'boys', icon: <FaBook />, url: `/products/boys` },
      { label: 'girls', icon: <FaBook />, url: `/products/girls` },
    ],
  },
  {
    page: 'categories',
    links: [
      { label: 'baby born', icon: <FaBook />, url: '/products' },
      { label: 'libraries', icon: <FaBook />, url: '/products' },
      { label: 'help', icon: <FaBook />, url: '/products' },
      { label: 'billing', icon: <FaBook />, url: '/products' },
    ],
  },
  {
    page: 'company',
    links: [
      { label: 'about', icon: <FaBriefcase />, url: '/products' },
      { label: 'customers', icon: <FaBriefcase />, url: '/products' },
    ],
  },
];
export const toys = [
  {
    category: 'boys',
    img: 'https://www.getuscart.com/images/thumbs/0870532_stem-rc-building-toys-for-boys-aged-6-7-8-9-10-11-12-years-old-2-in-1-remote-control-technic-set-car_550.jpeg',
    name: '2 in 1 Lego RC Car',
    price: 2999.9
  },
  {
    category: 'boys',
    img: 'https://heavy.com/wp-content/uploads/2018/11/altair-aqua-fast-rc-boat.jpg?quality=65&strip=all&w=425',
    name: 'Oceans Launch',
    price: 1999.9
  },
  {
    category: 'boys',
    img: 'https://www.verywellfamily.com/thmb/TGdWUzX9G6oRH4bs7jaOv08slXg=/fit-in/1500x1000/filters:no_upscale():max_bytes(150000):strip_icc()/sport-squad-hx40-40-inch-table-top-air-hockey-table-for-kids-and-adults---electric-motor-fan---includes-2-pushers-and-2-air-hockey-pucks---great-for-playing-on-the-floor-tabletop-or-dorm-room-a6295d91794448f3a5980a2be845abd0.jpg',
    name: 'Air Hockey',
    price: 1799.9
  },
  {
    category: 'girls',
    img: 'https://momlovesbest.com/wp-content/uploads/product-thumbnails/Alex-Super-Mani-Pedi-Part-pt.webp',
    name: 'Mani Pedi',
    price: 399.9
  },
  {
    category: 'girls',
    img: 'https://www.mentalup.co/img/blog/educational-toys-for-10-12-year-olds-6.jpg',
    name: 'Sew Cool',
    price: 599.9
  },
  {
    category: 'girls',
    img: 'https://www.getuscart.com/images/thumbs/1175174_hollyhi-kids-makeup-kit-for-girl-washable-makeup-set-toy-with-real-cosmetic-case-for-little-girl-pre_550.jpeg',
    name: 'Make up Kit',
    price: 799.9
  },
  {
    category: 'babys',
    img: 'https://www.the-sun.com/wp-content/uploads/sites/6/2020/04/Baby_matjpg-JS463587323-2.jpg?strip=all&quality=100&w=1192&h=825&crop=1',
    name: 'US Sun',
    price: 499.9
  },
  {
    category: 'babys',
    img: 'https://ae01.alicdn.com/kf/HTB1KP83RFXXXXbYXVXXq6xXFXXXV.jpg_640x640Q90.jpg_.webp',
    name: 'Bed Toys',
    price: 599.9
  },
  {
    category: 'babys',
    img: 'https://image.made-in-china.com/202f0j00eETfcBPyObzp/Newborn-Baby-Toys-0-12-Months-Animal-Plush-Rattle-Mobile-Bell-Toy-Infant-Early-Educational-Toys.jpg',
    name: 'Soft Animal Stick',
    price: 99.9
  },
]
export default sublinks;
