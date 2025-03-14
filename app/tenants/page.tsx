import Link from 'next/link'
import { FiSearch, FiFilter, FiUsers, FiCalendar, FiAward, FiPlus } from 'react-icons/fi'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

// 模拟租户数据
const tenants = [
  {
    id: 1,
    name: '安全学院',
    logo: 'https://via.placeholder.com/150/3B82F6/FFFFFF?text=SA',
    description: '专注于网络安全教育的在线学院，提供各类安全课程和实践环境。',
    memberCount: 1245,
    competitionCount: 32,
    challengeCount: 256,
    createdAt: '2022-05-15',
    type: 'education'
  },
  {
    id: 2,
    name: 'SecureCorp',
    logo: 'https://via.placeholder.com/150/10B981/FFFFFF?text=SC',
    description: '企业安全培训平台，为员工提供网络安全意识和技能培训。',
    memberCount: 876,
    competitionCount: 18,
    challengeCount: 124,
    createdAt: '2022-07-22',
    type: 'corporate'
  },
  {
    id: 3,
    name: '网络安全协会',
    logo: 'https://via.placeholder.com/150/6366F1/FFFFFF?text=CSA',
    description: '由安全专业人士组成的社区，定期举办安全竞赛和交流活动。',
    memberCount: 532,
    competitionCount: 24,
    challengeCount: 198,
    createdAt: '2022-03-10',
    type: 'community'
  },
  {
    id: 4,
    name: '计算机学院',
    logo: 'https://via.placeholder.com/150/F59E0B/FFFFFF?text=CS',
    description: '高校计算机学院的网络安全实验平台，为学生提供实践环境。',
    memberCount: 687,
    competitionCount: 12,
    challengeCount: 156,
    createdAt: '2022-09-05',
    type: 'education'
  },
  {
    id: 5,
    name: 'CyberDefense',
    logo: 'https://via.placeholder.com/150/EF4444/FFFFFF?text=CD',
    description: '专注于网络防御技术的培训和竞赛平台，提供真实环境的攻防演练。',
    memberCount: 423,
    competitionCount: 15,
    challengeCount: 132,
    createdAt: '2022-11-18',
    type: 'corporate'
  },
  {
    id: 6,
    name: '安全极客社区',
    logo: 'https://via.placeholder.com/150/8B5CF6/FFFFFF?text=SG',
    description: '由安全爱好者组成的开放社区，分享安全知识，举办各类CTF比赛。',
    memberCount: 789,
    competitionCount: 28,
    challengeCount: 215,
    createdAt: '2022-02-25',
    type: 'community'
  }
]

// 租户类型对应的颜色
const typeColors = {
  education: 'bg-blue-100 text-blue-800',
  corporate: 'bg-green-100 text-green-800',
  community: 'bg-purple-100 text-purple-800'
}

// 租户类型对应的中文
const typeNames = {
  education: '教育机构',
  corporate: '企业',
  community: '社区'
}

export default function Tenants() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* 页面标题 */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">租户空间</h1>
              <p className="text-xl max-w-3xl">
                浏览平台上的各类租户，或创建您自己的专属空间，举办私有竞赛，管理您的团队。
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link 
                href="/tenants/create" 
                className="btn bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg inline-flex items-center"
              >
                <FiPlus className="mr-2" />
                创建租户
              </Link>
            </div>
          </div>
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
                placeholder="搜索租户..."
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500">
                <FiFilter className="mr-2 h-4 w-4" />
                筛选
              </button>
              
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                <option>所有类型</option>
                <option>教育机构</option>
                <option>企业</option>
                <option>社区</option>
              </select>
              
              <select className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm rounded-md">
                <option>按创建时间排序</option>
                <option>按成员数量排序</option>
                <option>按竞赛数量排序</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* 租户列表 */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tenants.map((tenant) => (
              <div key={tenant.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 h-12 w-12 rounded-md overflow-hidden">
                      <img 
                        src={tenant.logo} 
                        alt={tenant.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900 hover:text-primary-600">
                        <Link href={`/tenants/${tenant.id}`}>
                          {tenant.name}
                        </Link>
                      </h3>
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColors[tenant.type]}`}>
                        {typeNames[tenant.type]}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {tenant.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="text-center p-2 bg-gray-50 rounded-md">
                      <div className="flex items-center justify-center text-gray-500 mb-1">
                        <FiUsers className="h-4 w-4 mr-1" />
                      </div>
                      <div className="text-lg font-semibold text-gray-700">{tenant.memberCount}</div>
                      <div className="text-xs text-gray-500">成员</div>
                    </div>
                    
                    <div className="text-center p-2 bg-gray-50 rounded-md">
                      <div className="flex items-center justify-center text-gray-500 mb-1">
                        <FiAward className="h-4 w-4 mr-1" />
                      </div>
                      <div className="text-lg font-semibold text-gray-700">{tenant.competitionCount}</div>
                      <div className="text-xs text-gray-500">竞赛</div>
                    </div>
                    
                    <div className="text-center p-2 bg-gray-50 rounded-md">
                      <div className="flex items-center justify-center text-gray-500 mb-1">
                        <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div className="text-lg font-semibold text-gray-700">{tenant.challengeCount}</div>
                      <div className="text-xs text-gray-500">题目</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <FiCalendar className="mr-1 h-4 w-4 text-gray-400" />
                    <span>创建于 {tenant.createdAt}</span>
                  </div>
                </div>
                
                <div className="bg-gray-50 px-6 py-4">
                  <Link 
                    href={`/tenants/${tenant.id}`}
                    className="text-primary-600 hover:text-primary-700 font-medium"
                  >
                    访问租户 →
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
      
      {/* 创建租户介绍 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">创建您自己的租户空间</h2>
            <p className="text-xl text-gray-600 mb-8">
              无论您是教育机构、企业还是安全社区，都可以创建自己的专属空间，定制专属的学习和竞赛环境。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary-600 text-4xl font-bold mb-2">01</div>
                <h3 className="text-xl font-semibold mb-3">注册账户</h3>
                <p className="text-gray-600">
                  创建您的个人账户，完成身份验证，准备创建租户。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary-600 text-4xl font-bold mb-2">02</div>
                <h3 className="text-xl font-semibold mb-3">提交申请</h3>
                <p className="text-gray-600">
                  填写租户信息，选择套餐，提交租户创建申请。
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="text-primary-600 text-4xl font-bold mb-2">03</div>
                <h3 className="text-xl font-semibold mb-3">开始使用</h3>
                <p className="text-gray-600">
                  申请通过后，您可以立即开始配置和使用您的租户空间。
                </p>
              </div>
            </div>
            
            <Link 
              href="/tenants/create" 
              className="btn btn-primary py-3 px-8 text-lg"
            >
              立即创建租户
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 