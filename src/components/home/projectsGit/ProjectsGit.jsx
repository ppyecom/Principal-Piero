import React, { useEffect, useState } from 'react'
import './projectsGit.css'
import CardProjects from './cardProjectsGit/CardProjects'
import useFetch from '../../hooks/useFetch'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import { Grid, Pagination } from 'swiper/modules';
import Header from '../../common/header/Header'

const ProjectsGit = () => {

    const {data, isLoading} = useFetch()

    const withStars = data.filter((stars) => stars.stargazers_count > 0 && stars.name != 'CRUD-PYTHON')
    const crudPy =  data.filter((crud) => crud.name === 'CRUD-PYTHON')
    const outStars = data.filter((out) => out.stargazers_count === 0)

    const datosAll = [...withStars, ...crudPy, ...outStars]

    const noNecesario = datosAll.filter((nop) => nop.name !='instagram-botter' && nop.name !='GUIA-2-3-JAVA-POO' && nop.name !='GUIA-3-C-USIL-POO')

    const currentUrl = window.location.pathname
    const [url, seturl] = useState(true)

    useEffect(() => {
      if (currentUrl == '/projectsgit'){
        seturl(false)
      }
    }, [noNecesario])

  return (
    <section className='section-projectsGit'>
      {url ? null : <Header />}
        <div className="container-progit">
            {isLoading && (<h1>Cargando...</h1>)}
            <Swiper
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
            {noNecesario.map((datos, index) => {
                return(
                 <SwiperSlide key={index}><CardProjects key={index} {...datos}/></SwiperSlide>
                )
            })}
            </Swiper>
        </div>
    </section>
  )
}

export default ProjectsGit