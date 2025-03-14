import Link from 'next/link'
import { FiCalendar, FiClock, FiUsers, FiAward, FiSearch, FiFilter } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// 模拟竞赛数据
const competitions = [
  {
    id: 1,
    title: '网络安全新手挑战赛',
    organizer: '安全学院',
    startDate: '2023-12-15T09:00:00',
    endDate: '2023-12-17T18:00:00',
    participantsCount: 256,
    format: 'Jeopardy',
    status: 'upcoming',
    description: '为网络安全初学者设计的入门级CTF比赛，涵盖Web安全、密码学和基础逆向工程等领域。',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
  },
  {
    id: 2,
    title: '企业安全防御挑战',
    organizer: 'SecureCorp',
    startDate: '2023-12-20T10:00:00',
    endDate: '2023-12-22T17:00:00',
    participantsCount: 128,
    format: 'Attack-Defense',
    status: 'upcoming',
    description: '模拟企业网络环境的攻防对抗赛，参赛者需要保护自己的系统并攻击对手系统。',
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
  },
  {
    id: 3,
    title: '高校网络安全联赛',
    organizer: '教育部网络安全教学委员会',
    startDate: '2024-01-10T09:00:00',
    endDate: '2024-01-12T18:00:00',
    participantsCount: 512,
    format: 'Jeopardy',
    status: 'upcoming',
    description: '面向全国高校学生的网络安全竞赛，旨在选拔和培养网络安全人才。',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
  },
  {
    id: 4,
    title: '移动安全挑战赛',
    organizer: 'MobileSec',
    startDate: '2023-11-25T10:00:00',
    endDate: '2023-11-27T18:00:00',
    participantsCount: 187,
    format: 'Jeopardy',
    status: 'completed',
    description: '专注于移动应用安全的CTF比赛，包括Android和iOS平台的安全挑战。',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
  },
  {
    id: 5,
    title: '区块链安全大赛',
    organizer: 'BlockSec',
    startDate: '2023-12-05T09:00:00',
    endDate: '2023-12-07T18:00:00',
    participantsCount: 156,
    format: 'Jeopardy',
    status: 'ongoing',
    description: '聚焦区块链和智能合约安全的专业竞赛，挑战参赛者发现和利用区块链系统中的漏洞。',
    image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
  },
  {
    id: 6,
    title: '工业控制系统安全挑战',
    organizer: 'ICS-CERT',
    startDate: '2024-02-15T09:00:00',
    endDate: '2024-02-17T18:00:00',
    participantsCount: 98,
    format: 'Attack-Defense',
    status: 'upcoming',
    description: '针对工业控制系统安全的专业竞赛，模拟工业环境中的安全威胁和防御措施。',
    image: 'https://images.unsplash.com/photo-1581092921461-39b9d08a9b21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
  }
]

// 状态对应的颜色和文本
const statusConfig = {
  upcoming: {
    color: 'bg-blue-100 text-blue-800',
    text: '即将开始'
  },
  ongoing: {
    color: 'bg-green-100 text-green-800',
    text: '进行中'
  },
  completed: {
    color: 'bg-gray-100 text-gray-800',
    text: '已结束'
  }
}

// 格式化日期
function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

export default function Competitions() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* 页面标题 */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-4">网络安全竞赛</h1>
          <p className="text-xl max-w-3xl">
            参与各类网络安全竞赛，挑战自我，提升技能，与全球安全专家同台竞技。
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
                placeholder="搜索竞赛..."
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <FiFilter className="mr-2 h-4 w-4" />
                筛选
              </button>
              
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                <option>所有状态</option>
                <option>即将开始</option>
                <option>进行中</option>
                <option>已结束</option>
              </select>
              
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                <option>所有格式</option>
                <option>Jeopardy</option>
                <option>Attack-Defense</option>
                <option>King of the Hill</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* 竞赛列表 */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competitions.map((competition) => (
              <div key={competition.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={competition.image} 
                    alt={competition.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[competition.status].color}`}>
                      {statusConfig[competition.status].text}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600 mb-2">
                    <Link href={`/competitions/${competition.id}`}>
                      {competition.title}
                    </Link>
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-2">
                    主办方: {competition.organizer}
                  </p>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {competition.description}
                  </p>
                  
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <FiCalendar className="mr-2 h-4 w-4 text-gray-400" />
                      <span>开始: {formatDate(competition.startDate)}</span>
                    </div>
                    <div className="flex items-center">
                      <FiClock className="mr-2 h-4 w-4 text-gray-400" />
                      <span>结束: {formatDate(competition.endDate)}</span>
                    </div>
                    <div className="flex items-center">
                      <FiUsers className="mr-2 h-4 w-4 text-gray-400" />
                      <span>参与人数: {competition.participantsCount}</span>
                    </div>
                    <div className="flex items-center">
                      <FiAward className="mr-2 h-4 w-4 text-gray-400" />
                      <span>比赛形式: {competition.format}</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-6 py-4 flex justify-between items-center">
                  <Link 
                    href={`/competitions/${competition.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    查看详情
                  </Link>
                  
                  {competition.status === 'upcoming' && (
                    <button className="btn btn-primary py-1 px-4 text-sm">
                      报名参赛
                    </button>
                  )}
                  
                  {competition.status === 'ongoing' && (
                    <button className="btn btn-secondary py-1 px-4 text-sm">
                      进入比赛
                    </button>
                  )}
                  
                  {competition.status === 'completed' && (
                    <Link 
                      href={`/competitions/${competition.id}/scoreboard`}
                      className="text-secondary-600 hover:text-secondary-700 font-medium"
                    >
                      查看排行榜
                    </Link>
                  )}
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