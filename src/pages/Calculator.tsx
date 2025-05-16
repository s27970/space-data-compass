
import React, { useState } from 'react';
import Header from '../components/Header';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const Calculator = () => {
  const [activeCalculator, setActiveCalculator] = useState(0);
  const calculators = ['중개보수 계산기', '대출이자 계산기', '일반 계산기'];
  
  const nextCalculator = () => {
    setActiveCalculator((prev) => (prev + 1) % calculators.length);
  };
  
  const prevCalculator = () => {
    setActiveCalculator((prev) => (prev - 1 + calculators.length) % calculators.length);
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 bg-green-50 flex flex-col items-center">
        <div className="max-w-4xl w-full p-6 bg-white rounded-2xl shadow-lg m-8">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={prevCalculator} 
              className="bg-estate-green/10 p-3 rounded-full hover:bg-estate-green/20 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-estate-green" />
            </button>
            
            <h2 className="text-3xl font-bold text-center text-estate-green">
              {calculators[activeCalculator]}
            </h2>
            
            <button 
              onClick={nextCalculator} 
              className="bg-estate-green/10 p-3 rounded-full hover:bg-estate-green/20 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-estate-green" />
            </button>
          </div>

          {activeCalculator === 0 && (
            <div className="broker-fee-calculator space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">거래 유형</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-2">
                    <option>매매</option>
                    <option>전세</option>
                    <option>월세</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">지역</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-2">
                    <option>서울특별시</option>
                    <option>경기도</option>
                    <option>부산광역시</option>
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">거래금액</label>
                  <div className="flex items-center">
                    <input type="number" className="flex-1 rounded-l-md border border-gray-300 px-3 py-2" placeholder="0" />
                    <span className="bg-gray-100 px-4 py-2 border border-l-0 border-gray-300 rounded-r-md">만원</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">계산 결과</h3>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">적용 요율</span>
                    <span className="font-medium">0.4 %</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-700">중개보수 한도</span>
                    <span className="font-medium">상한선 없음</span>
                  </div>
                  <div className="flex justify-between items-center mt-3 text-lg text-estate-dark-green font-bold">
                    <span>중개보수</span>
                    <span>0 원</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-estate-green text-white py-3 rounded-lg hover:bg-estate-dark-green transition-all">
                계산하기
              </button>
            </div>
          )}

          {activeCalculator === 1 && (
            <div className="loan-interest-calculator space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">대출 금액</label>
                  <div className="flex items-center">
                    <input type="number" className="flex-1 rounded-l-md border border-gray-300 px-3 py-2" placeholder="0" />
                    <span className="bg-gray-100 px-4 py-2 border border-l-0 border-gray-300 rounded-r-md">만원</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">연 이자율</label>
                  <div className="flex items-center">
                    <input type="number" step="0.1" className="flex-1 rounded-l-md border border-gray-300 px-3 py-2" placeholder="0.0" />
                    <span className="bg-gray-100 px-4 py-2 border border-l-0 border-gray-300 rounded-r-md">%</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">대출 기간</label>
                  <div className="flex items-center">
                    <input type="number" className="flex-1 rounded-l-md border border-gray-300 px-3 py-2" placeholder="0" />
                    <span className="bg-gray-100 px-4 py-2 border border-l-0 border-gray-300 rounded-r-md">년</span>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">상환 방식</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-2">
                    <option>원리금균등상환</option>
                    <option>원금균등상환</option>
                    <option>만기일시상환</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">납입 주기</label>
                  <select className="w-full rounded-md border border-gray-300 px-3 py-2">
                    <option>매월</option>
                    <option>매분기</option>
                    <option>매년</option>
                  </select>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mt-6">
                <h3 className="text-lg font-medium text-gray-800 mb-4">계산 결과</h3>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700">월 상환액</span>
                    <span className="font-medium">0 원</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-700">총 이자액</span>
                    <span className="font-medium">0 원</span>
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-gray-700">총 상환액</span>
                    <span className="font-medium">0 원</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-estate-green text-white py-3 rounded-lg hover:bg-estate-dark-green transition-all">
                계산하기
              </button>
            </div>
          )}

          {activeCalculator === 2 && (
            <div className="general-calculator">
              <div className="bg-gray-100 p-4 rounded-lg mb-6">
                <input 
                  type="text" 
                  className="w-full text-right text-2xl font-medium py-2 px-3 bg-white rounded border-0 shadow-inner"
                  readOnly
                  value="0"
                />
              </div>
              
              <div className="grid grid-cols-4 gap-3">
                {['C', '()', '%', '÷', 
                  '7', '8', '9', '×', 
                  '4', '5', '6', '-', 
                  '1', '2', '3', '+', 
                  '±', '0', '.', '='].map((button) => (
                  <button 
                    key={button} 
                    className={`py-4 rounded-lg text-lg font-medium ${
                      ['C', '()', '%', '÷', '×', '-', '+', '='].includes(button) 
                        ? 'bg-estate-green/20 text-estate-dark-green hover:bg-estate-green/30' 
                        : 'bg-white text-gray-800 hover:bg-gray-100'
                    } shadow-sm`}
                  >
                    {button}
                  </button>
                ))}
              </div>
              
              <div className="mt-6 bg-green-50 rounded-lg p-4">
                <div className="text-center text-gray-600">
                  <p>일반 계산기는 각종 부동산 계산에 필요한 기본 산술 연산을 제공합니다.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Calculator;
