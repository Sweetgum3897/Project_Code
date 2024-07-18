import logo from './public/SolarningLogoDef.png';
import Navbar from './NavBar';
import React from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';



const Header = () => {
    const { connected, publicKey } = useWallet();


  return (
     <header className="App-header">
     <img src={logo} className="App-logo" alt="logo" />  
     <div className="Title">
     <h1>Welcome to Solarning!</h1>
                <center><h3>The Solana Learning Platform</h3></center>
                {!connected ? (
                    <div className='connectContainer'>
                        <div className='walletButton'>
                        <WalletMultiButton  />
                        </div>
                    </div>
                ) : (
                    <h2>Welcome, {publicKey?.toString()}</h2>
                )}
                </div>
     <div className="NavBar">

        <Navbar />
     </div>
    </header>
  );
};

 


export default Header;