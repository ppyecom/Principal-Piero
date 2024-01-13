import React, { useEffect, useState } from 'react';
import './skills.css';
import CardSkills from './cardSkills/CardSkills';
import Header from '../../common/header/Header';
import { Grid, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

const Skills = () => {

  const cardSk = [
    {img: './icons/skills/aspnet.png', descrip: 'ASPNET'}, {img: './icons/skills/csharp.png', descrip: 'C#'}, {img: './icons/skills/css.png', descrip: 'CSS'}, {img: './icons/skills/html.png', descrip: 'HTML'}, {img: './icons/skills/JavaScript.png', descrip: 'JAVASCRIPT'},
    {img: './icons/skills/mysql.png', descrip: 'MYSQL'}, {img: './icons/skills/github.svg', descrip: 'GITHUB'}, {img: './icons/skills/Python.svg.png', descrip: 'PYTHON'}, {img: './icons/skills/React.svg.png', descrip: 'REACT'}, {img: './icons/skills/sqlserver.png', descrip: 'SQL SERVER'},
    {img: './icons/skills/tailwind.png', descrip: 'TAILWIND'}, {img: './icons/skills/three.png', descrip: 'THREE'}
  ]

  const currentUrl = window.location.pathname
  const [url, seturl] = useState(true)
  
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 530)

  useEffect(() => {
    console.log(currentUrl)
    if (currentUrl == '/skills'){
      seturl(false)
    }

    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();
  }, [])

  return (
    <section className='section-skills'>
      {url ? null : <Header />}
      <div className="container-skills">
      {isSmallScreen ? <Swiper
              slidesPerView={1}
              grid={{
                rows: 2,
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              className="mySwiper">
            {cardSk.map((item, index) => {
          return(
            <SwiperSlide key={index}><CardSkills key={index} imagen={item.img} descripcion={item.descrip}/></SwiperSlide>
          )
        })}
            </Swiper>: <Swiper
              slidesPerView={3}
              grid={{
                rows: 2,
              }}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              modules={[Grid, Pagination]}
              className="mySwiper">
            {cardSk.map((item, index) => {
          return(
            <SwiperSlide key={index}><CardSkills key={index} imagen={item.img} descripcion={item.descrip}/></SwiperSlide>
          )
        })}
            </Swiper>}
      
        
      </div>
    </section>
  )
}

export default Skills