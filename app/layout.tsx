import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '网络安全竞赛平台 | CyberCTF',
  description: '一个支持多租户的网络安全竞赛SAAS平台，为网络安全爱好者、学生和专业人士提供学习和竞赛环境',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 