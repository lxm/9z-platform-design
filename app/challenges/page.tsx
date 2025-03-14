import Link from 'next/link'
import { FiFilter, FiSearch, FiTag, FiAward, FiClock, FiUsers } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// 模拟题目数据
const challenges = [
  {
    id: 1,
    title: 'SQL注入基础',
    category: 'Web安全',
    difficulty: '初级',
    points: 100,
    solvedCount: 1245,
    tags: ['SQL注入', 'Web'],
    description: '学习SQL注入的基础知识，并利用漏洞获取管理员密码。'
  },
  {
    id: 2,
    title: 'XSS攻击实战',
    category: 'Web安全',
    difficulty: '中级',
    points: 200,
    solvedCount: 876,
    tags: ['XSS', 'JavaScript', 'Web'],
    description: '在目标网站上执行跨站脚本攻击，并获取用户Cookie。'
  },
  {
    id: 3,
    title: '简单的逆向工程',
    category: '逆向工程',
    difficulty: '初级',
    points: 150,
    solvedCount: 654,
    tags: ['逆向', '二进制'],
    description: '分析一个简单的二进制文件，找出隐藏的密码。'
  },
  {
    id: 4,
    title: 'RSA密码破解',
    category: '密码学',
    difficulty: '高级',
    points: 350,
    solvedCount: 321,
    tags: ['密码学', 'RSA', '数学'],
    description: '分析并破解一个存在弱点的RSA加密实现。'
  },
  {
    id: 5,
    title: '内存取证分析',
    category: '数字取证',
    difficulty: '中级',
    points: 250,
    solvedCount: 432,
    tags: ['取证', '内存分析'],
    description: '分析内存转储文件，找出恶意软件的痕迹和行为。'
  },
  {
    id: 6,
    title: '缓冲区溢出利用',
    category: '二进制漏洞利用',
    difficulty: '高级',
    points: 400,
    solvedCount: 198,
    tags: ['缓冲区溢出', '漏洞利用', '二进制'],
    description: '利用缓冲区溢出漏洞获取程序的执行权限。'
  },
]

// 难度等级对应的颜色
const difficultyColors = {
  '初级': 'bg-green-100 text-green-800',
  '中级': 'bg-yellow-100 text-yellow-800',
  '高级': 'bg-red-100 text-red-800'
}

export default function Challenges() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* 页面标题 */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">题目资源库</h1>
          <p className="text-xl max-w-3xl">
            浏览我们丰富的网络安全题目库，涵盖Web安全、密码学、逆向工程等多个领域，提升您的安全技能。
          </p>
        </div>
      </section>
      
      {/* 筛选和搜索 */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-grow max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiSearch className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                placeholder="搜索题目..."
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <FiFilter className="mr-2 h-4 w-4" />
                筛选
              </button>
              
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                <option>所有类别</option>
                <option>Web安全</option>
                <option>密码学</option>
                <option>逆向工程</option>
                <option>二进制漏洞利用</option>
                <option>数字取证</option>
              </select>
              
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                <option>所有难度</option>
                <option>初级</option>
                <option>中级</option>
                <option>高级</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* 题目列表 */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600">
                      <Link href={`/challenges/${challenge.id}`}>
                        {challenge.title}
                      </Link>
                    </h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${difficultyColors[challenge.difficulty]}`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {challenge.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {challenge.tags.map((tag, index) => (
                      <span key={index} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        <FiTag className="mr-1 h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <FiAward className="mr-1 h-4 w-4 text-primary-500" />
                      <span>{challenge.points} 分</span>
                    </div>
                    <div className="flex items-center">
                      <FiUsers className="mr-1 h-4 w-4 text-gray-400" />
                      <span>{challenge.solvedCount} 人解决</span>
                    </div>
                    <div className="flex items-center">
                      <span className="inline-block bg-primary-600 text-white text-xs px-2 py-1 rounded">
                        {challenge.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-6 py-4">
                  <Link 
                    href={`/challenges/${challenge.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    查看详情 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* 分页 */}
          <div className="mt-10 flex justify-center">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">上一页</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="#"
                aria-current="page"
                className="z-10 bg-primary-50 border-primary-500 text-primary-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                1
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                2
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700">
                ...
              </span>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                8
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                9
              </a>
              <a
                href="#"
                className="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              >
                10
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <span className="sr-only">下一页</span>
                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 