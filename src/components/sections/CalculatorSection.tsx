
import React from 'react';
import { Calculator } from 'lucide-react';

const CalculatorSection = () => {
  return (
    <section className="section-height toss-inspired bg-gradient-to-br from-white to-green-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="toss-heading text-left">
            복잡한 <span className="text-estate-green">부동산 계산</span>을
            <br />쉽고 정확하게
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            복잡한 수식이나 전문 지식 없이도 누구나 쉽게 
            부동산 관련 금융 계산을 할 수 있도록 설계된 스마트 계산기입니다.
          </p>
          <a href="/calculator" className="inline-flex items-center text-estate-green font-medium hover:underline">
            계산기 서비스 이용하기
            <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
        <div>
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform transition-all hover:shadow-2xl">
            <div className="bg-estate-green/10 p-6 rounded-xl mb-6">
              <Calculator className="w-12 h-12 text-estate-green mb-4" />
              <h3 className="text-2xl font-bold text-estate-dark-green">스마트 부동산 계산기</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-estate-light-green/30 p-2 rounded-full mr-4">
                  <svg className="h-5 w-5 text-estate-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2a1 1 0 011-1h8a1 1 0 011 1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">중개보수 계산기</h4>
                  <p className="text-gray-600 mt-1">지역과 거래 유형에 따른 정확한 중개수수료를 한 번에 계산하여 불필요한 비용을 절약하세요.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-estate-light-green/30 p-2 rounded-full mr-4">
                  <svg className="h-5 w-5 text-estate-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">대출이자 계산기</h4>
                  <p className="text-gray-600 mt-1">다양한 금리 옵션과 상환 방식을 비교하여 최적의 대출 계획을 세울 수 있습니다.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-estate-light-green/30 p-2 rounded-full mr-4">
                  <svg className="h-5 w-5 text-estate-green" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm1 2a1 1 0 000 2h6a1 1 0 100-2H7zm6 7a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-3 3a1 1 0 100 2h.01a1 1 0 100-2H10zm-4 1a1 1 0 011-1h.01a1 1 0 110 2H7a1 1 0 01-1-1zm1-4a1 1 0 100 2h.01a1 1 0 100-2H7zm2 1a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zm4-4a1 1 0 100 2h.01a1 1 0 100-2H13zM9 9a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1zM7 8a1 1 0 000 2h.01a1 1 0 000-2H7z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">일반 계산기</h4>
                  <p className="text-gray-600 mt-1">부동산 관련 복잡한 계산을 위한 전용 계산기로 세금, 유지비용 등 모든 비용을 정확히 계산합니다.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
