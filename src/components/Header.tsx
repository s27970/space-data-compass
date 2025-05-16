
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-estate-blue">부동산데이터</span>
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link to="/map" className="text-gray-700 hover:text-estate-blue transition-colors font-medium">
            지도
          </Link>
          <Link to="/community" className="text-gray-700 hover:text-estate-blue transition-colors font-medium">
            커뮤니티
          </Link>
          <Link to="/realestate" className="text-gray-700 hover:text-estate-blue transition-colors font-medium">
            부동산
          </Link>
          <Link to="/signup" className="bg-estate-blue text-white py-2 px-4 rounded-lg hover:bg-estate-dark-blue transition-colors">
            회원가입
          </Link>
        </nav>
        
        <div className="w-20"></div> {/* Spacer to balance the logo */}
      </div>
    </header>
  );
};

export default Header;
