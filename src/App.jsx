
import './App.css'

import React from 'react';
import Header from './components/Header';
import ReferAndEarn from './components/ReferAndEarn';
import FourComps from './components/FourComps';
import Nextone from './components/Nextone';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Header />
      <FourComps></FourComps>
      <ReferAndEarn />
      {/* Add more components here like Benefits, FAQs, Support */}
      <Nextone />
      <Footer></Footer>
    </div>
  );
}

export default App;
