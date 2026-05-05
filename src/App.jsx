import './App.css'
import SwiperCarousel from './Components/SwiperCarousel'
import GliderCarousel from './Components/GliderCarousel'
import SplideCarousel from './Components/SplideCarousel'
import NukaCarousel from './Components/NukaCarousel'
import KeenCarousel from './Components/KeenCarousel'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Components/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path='/' element={<Header />} /> */}
          <Route path='/' element={<SwiperCarousel />} />
          <Route path='/swiper' element={<SwiperCarousel />} />
          <Route path='/glider' element={<GliderCarousel />} />
          <Route path='/splide' element={<SplideCarousel />} />
          <Route path='/nuka' element={<NukaCarousel />} />
          <Route path='/keen' element={<KeenCarousel />} />
        </Routes>
      </BrowserRouter>
      {/* <SwiperCarousel /> */}
      {/* <GliderCarousel /> */}
      {/* <SplideCarousel /> */}
      {/* <NukaCarousel /> */}
      {/* <KeenCarousel /> */}
    </>
  )
}

export default App