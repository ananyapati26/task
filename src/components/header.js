
import React, { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className="bg-[rgb(255,247,226)] flex items-center justify-between px-6 py-4 sm:h-[60px] relative">
      
      <button onClick={toggleMenu} className="sm:hidden">
        <img src="/images/hamburger.png" alt="Hamburger" className="w-6 h-6" />
      </button>

    
      <div className="absolute left-1/2 transform -translate-x-1/2 ">
        <img src='/images/amrutam.png' alt='logo' className=' md:h-14' />
      </div>

      
      <div className="hidden sm:flex space-x-6">
        {["Home", "Find Doctors", "About Us"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "")}`}
            className="text-lg text-gray-700 hover:text-green-700"
          >
            {item}
          </a>
        ))}
      </div>

      
      <div className="hidden sm:flex space-x-4">
        <button className="border border-green-700 px-4 py-1 rounded hover:bg-green-700 hover:text-white">
          Login
        </button>
        <button className="bg-green-700 text-white px-4 py-1 rounded">
          Sign-up
        </button>
      </div>

      
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-50 flex flex-col w-64 shadow-lg p-6">
          
          <button
            onClick={toggleMenu}
            className="self-end text-2xl font-bold text-gray-700"
          >
            &times; 
          </button>

          
          <nav className="mt-8 flex flex-col space-y-4">
            {["Home", "Find Doctors", "About Us"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "")}`}
                className="text-lg text-gray-700 hover:text-green-700"
                onClick={toggleMenu} 
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;

