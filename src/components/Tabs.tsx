'use client'

import { Tab, Tabs } from '@heroui/react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { useEffect } from 'react'
import { useTranslations } from 'next-intl'
import { Home, FileText } from 'lucide-react'

const MainTabs = () => {
  const segment = useSelectedLayoutSegment()
  const pathname = segment ? `/${segment}` : '/'
  const t = useTranslations('Tabs')

  const tabs = [
    {
      title: t('home'),
      href: '/',
      icon: <Home size={18} />,
    },
    {
      title: t('about'),
      href: '/about',
      icon: <FileText size={18} />,
    },
  ]

  useEffect(() => {
    console.log('pathname', pathname)
  }, [pathname])

  return (
    <Tabs
      aria-label="Options"
      color="primary"
      variant="bordered"
      radius="full"
      selectedKey={pathname}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.href}
          href={tab.href}
          as={Link}
          title={
            <div className="flex items-center space-x-2">
              {tab.icon}
              <span>{tab.title}</span>
            </div>
          }
        />
      ))}
    </Tabs>
  )
}

export default MainTabs
