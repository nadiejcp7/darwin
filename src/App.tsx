import './App.css';
import Home from './home';
import About from './about';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './notFound';
import Services from './services';
import Projects from './projects';
import Contact from './contact';
import Header from './header/Header';
import Footer from './footer/Footer';

import logo from './assets/logo.png';
import phoneHeader from './assets/phone.png';
import mapHeader from './assets/map.png';

import yt from './assets/YouTube.png';
import tk from './assets/TikTok.png'
import ig from './assets/Instagram.png'
import fb from './assets/Facebook.png'
import lkn from './assets/LinkedIn.png'


import pb from './assets/phoneBlack.png'
import mb from './assets/mailBlack.png'
import mp from './assets/mapBlack.png'

const socialSrc = [yt, tk, ig, fb, lkn]
const contactSrc = [pb, mb, mp]

export default function App() {

  return (
    <BrowserRouter basename='/darwin/'>
      <Routes>
        <Route index element={<HomeApp indexSelected={0} />} />
        <Route path="/home" element={<HomeApp indexSelected={0} />} />
        <Route path="/about" element={<About indexSelected={1} logo={logo} socialSrc={socialSrc} phoneHeader={phoneHeader} mapHeader={mapHeader} contactSrc={contactSrc} />} />
        <Route path="/services" element={<Services indexSelected={2} logo={logo} socialSrc={socialSrc} phoneHeader={phoneHeader} mapHeader={mapHeader} contactSrc={contactSrc} />} />
        <Route path="/projects" element={<Projects indexSelected={3} logo={logo} socialSrc={socialSrc} phoneHeader={phoneHeader} mapHeader={mapHeader} contactSrc={contactSrc} />} />
        <Route path="/contact" element={<Contact indexSelected={4} logo={logo} socialSrc={socialSrc} phoneHeader={phoneHeader} mapHeader={mapHeader} contactSrc={contactSrc} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

interface Props {
  indexSelected: number
}

function HeaderApp({ indexSelected }: Props) {
  return (
    <>
      <Header indexSelected={indexSelected} logo={logo} phone={phoneHeader} map={mapHeader} />
    </>
  );
}


function FooterApp({ indexSelected }: Props) {
  return (
    <>
      <Footer indexSelected={indexSelected} logo={logo} socialSrc={socialSrc} contactSrc={contactSrc} />
    </>
  );
}

function HomeApp({ indexSelected }: Props) {
  return (
    <>
      <HeaderApp indexSelected={indexSelected} />
      <Home />
      <FooterApp indexSelected={indexSelected} />
    </>
  );
}