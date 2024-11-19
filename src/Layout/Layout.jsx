import React,{useState} from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';


const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  return(
  <div className='flex'>
    <Sidebar menuOpen={menuOpen}/>
    <div className='w-full'>
      <Header setMenuOpen={setMenuOpen} menuOpen={menuOpen}/>
      <Outlet />
      {/* <Footer /> */}
    </div>
  </div>
  )
};

export default Layout;