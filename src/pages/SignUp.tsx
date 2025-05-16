
import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    email: '',
    nickname: '',
    name: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up data:', formData);
    // Add actual signup logic here
  };
  
  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-blue-50 pt-16 py-10">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-estate-blue mb-2">회원가입</h1>
            <p className="text-gray-600">부동산데이터 서비스에 가입해 보세요</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="username">아이디</Label>
              <Input
                id="username"
                name="username"
                type="text"
                placeholder="사용할 아이디를 입력하세요"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">비밀번호</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <p className="text-xs text-gray-500">영문, 숫자, 특수문자를 포함한 8자 이상</p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">비밀번호 확인</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="비밀번호를 다시 입력하세요"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">이메일</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="이메일을 입력하세요"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="nickname">닉네임</Label>
              <Input
                id="nickname"
                name="nickname"
                type="text"
                placeholder="커뮤니티에서 사용할 닉네임을 입력하세요"
                value={formData.nickname}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                name="name"
                type="text"
                placeholder="실명을 입력하세요"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <Button type="submit" className="w-full bg-estate-blue hover:bg-estate-dark-blue text-white py-3 mt-6">
              회원가입 완료
            </Button>
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              이미 계정이 있으신가요?{' '}
              <Link to="/login" className="text-estate-blue font-medium hover:underline">
                로그인
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
