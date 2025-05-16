
import React from 'react';
import { Map } from 'lucide-react';

const MapSection = () => {
  return (
    <section className="section-height toss-inspired bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform transition-all hover:shadow-2xl">
            <div className="bg-estate-blue/10 p-6 rounded-xl mb-6">
              <Map className="w-12 h-12 text-estate-blue mb-4" />
              <h3 className="text-2xl font-bold text-estate-dark-blue">데이터 기반 부동산 지도</h3>
            </div>
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="bg-estate-light-blue/30 p-2 rounded-full mr-4">
                  <svg className="h-5 w-5 text-estate-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">실시간 시세 그래프</h4>
                  <p className="text-gray-600 mt-1">지역별 실시간 부동산 시세를 한눈에 확인하고 가격 변동 추이를 분석할 수 있습니다.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-estate-light-blue/30 p-2 rounded-full mr-4">
                  <svg className="h-5 w-5 text-estate-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">스마트 매물 검색</h4>
                  <p className="text-gray-600 mt-1">다양한 필터링 옵션으로 원하는 조건에 딱 맞는 매물을 빠르고 정확하게 찾아드립니다.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-estate-light-blue/30 p-2 rounded-full mr-4">
                  <svg className="h-5 w-5 text-estate-blue" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-lg">신뢰할 수 있는 리뷰</h4>
                  <p className="text-gray-600 mt-1">실제 거주자들의 솔직한 리뷰로 부동산의 숨겨진 정보까지 투명하게 확인하세요.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="toss-heading text-left">
            지역별 <span className="text-estate-blue">부동산 정보</span>를
            <br />한눈에 파악하세요
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            인공지능이 분석한 부동산 시장 데이터와 지역별 인프라 정보로 
            투자와 거주에 모두 최적화된 결정을 내릴 수 있습니다.
          </p>
          <a href="/map" className="inline-flex items-center text-estate-blue font-medium hover:underline">
            지도 서비스 이용하기
            <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
