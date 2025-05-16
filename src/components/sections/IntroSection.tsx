
import React from 'react';

const IntroSection = () => {
  return (
    <section className="section-height toss-inspired bg-gradient-to-br from-white to-blue-50">
      <div className="animate-fade-in">
        <h1 className="toss-heading">
          <span className="text-estate-blue">당신의 공간</span>, 
          <br className="md:hidden" /> 우리의 
          <span className="text-estate-green"> 데이터</span>로 완성됩니다.
        </h1>
        <p className="toss-description">
          최적의 부동산 결정을 위한 데이터 기반 플랫폼으로,
          <br className="hidden md:block" /> 
          복잡한 부동산 시장을 쉽고 명확하게 이해할 수 있도록 도와드립니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-estate-blue hover:bg-estate-dark-blue text-white font-medium py-3 px-8 rounded-xl transition-all transform hover:scale-105">
            서비스 시작하기
          </button>
          <button className="bg-white hover:bg-gray-100 text-estate-blue border border-estate-blue font-medium py-3 px-8 rounded-xl transition-all transform hover:scale-105">
            더 알아보기
          </button>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
