import React from 'react';
import '../App.css'

const Header = () => {
  return (
    <header className="bg-white shadow ">
      <div className="container mx-auto p-4 flex justify-between items-center header">
        <div className="hold1">

        <div className="text-xl font-bold text-blue-500">Accredian</div>

        <div class="dropdown">
          <button class="dropbtn">Dropdown</button>
          <div class="dropdown-content">
            <a href="#">Course 1</a>
            <a href="#">Course 2</a>
            <a href="#">Course 3</a>
         </div>
        </div>

        </div>
        
        <div className="space-x-4 hold2">
            <a href="#">Refer&Earn</a>
            <a href="#">Resources</a>
            <a href="#">About Us</a>
          <button className="text-gray-600">Login</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Try for free</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
