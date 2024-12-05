import './App.css';
import Home from './home';
import About from './about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './notFound';
import Services from './services';
import Projects from './projects';
import Contact from './contact';

import logo from './assets/logo.png';
import phoneHeader from './assets/phone.png';
import mapHeader from './assets/map.png';

import yt from './assets/Youtube.png';
import tk from './assets/TikTok.png'
import ig from './assets/Instagram.png'
import fb from './assets/Facebook.png'
import lkn from './assets/LinkedIn.png'


import pb from './assets/phoneBlack.png'
import mb from './assets/mailBlack.png'
import mp from './assets/mapBlack.png'


export default function App() {

  const socialSrc = [yt, tk, ig, fb, lkn]
  const contactSrc = [pb, mb, mp]

  return (
    <BrowserRouter basename='/darwin/'>
      <Routes>
        <Route index element={<Home indexSelected={0} logo={logo} socialSrc={socialSrc} phoneHeader={phoneHeader} mapHeader={mapHeader} contactSrc={contactSrc} />} />
        <Route path="/home" element={<Home indexSelected={0} logo={logo} socialSrc={socialSrc} phoneHeader={phoneHeader} mapHeader={mapHeader} contactSrc={contactSrc} />} />
        <Route path="/about" element={<About indexSelected={1} logo={logo} socialSrc={socialSrc} phoneHeader={phoneHeader} mapHeader={mapHeader} contactSrc={contactSrc} />} />
        <Route path="/services" element={<Services indexSelected={2} logo={logo} socialSrc={socialSrc} phoneHeader={phoneHeader} mapHeader={mapHeader} contactSrc={contactSrc} />} />
        <Route path="/projects" element={<Projects indexSelected={3} logo={logo} socialSrc={socialSrc} phoneHeader={phoneHeader} mapHeader={mapHeader} contactSrc={contactSrc} />} />
        <Route path="/contact" element={<Contact indexSelected={4} logo={logo} socialSrc={socialSrc} phoneHeader={phoneHeader} mapHeader={mapHeader} contactSrc={contactSrc} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
