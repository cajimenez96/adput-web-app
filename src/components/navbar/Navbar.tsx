import React from 'react';
import { Button } from '../button';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-white text-xl font-bold">AdPut</h1>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium">
              Inicio
            </a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium">
              Servicios
            </a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium">
              Acerca de
            </a>
            <a href="#" className="text-white hover:text-blue-200 px-3 py-2 text-sm font-medium">
              Contacto
            </a>
            <Button 
              variant="filled" 
              color="warning" 
              size="md"
              className="ml-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold shadow-lg"
            >
              Obtener Tarjeta
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-blue-200 focus:outline-none focus:text-blue-200">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;