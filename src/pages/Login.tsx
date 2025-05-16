
import React, { useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Label } from "../components/ui/label";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { username, password, rememberMe });
    // Add actual login logic here
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-blue-50 pt-16">
        <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-estate-blue mb-2">로그인</h1>
            <p className="text-gray-600">부동산데이터 서비스에 오신 것을 환영합니다</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="username">아이디</Label>
              <Input
                id="username"
                type="text"
                placeholder="아이디를 입력하세요"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">비밀번호</Label>
                <a href="#" className="text-sm text-estate-blue hover:underline">
                  비밀번호 찾기
                </a>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            <div className="flex items-center">
              <input
                id="remember-me"
                type="checkbox"
                className="h-4 w-4 text-estate-blue border-gray-300 rounded"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                아이디 기억하기
              </label>
            </div>
            
            <Button type="submit" className="w-full bg-estate-blue hover:bg-estate-dark-blue text-white py-3">
              로그인
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              아직 계정이 없으신가요?{' '}
              <Link to="/signup" className="text-estate-blue font-medium hover:underline">
                회원가입
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
