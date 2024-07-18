import React from 'react';
<<<<<<< HEAD
import Header from './Header';
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import './App.css';

const CourseStart = lazy(() => import('./CourseStart'));
const WalletExplanation = lazy(() => import('./WalletExplanation'));
const Dex = lazy(() => import('./Dex'));
const NoMatch = lazy(() => import('./NoMatch'));



const App = () => {

  return (
    <div>
          <>
      <Header />
      <Suspense fallback={<div className="container">Loading...</div>}>
      <Router>
          <Routes>
             <Route path="/" element={<CourseStart />} />
             <Route path="/wallet-explanation" element={<WalletExplanation />} />
             <Route path="/dex" element={<Dex />} />
             <Route path="*" element={<NoMatch />} />
          </Routes>
          </Router>
       </Suspense>
      <Footer />
      </>
    </div>
 
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
>>>>>>> b2eb569215e77b8ef234026ae8381f9c0bb6d37b
  );
}

export default App;
