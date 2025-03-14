import Link from 'next/link'
import { FiShield, FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-dark-800 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <FiShield className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">CyberCTF</span>
            </div>
            <p className="mt-4 text-gray-400">
              一个支持多租户的网络安全竞赛SAAS平台，为网络安全爱好者、学生和专业人士提供学习和竞赛环境。
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <FiGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiTwitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <FiLinkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">平台</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">关于我们</Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-400 hover:text-white">价格</Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white">博客</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">联系我们</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">资源</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/documentation" className="text-gray-400 hover:text-white">文档</Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-gray-400 hover:text-white">教程</Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">常见问题</Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white">支持</Link>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">法律</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white">服务条款</Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white">隐私政策</Link>
              </li>
              <li>
                <Link href="/security" className="text-gray-400 hover:text-white">安全</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© {new Date().getFullYear()} CyberCTF. 保留所有权利。</p>
        </div>
      </div>
    </footer>
  )
} 