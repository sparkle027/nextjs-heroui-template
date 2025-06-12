'use client'

import React from 'react'
import MainTabs from '@/components/Tabs'
import { Avatar } from '@heroui/react'
import LocaleSwitcher from '@/components/LocaleSwitcher'

const TopNav: React.FC = () => {
  return (
    <header className="sticky top-0 z-20 flex h-16 w-full items-center bg-black/30 px-5 py-2 backdrop-blur-xl backdrop-saturate-150">
      <div className="mr-auto text-2xl font-bold">Sparkle AI</div>
      <MainTabs />
      <div className="ml-auto flex items-center space-x-4">
        <div className="ml-4">
          <LocaleSwitcher />
        </div>
        <Avatar
          isBordered
          radius="full"
          src="https://i.pravatar.cc/150?u=a04258114e29026708c"
          size="sm"
        />
      </div>
    </header>
  )
}

export default TopNav
