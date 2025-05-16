
import React, { useState } from 'react';
import Header from '../components/Header';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "../components/ui/dialog";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Search, MessageSquare, ThumbsUp, Calendar, User, X } from 'lucide-react';

// Mock community post data
const mockPosts = [
  {
    id: 1,
    title: '강남 아파트 시세 질문드립니다',
    author: '부동산초보',
    date: '2025-05-15',
    views: 128,
    likes: 15,
    comments: 8,
    content: '안녕하세요, 강남구 일원동 래미안아파트 시세가 어떻게 되나요? 최근 매물이 없어서 시세 파악이 잘 안됩니다. 정보 부탁드립니다.',
    category: '질문/답변',
    comments_data: [
      { id: 1, author: '부동산전문가', content: '현재 해당 단지 32평형은 14억 선에 거래되고 있습니다.', date: '2025-05-15', likes: 5 },
      { id: 2, author: '동네주민', content: '저희 집 바로 옆동인데, 지난달에 13억 8천에 거래 됐어요.', date: '2025-05-15', likes: 2 },
    ]
  },
  {
    id: 2,
    title: '서울 신축 아파트 분양 정보 공유',
    author: '분양달인',
    date: '2025-05-14',
    views: 256,
    likes: 42,
    comments: 15,
    content: '다음 달 분양 예정인 서울 주요 신축 아파트 정보를 정리해봤습니다. 위치, 평수, 예상 분양가를 포함해 모아놨으니 참고하세요.',
    category: '정보공유',
    comments_data: [
      { id: 3, author: '내집마련', content: '좋은 정보 감사합니다. 청약 일정도 알 수 있을까요?', date: '2025-05-14', likes: 3 },
    ]
  },
  {
    id: 3,
    title: '전세 계약시 주의사항 (체크리스트 포함)',
    author: '경험자',
    date: '2025-05-13',
    views: 315,
    likes: 67,
    comments: 22,
    content: '전세 계약 3번 하면서 경험한 주의사항들을 정리했습니다. 계약 전 꼭 확인해야 할 사항들과 계약서 작성시 체크포인트 공유합니다.',
    category: '팁/노하우',
    comments_data: []
  },
  {
    id: 4,
    title: '부동산 투자 초보, 어디서부터 시작할까요?',
    author: '투자자지망생',
    date: '2025-05-12',
    views: 189,
    likes: 24,
    comments: 18,
    content: '부동산 투자를 시작하려고 합니다. 어디서부터 공부해야 할지, 어떤 지역이 좋을지 조언 부탁드립니다.',
    category: '질문/답변',
    comments_data: []
  },
  {
    id: 5,
    title: '최근 주택담보대출 금리 정보',
    author: '대출전문가',
    date: '2025-05-11',
    views: 245,
    likes: 36,
    comments: 12,
    content: '주요 은행별 최신 주택담보대출 금리를 비교 정리했습니다. 고정금리/변동금리 옵션도 함께 설명드립니다.',
    category: '정보공유',
    comments_data: []
  },
];

const Community = () => {
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [newPost, setNewPost] = useState({
    title: '',
    content: '',
    category: '질문/답변'
  });
  const [newComment, setNewComment] = useState('');
  
  const handlePostClick = (post: any) => {
    setSelectedPost(post);
    setIsDetailModalOpen(true);
  };
  
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating new post:', newPost);
    setIsCreateModalOpen(false);
    setNewPost({ title: '', content: '', category: '질문/답변' });
    // Add actual post creation logic here
  };
  
  const handleAddComment = () => {
    console.log('Adding comment to post:', selectedPost?.id, newComment);
    setNewComment('');
    // Add actual comment creation logic here
  };

  return (
    <>
      <Header />
      <div className="min-h-screen pt-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-estate-blue">부동산 커뮤니티</h1>
            <Button 
              onClick={() => setIsCreateModalOpen(true)}
              className="bg-estate-blue hover:bg-estate-dark-blue"
            >
              글 작성하기
            </Button>
          </div>
          
          {/* Search and filter */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1 flex items-center border rounded-md overflow-hidden">
              <Input
                type="text"
                placeholder="검색어를 입력하세요"
                className="border-0 flex-1"
              />
              <Button variant="ghost" className="px-3 h-full">
                <Search className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="flex gap-2">
              <select className="border rounded-md px-3 py-2 bg-white">
                <option>전체 카테고리</option>
                <option>질문/답변</option>
                <option>정보공유</option>
                <option>팁/노하우</option>
                <option>경험담</option>
              </select>
              
              <select className="border rounded-md px-3 py-2 bg-white">
                <option>최신순</option>
                <option>조회순</option>
                <option>좋아요순</option>
                <option>댓글많은순</option>
              </select>
            </div>
          </div>
          
          {/* Posts list */}
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">카테고리</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">제목</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">작성자</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">작성일</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">조회</th>
                  <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">좋아요</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockPosts.map((post) => (
                  <tr 
                    key={post.id}
                    onClick={() => handlePostClick(post)} 
                    className="hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 text-xs rounded-full bg-estate-blue/10 text-estate-blue">
                        {post.category}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className="font-medium text-gray-800">{post.title}</span>
                        {post.comments > 0 && (
                          <span className="ml-2 text-estate-blue text-sm flex items-center">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            {post.comments}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-600">{post.author}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{post.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500">{post.views}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-center text-sm text-gray-500 flex justify-center">
                      <span className="flex items-center">
                        <ThumbsUp className="h-3 w-3 mr-1 text-estate-blue" />
                        {post.likes}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {/* Pagination */}
            <div className="px-6 py-4 flex justify-center">
              <nav className="flex items-center">
                <Button variant="outline" size="sm" className="mr-1">이전</Button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <Button 
                    key={page} 
                    variant={page === 1 ? "default" : "outline"} 
                    size="sm" 
                    className="mx-1 min-w-8"
                  >
                    {page}
                  </Button>
                ))}
                <Button variant="outline" size="sm" className="ml-1">다음</Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
      
      {/* Post detail modal */}
      <Dialog open={isDetailModalOpen} onOpenChange={setIsDetailModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <div className="flex items-center justify-between">
              <span className="px-2 py-1 text-xs rounded-full bg-estate-blue/10 text-estate-blue">
                {selectedPost?.category}
              </span>
              <button 
                onClick={() => setIsDetailModalOpen(false)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <DialogTitle className="text-2xl mt-2">{selectedPost?.title}</DialogTitle>
            <DialogDescription className="flex justify-between items-center">
              <span className="flex items-center text-gray-600">
                <User className="h-4 w-4 mr-1" /> {selectedPost?.author}
              </span>
              <span className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-1" /> {selectedPost?.date}
              </span>
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-4">
            <div className="border rounded-lg p-6 min-h-40 text-gray-800">
              {selectedPost?.content}
            </div>
            
            <div className="mt-4 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="flex items-center text-gray-600">
                  <ThumbsUp className="h-4 w-4 mr-1" /> {selectedPost?.likes}
                </span>
                <span className="flex items-center text-gray-600">
                  <MessageSquare className="h-4 w-4 mr-1" /> {selectedPost?.comments}
                </span>
              </div>
              <Button variant="outline" size="sm">
                <ThumbsUp className="h-4 w-4 mr-1" /> 좋아요
              </Button>
            </div>
            
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">댓글</h3>
              
              {selectedPost?.comments_data.length > 0 ? (
                <div className="space-y-4">
                  {selectedPost?.comments_data.map((comment: any) => (
                    <div key={comment.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{comment.author}</span>
                        <span className="text-sm text-gray-500">{comment.date}</span>
                      </div>
                      <p className="text-gray-700">{comment.content}</p>
                      <div className="mt-2 flex justify-end">
                        <button className="text-sm text-gray-500 flex items-center">
                          <ThumbsUp className="h-3 w-3 mr-1" /> {comment.likes}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-500 py-4">아직 댓글이 없습니다.</p>
              )}
              
              <div className="mt-4">
                <div className="flex">
                  <Input 
                    placeholder="댓글을 작성하세요"
                    className="flex-1"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <Button 
                    onClick={handleAddComment}
                    className="ml-2 bg-estate-blue hover:bg-estate-dark-blue"
                  >
                    등록
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Create post modal */}
      <Dialog open={isCreateModalOpen} onOpenChange={setIsCreateModalOpen}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>새 글 작성</DialogTitle>
            <DialogDescription>
              커뮤니티에 새로운 글을 작성해보세요.
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleCreatePost}>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="w-1/3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">카테고리</label>
                  <select 
                    className="w-full border rounded-md px-3 py-2"
                    value={newPost.category}
                    onChange={(e) => setNewPost({...newPost, category: e.target.value})}
                  >
                    <option value="질문/답변">질문/답변</option>
                    <option value="정보공유">정보공유</option>
                    <option value="팁/노하우">팁/노하우</option>
                    <option value="경험담">경험담</option>
                  </select>
                </div>
                
                <div className="w-2/3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">제목</label>
                  <Input
                    type="text"
                    placeholder="제목을 입력하세요"
                    value={newPost.title}
                    onChange={(e) => setNewPost({...newPost, title: e.target.value})}
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">내용</label>
                <textarea
                  className="w-full border rounded-md px-3 py-2 h-60 resize-none"
                  placeholder="내용을 입력하세요"
                  value={newPost.content}
                  onChange={(e) => setNewPost({...newPost, content: e.target.value})}
                  required
                ></textarea>
              </div>
              
              <div className="flex justify-end gap-2">
                <Button 
                  type="button" 
                  variant="outline"
                  onClick={() => setIsCreateModalOpen(false)}
                >
                  취소
                </Button>
                <Button type="submit" className="bg-estate-blue hover:bg-estate-dark-blue">
                  등록하기
                </Button>
              </div>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Community;
