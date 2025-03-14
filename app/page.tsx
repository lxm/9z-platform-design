import Image from 'next/image'
import Link from 'next/link'
import { FiShield, FiUsers, FiAward, FiDatabase, FiLock } from 'react-icons/fi'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* 英雄区域 */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              网络安全竞赛平台
            </h1>
            <p className="text-xl mb-8">
              为网络安全爱好者、学生和专业人士提供一个学习和竞赛的环境。
              通过实践提升您的网络安全技能，参与挑战，赢得比赛。
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link href="/register" className="btn bg-white text-primary-600 hover:bg-gray-100 font-semibold text-center py-3 px-6 rounded-lg">
                免费注册
              </Link>
              <Link href="/challenges" className="btn border border-white text-white hover:bg-white/10 font-semibold text-center py-3 px-6 rounded-lg">
                浏览题目
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-full max-w-lg h-80">
              <div className="absolute top-0 left-0 w-full h-full bg-white/10 rounded-lg transform rotate-3"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-white/20 rounded-lg transform -rotate-3"></div>
              <div className="relative bg-dark-800 rounded-lg shadow-xl p-6 w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <FiShield className="mx-auto h-20 w-20 text-primary-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">安全挑战平台</h3>
                  <p className="text-gray-300">实践是最好的学习方式</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 特点区域 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">平台特点</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们的平台提供全面的功能，帮助您提升网络安全技能，组织和参与竞赛。
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <FiUsers className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">多租户支持</h3>
              <p className="text-gray-600">
                机构、学校或企业可以创建自己的租户空间，举办私有竞赛，管理自己的用户和题目。
              </p>
            </div>
            
            <div className="card hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <FiDatabase className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">丰富的题目库</h3>
              <p className="text-gray-600">
                包含Web安全、密码学、逆向工程、二进制漏洞利用等多种类型的题目，满足不同水平的学习需求。
              </p>
            </div>
            
            <div className="card hover:shadow-lg transition-shadow">
              <div className="rounded-full bg-primary-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
                <FiAward className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">竞赛管理</h3>
              <p className="text-gray-600">
                创建、管理和参与各类网络安全竞赛，支持不同的竞赛模式和计分规则。
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 租户介绍 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">为您的组织创建专属空间</h2>
              <p className="text-xl text-gray-600 mb-6">
                无论是教育机构、企业还是安全社区，都可以创建自己的租户空间，定制专属的学习和竞赛环境。
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">自定义品牌和界面</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">管理用户和权限</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">创建私有题目和竞赛</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">详细的数据分析和报告</p>
                </li>
              </ul>
              <div className="mt-8">
                <Link href="/tenants/create" className="btn btn-primary py-3 px-6">
                  创建租户
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute -bottom-8 right-4 w-72 h-72 bg-secondary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 -left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <div className="bg-white rounded-lg shadow-lg p-8 m-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="bg-primary-600 rounded-full w-10 h-10 flex items-center justify-center">
                          <FiLock className="text-white" />
                        </div>
                        <h3 className="ml-3 text-lg font-semibold">安全学院</h3>
                      </div>
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">活跃</span>
                    </div>
                    <div className="space-y-2 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">用户</span>
                        <span className="font-medium">128</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">竞赛</span>
                        <span className="font-medium">12</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">题目</span>
                        <span className="font-medium">245</span>
                      </div>
                    </div>
                    <div className="bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary-600 h-full rounded-full" style={{ width: '75%' }}></div>
                    </div>
                    <div className="text-right text-xs text-gray-500 mt-1">存储空间: 75%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 号召性用语 */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">准备好提升您的网络安全技能了吗？</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            立即加入我们的平台，参与挑战，与全球安全爱好者一起学习和竞争。
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/register" className="btn bg-white text-primary-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg">
              免费注册
            </Link>
            <Link href="/tenants/create" className="btn border border-white text-white hover:bg-white/10 font-semibold py-3 px-8 rounded-lg">
              创建租户
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  )
} 