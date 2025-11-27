import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Point from './components/Point'
import Packet from './components/Packet'
import Review from './components/Review'
import Profile from './components/Profile'
import FAQ from './components/FAQ'
import Gallery from './components/Gallery'
import Footer from './components/Footer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Banner />
    <Point />
    <Packet />
    <Review />
    <Profile />
    <FAQ />
    <Gallery />
    <Footer />
  </StrictMode>,
)
