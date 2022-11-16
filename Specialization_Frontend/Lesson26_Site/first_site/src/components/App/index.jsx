import '../../style.css'
import Nav from '../Nav'
import Services from '../Services'
import AboutUs from '../AboutUs'
import Contacts from '../Contacts'
import Footer from '../Footer'
import { useState } from 'react'

export default function App() {

const[ menuActive, setMenuActive ] = useState (true);

  return (
    <div>
      <Nav menuActive={menuActive} setMenuActive={setMenuActive}/>
      <Services />
      <AboutUs />
      <Contacts />
      <Footer />
    </div>
  );
}
