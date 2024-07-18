import './App.css';
import React from 'react';
import ftlogo from './public/SolarningLogoDef.png';
import discord from './public/discord_white_rbgcrp.png';
import opensea from './public/Opensea-Transparent Whitecrp.png';
import twitter from './public/twittercrp.png';


function Footer() {
return(
  <div className='Footer'>
    <img src={ftlogo} className="Ft-logo" alt="logo" />
    <div className='foot-contain'> 
     {/*left side - social media icons*/}
     <p><div className='row2'>
     <a href=""><img src= {discord} className='icons' alt="Discord"/></a>
           <img src= {opensea} className='icons' alt="OpenSea"/>
           {/*<img src= {facebook} className='icons' alt="Facebook"/>*/}
           <a href=""><img src= {twitter} className='icons' alt="X"/></a>
           </div></p>
      <p></p>
      {/*right side - sections and connect*/}
      <p><div className='row3'>
        <div className='sections'>
      <div>About</div>
      <div>Team</div>
    </div></div></p>
    </div>
    <center><h5>&copy; 2023 Solarning All rights reserved.</h5></center>
    </div>
 );
}
export default Footer;
