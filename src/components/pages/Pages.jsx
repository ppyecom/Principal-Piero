import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../home/Home'
import Hero from '../home/hero/Hero'
import Who from '../home/who/Who'
import Works from '../home/works/Works'
import Contact from '../home/contact/Contact'
import './pages.css'
import Skills from '../home/skills/Skills'
import ProjectsGit from '../home/projectsGit/ProjectsGit'
import Prices from '../home/prices/Prices'

const Pages = () => {

  return (
    <>

        <div className='container'>
            <Routes>
                <Route path='/' Component={Home}/>
                <Route path='/home' Component={Home}/>
                <Route path='/hero' Component={Hero}/>
                <Route path='/who' Component={Who}/>
                <Route path='/skills' Component={Skills}/>
                <Route path='/works' Component={Works}/>
                <Route path='/projectsgit' Component={ProjectsGit}/>
                <Route path='/prices' Component={Prices}/>
                <Route path='/contact'/>
            </Routes>
            <Contact />
        </div>
    </>
  )
}

export default Pages