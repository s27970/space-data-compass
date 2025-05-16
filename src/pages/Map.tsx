
import React, { useState } from 'react';
import { Home, Map as MapIcon, Calculator, Users, Search, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Map = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [apartmentSearch, setApartmentSearch] = useState('');
  const [selectedRegion, setSelectedRegion] = useState({
    city: '',
    district: '',
    neighborhood: ''
  });

  // Mock apartment data
  const apartments = [
    { id: 1, name: '래미안아파트', address: '서울시 강남구 삼성동', price: '10억', size: '84m²' },
    { id: 2, name: '자이아파트', address: '서울시 서초구 반포동', price: '15억', size: '110m²' },
    { id: 3, name: '힐스테이트', address: '서울시 송파구 잠실동', price: '12억', size: '95m²' },
  ];

  const filteredApartments = apartments.filter(apt => 
    apt.name.includes(apartmentSearch) || 
    apt.address.includes(searchQuery)
  );

  return (
    <div className="min-h-screen flex bg-blue-50">
      {/* Left sidebar menu */}
      <div className="w-16 bg-white shadow-lg flex flex-col items-center py-6 space-y-10">
        <Link to="/" className="text-gray-600 hover:text-estate-blue transition-all">
          <Home className="w-6 h-6" />
        </Link>
        <Link to="/map" className="text-estate-blue transition-all">
          <MapIcon className="w-6 h-6" />
        </Link>
        <Link to="/calculator" className="text-gray-600 hover:text-estate-blue transition-all">
          <Calculator className="w-6 h-6" />
        </Link>
        <Link to="/community" className="text-gray-600 hover:text-estate-blue transition-all">
          <Users className="w-6 h-6" />
        </Link>
      </div>
      
      {/* Search panel */}
      <div className="w-80 bg-white shadow-md p-5">
        <h2 className="text-xl font-bold mb-6 text-estate-blue">부동산 검색</h2>
        
        {/* Region search */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">지역 검색</label>
          <div className="flex space-x-2">
            <select 
              className="flex-1 rounded-md border border-gray-300 px-3 py-2"
              value={selectedRegion.city}
              onChange={e => setSelectedRegion({...selectedRegion, city: e.target.value})}
            >
              <option value="">시</option>
              <option value="서울시">서울시</option>
              <option value="부산시">부산시</option>
            </select>
            <select 
              className="flex-1 rounded-md border border-gray-300 px-3 py-2"
              value={selectedRegion.district}
              onChange={e => setSelectedRegion({...selectedRegion, district: e.target.value})}
            >
              <option value="">구</option>
              <option value="강남구">강남구</option>
              <option value="서초구">서초구</option>
            </select>
            <select 
              className="flex-1 rounded-md border border-gray-300 px-3 py-2"
              value={selectedRegion.neighborhood}
              onChange={e => setSelectedRegion({...selectedRegion, neighborhood: e.target.value})}
            >
              <option value="">동</option>
              <option value="삼성동">삼성동</option>
              <option value="서초동">서초동</option>
            </select>
          </div>
          <button 
            className="mt-2 w-full bg-estate-blue text-white py-2 rounded-md hover:bg-estate-dark-blue transition-all"
            onClick={() => setSearchQuery(`${selectedRegion.city} ${selectedRegion.district} ${selectedRegion.neighborhood}`.trim())}
          >
            검색
          </button>
        </div>
        
        {/* Apartment name search */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">아파트명 검색</label>
          <div className="flex space-x-2">
            <input 
              type="text" 
              className="flex-1 rounded-md border border-gray-300 px-3 py-2"
              placeholder="아파트 이름을 입력하세요"
              value={apartmentSearch}
              onChange={e => setApartmentSearch(e.target.value)}
            />
            <button className="bg-estate-blue text-white px-3 rounded-md hover:bg-estate-dark-blue transition-all">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        {/* Search results */}
        <div>
          <h3 className="text-lg font-medium mb-3 text-gray-700">검색 결과</h3>
          <div className="space-y-3">
            {filteredApartments.length > 0 ? (
              filteredApartments.map(apartment => (
                <div key={apartment.id} className="bg-gray-50 border border-gray-200 rounded-lg p-3 hover:shadow-md transition-all">
                  <h4 className="font-medium text-estate-blue">{apartment.name}</h4>
                  <p className="text-sm text-gray-600">{apartment.address}</p>
                  <div className="flex justify-between mt-2">
                    <span className="text-sm font-medium">시세: {apartment.price}</span>
                    <span className="text-sm">{apartment.size}</span>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center py-4">검색 결과가 없습니다</p>
            )}
          </div>
        </div>
      </div>
      
      {/* Main map area */}
      <div className="flex-1 relative">
        {/* Map placeholder - replace with actual Kakao map integration */}
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="text-center">
            <MapIcon className="w-16 h-16 mx-auto text-estate-blue opacity-50" />
            <p className="mt-2 text-lg text-gray-600">카카오맵 지도 영역</p>
            <p className="text-sm text-gray-500">실제 구현 시 카카오맵 API로 대체됩니다</p>
          </div>
        </div>
        
        {/* User profile button */}
        <div className="absolute top-4 right-4">
          <button className="bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all">
            <User className="w-6 h-6 text-estate-blue" />
          </button>
        </div>
        
        {/* AI recommendation button */}
        <div className="absolute bottom-6 right-6">
          <button className="bg-estate-blue text-white p-3 rounded-full shadow-lg hover:bg-estate-dark-blue transition-all">
            <span className="font-medium">AI 추천</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map;
