
import React from 'react';
import { Users } from 'lucide-react';

const CommunitySection = () => {
  return (
    <section className="section-height toss-inspired bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 transform transition-all hover:shadow-2xl">
            <div className="bg-blue-100/50 p-6 rounded-xl mb-6">
              <Users className="w-12 h-12 text-estate-blue mb-4" />
              <h3 className="text-2xl font-bold text-estate-dark-blue">부동산 커뮤니티</h3>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                다양한 부동산 경험과 지식을 가진 사람들이 모여 
                실질적인 조언과 인사이트를 나누는 특별한 공간입니다.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-estate-blue mb-2">실시간 부동산 정보</h4>
                <p className="text-gray-600 text-sm">최신 부동산 트렌드와 시장 변화에 대한 신속한 업데이트를 받아보세요.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-estate-blue mb-2">경험 공유 플랫폼</h4>
                <p className="text-gray-600 text-sm">실제 거래 경험, 지역별 생활 정보, 투자 성공 사례 등 현실적인 이야기를 나눕니다.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-estate-blue mb-2">전문가 상담</h4>
                <p className="text-gray-600 text-sm">부동산 전문가들의 정기적인 Q&A 세션으로 맞춤형 조언을 받을 수 있습니다.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="toss-heading text-left">
            <span className="text-estate-blue">부동산 지식</span>을
            <br />함께 나누는 공간
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            실제 경험을 바탕으로 한 현실적인 조언과 정보를 공유하고,
            다양한 관점에서 부동산 시장을 이해할 수 있는 커뮤니티에 참여하세요.
          </p>
          <a href="/community" className="inline-flex items-center text-estate-blue font-medium hover:underline">
            커뮤니티 참여하기
            <svg className="w-5 h-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
