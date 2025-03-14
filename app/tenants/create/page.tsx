'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FiArrowLeft, FiCheck, FiX } from 'react-icons/fi'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

// 租户类型选项
const tenantTypes = [
  {
    id: 'education',
    name: '教育机构',
    description: '适合学校、培训机构等教育组织',
    icon: (
      <svg className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    )
  },
  {
    id: 'corporate',
    name: '企业',
    description: '适合公司、企业安全团队等组织',
    icon: (
      <svg className="h-8 w-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    )
  },
  {
    id: 'community',
    name: '社区',
    description: '适合安全社区、开源组织等',
    icon: (
      <svg className="h-8 w-8 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
]

// 套餐选项
const plans = [
  {
    id: 'basic',
    name: '基础版',
    price: '¥299',
    period: '每月',
    description: '适合小型组织和初创团队',
    features: [
      '最多 50 名用户',
      '最多 10 场同时进行的竞赛',
      '100 个题目存储空间',
      '基础数据分析',
      '标准客户支持',
      '社区论坛访问权限'
    ],
    notIncluded: [
      '自定义域名',
      '高级数据分析',
      '优先客户支持',
      'API 访问权限'
    ],
    recommended: false
  },
  {
    id: 'pro',
    name: '专业版',
    price: '¥699',
    period: '每月',
    description: '适合中型组织和专业团队',
    features: [
      '最多 200 名用户',
      '最多 30 场同时进行的竞赛',
      '500 个题目存储空间',
      '高级数据分析',
      '优先客户支持',
      '社区论坛访问权限',
      '自定义域名',
      'API 访问权限'
    ],
    notIncluded: [
      '无限用户',
      '专属客户经理',
      '自定义集成'
    ],
    recommended: true
  },
  {
    id: 'enterprise',
    name: '企业版',
    price: '¥1999',
    period: '每月',
    description: '适合大型组织和企业',
    features: [
      '无限用户',
      '无限竞赛',
      '无限题目存储空间',
      '高级数据分析和报告',
      '24/7 专属客户支持',
      '社区论坛访问权限',
      '自定义域名',
      'API 访问权限',
      '专属客户经理',
      '自定义集成',
      '单点登录 (SSO)',
      '高级安全功能'
    ],
    notIncluded: [],
    recommended: false
  }
]

export default function CreateTenant() {
  const [step, setStep] = useState(1)
  const [tenantType, setTenantType] = useState('')
  const [selectedPlan, setSelectedPlan] = useState('')
  const [formData, setFormData] = useState({
    tenantName: '',
    tenantSlug: '',
    description: '',
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    logoUrl: '',
    agreeTerms: false
  })
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target
    setFormData({
      ...formData,
      [name]: checked
    })
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 这里处理创建租户的逻辑
    console.log({ tenantType, selectedPlan, ...formData })
    // 提交成功后跳转到下一步
    setStep(4)
  }
  
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow bg-gray-50 py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <Link href="/tenants" className="inline-flex items-center text-primary-600 hover:text-primary-700">
              <FiArrowLeft className="mr-2" />
              返回租户列表
            </Link>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">创建租户</h1>
              <p className="text-lg text-gray-600">
                创建您自己的租户空间，定制专属的学习和竞赛环境。
              </p>
            </div>
            
            {/* 步骤指示器 */}
            <div className="mb-10">
              <div className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  1
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 2 ? 'bg-primary-600' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  2
                </div>
                <div className={`flex-1 h-1 mx-2 ${step >= 3 ? 'bg-primary-600' : 'bg-gray-200'}`}></div>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full ${step >= 3 ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-600'}`}>
                  3
                </div>
              </div>
              <div className="flex justify-between mt-2">
                <div className="text-center w-10">
                  <span className={`text-sm ${step >= 1 ? 'text-primary-600' : 'text-gray-500'}`}>类型</span>
                </div>
                <div className="text-center w-10">
                  <span className={`text-sm ${step >= 2 ? 'text-primary-600' : 'text-gray-500'}`}>套餐</span>
                </div>
                <div className="text-center w-10">
                  <span className={`text-sm ${step >= 3 ? 'text-primary-600' : 'text-gray-500'}`}>信息</span>
                </div>
              </div>
            </div>
            
            {/* 步骤 1: 选择租户类型 */}
            {step === 1 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-6">选择租户类型</h2>
                <p className="text-gray-600 mb-8">
                  请选择最适合您组织的租户类型，这将帮助我们为您提供最合适的功能和服务。
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {tenantTypes.map((type) => (
                    <div
                      key={type.id}
                      className={`border rounded-lg p-6 cursor-pointer transition-all ${
                        tenantType === type.id
                          ? 'border-primary-600 ring-2 ring-primary-200'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                      onClick={() => setTenantType(type.id)}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>{type.icon}</div>
                        {tenantType === type.id && (
                          <div className="bg-primary-600 text-white rounded-full p-1">
                            <FiCheck className="h-4 w-4" />
                          </div>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold mb-2">{type.name}</h3>
                      <p className="text-gray-600 text-sm">{type.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-end">
                  <button
                    className="btn btn-primary py-2 px-6"
                    onClick={() => setStep(2)}
                    disabled={!tenantType}
                  >
                    下一步
                  </button>
                </div>
              </div>
            )}
            
            {/* 步骤 2: 选择套餐 */}
            {step === 2 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-6">选择套餐</h2>
                <p className="text-gray-600 mb-8">
                  请选择适合您需求的套餐，您可以随时升级或降级您的套餐。
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`border rounded-lg overflow-hidden transition-all ${
                        plan.recommended ? 'relative' : ''
                      } ${
                        selectedPlan === plan.id
                          ? 'border-primary-600 ring-2 ring-primary-200'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      {plan.recommended && (
                        <div className="bg-primary-600 text-white text-xs font-semibold py-1 px-3 text-center">
                          推荐
                        </div>
                      )}
                      
                      <div className="p-6 cursor-pointer" onClick={() => setSelectedPlan(plan.id)}>
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-lg font-semibold">{plan.name}</h3>
                          {selectedPlan === plan.id && (
                            <div className="bg-primary-600 text-white rounded-full p-1">
                              <FiCheck className="h-4 w-4" />
                            </div>
                          )}
                        </div>
                        
                        <div className="mb-4">
                          <span className="text-3xl font-bold">{plan.price}</span>
                          <span className="text-gray-500 ml-1">{plan.period}</span>
                        </div>
                        
                        <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                        
                        <ul className="space-y-2 mb-4">
                          {plan.features.map((feature, index) => (
                            <li key={index} className="flex items-start">
                              <FiCheck className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                          
                          {plan.notIncluded.map((feature, index) => (
                            <li key={index} className="flex items-start text-gray-400">
                              <FiX className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                        <button
                          className={`w-full py-2 px-4 rounded-md font-medium ${
                            selectedPlan === plan.id
                              ? 'bg-primary-600 text-white'
                              : 'bg-white border border-gray-300 text-gray-700'
                          }`}
                          onClick={() => setSelectedPlan(plan.id)}
                        >
                          {selectedPlan === plan.id ? '已选择' : '选择套餐'}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between">
                  <button
                    className="btn btn-outline py-2 px-6"
                    onClick={() => setStep(1)}
                  >
                    上一步
                  </button>
                  <button
                    className="btn btn-primary py-2 px-6"
                    onClick={() => setStep(3)}
                    disabled={!selectedPlan}
                  >
                    下一步
                  </button>
                </div>
              </div>
            )}
            
            {/* 步骤 3: 填写租户信息 */}
            {step === 3 && (
              <div className="bg-white rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-semibold mb-6">填写租户信息</h2>
                <p className="text-gray-600 mb-8">
                  请填写您的租户信息，这些信息将用于创建您的租户空间。
                </p>
                
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="tenantName" className="block text-sm font-medium text-gray-700 mb-1">
                          租户名称 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="tenantName"
                          name="tenantName"
                          className="input"
                          required
                          value={formData.tenantName}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="tenantSlug" className="block text-sm font-medium text-gray-700 mb-1">
                          租户标识 <span className="text-red-500">*</span>
                        </label>
                        <div className="flex rounded-md shadow-sm">
                          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 sm:text-sm">
                            cyberctf.com/
                          </span>
                          <input
                            type="text"
                            id="tenantSlug"
                            name="tenantSlug"
                            className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-gray-300 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
                            required
                            value={formData.tenantSlug}
                            onChange={handleInputChange}
                          />
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          这将是您租户的URL，只能包含小写字母、数字和连字符。
                        </p>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                        租户描述
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        className="input"
                        value={formData.description}
                        onChange={handleInputChange}
                      ></textarea>
                      <p className="mt-1 text-xs text-gray-500">
                        简要描述您的租户，这将显示在租户列表和您的租户主页上。
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-1">
                          联系人姓名 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="contactName"
                          name="contactName"
                          className="input"
                          required
                          value={formData.contactName}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                          联系人邮箱 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="contactEmail"
                          name="contactEmail"
                          className="input"
                          required
                          value={formData.contactEmail}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700 mb-1">
                          联系电话
                        </label>
                        <input
                          type="tel"
                          id="contactPhone"
                          name="contactPhone"
                          className="input"
                          value={formData.contactPhone}
                          onChange={handleInputChange}
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700 mb-1">
                          Logo URL
                        </label>
                        <input
                          type="url"
                          id="logoUrl"
                          name="logoUrl"
                          className="input"
                          placeholder="https://example.com/logo.png"
                          value={formData.logoUrl}
                          onChange={handleInputChange}
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          您的租户Logo的URL地址，建议使用正方形图片。
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="agreeTerms"
                          name="agreeTerms"
                          type="checkbox"
                          className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
                          required
                          checked={formData.agreeTerms}
                          onChange={handleCheckboxChange}
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="agreeTerms" className="font-medium text-gray-700">
                          我同意租户
                          <Link href="/terms" className="text-primary-600 hover:text-primary-500 mx-1">
                            服务条款
                          </Link>
                          和
                          <Link href="/privacy" className="text-primary-600 hover:text-primary-500 mx-1">
                            隐私政策
                          </Link>
                        </label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex justify-between">
                    <button
                      type="button"
                      className="btn btn-outline py-2 px-6"
                      onClick={() => setStep(2)}
                    >
                      上一步
                    </button>
                    <button
                      type="submit"
                      className="btn btn-primary py-2 px-6"
                    >
                      创建租户
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {/* 步骤 4: 创建成功 */}
            {step === 4 && (
              <div className="bg-white rounded-lg shadow-md p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FiCheck className="h-8 w-8 text-green-600" />
                </div>
                
                <h2 className="text-2xl font-semibold mb-4">租户创建成功！</h2>
                <p className="text-gray-600 mb-8">
                  您的租户已成功创建，我们正在为您准备环境，这可能需要几分钟时间。
                </p>
                
                <div className="bg-gray-50 rounded-lg p-6 mb-8 max-w-md mx-auto">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">租户名称:</span>
                    <span className="font-semibold">{formData.tenantName}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">租户URL:</span>
                    <span className="font-semibold">cyberctf.com/{formData.tenantSlug}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">套餐:</span>
                    <span className="font-semibold">{plans.find(p => p.id === selectedPlan)?.name}</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <Link href={`/tenants/${formData.tenantSlug}`} className="btn btn-primary py-2 px-6">
                    访问租户
                  </Link>
                  <Link href="/dashboard" className="btn btn-outline py-2 px-6">
                    返回仪表盘
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  )
} 