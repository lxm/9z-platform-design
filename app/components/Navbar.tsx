'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiMenu, FiX, FiShield, FiUser } from 'react-icons/fi'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <FiShield className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-dark-800">CyberCTF</span>
            </Link>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              <Link href="/" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-dark-700 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600">
                首页
              </Link>
              <Link href="/challenges" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-dark-700 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600">
                题目库
              </Link>
              <Link href="/competitions" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-dark-700 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600">
                竞赛
              </Link>
              <Link href="/tenants" className="inline-flex items-center px-1 pt-1 text-sm font-medium text-dark-700 hover:text-primary-600 border-b-2 border-transparent hover:border-primary-600">
                租户
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="/login" className="btn btn-outline flex items-center">
              <FiUser className="mr-2" />
              登录
            </Link>
            <Link href="/register" className="btn btn-primary">
              注册
            </Link>
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-700 hover:text-primary-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            >
              <span className="sr-only">打开菜单</span>
              {isMenuOpen ? (
                <FiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link href="/" className="block pl-3 pr-4 py-2 text-base font-medium text-dark-700 hover:text-primary-600 hover:bg-gray-50">
              首页
            </Link>
            <Link href="/challenges" className="block pl-3 pr-4 py-2 text-base font-medium text-dark-700 hover:text-primary-600 hover:bg-gray-50">
              题目库
            </Link>
            <Link href="/competitions" className="block pl-3 pr-4 py-2 text-base font-medium text-dark-700 hover:text-primary-600 hover:bg-gray-50">
              竞赛
            </Link>
            <Link href="/tenants" className="block pl-3 pr-4 py-2 text-base font-medium text-dark-700 hover:text-primary-600 hover:bg-gray-50">
              租户
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center px-4 space-x-3">
              <Link href="/login" className="btn btn-outline w-full flex justify-center">
                登录
              </Link>
              <Link href="/register" className="btn btn-primary w-full flex justify-center">
                注册
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 