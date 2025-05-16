
import React from 'react';
import Header from '../components/Header';

const Calculator = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-blue-50 pt-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6 text-estate-green">부동산 계산기</h1>
          <p className="text-xl mb-8 text-gray-700">이 페이지는 부동산 계산기입니다. 준비 중입니다.</p>
          <a href="/" className="bg-estate-green text-white py-2 px-6 rounded-lg hover:bg-estate-dark-green transition-all">
            메인으로 돌아가기
          </a>
        </div>
      </div>
    </>
  );
};

export default Calculator;
