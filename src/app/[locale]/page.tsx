'use client'

import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@heroui/react'
import { useTranslations } from 'next-intl'
// import { Link } from '@/i18n/navigation'

export default function HomePage() {
  const t = useTranslations('Landing')

  return (
    <div className="flex flex-1 h-full w-full items-center justify-center">
      <Card className="w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt={t('logoAlt')}
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">HeroUI</p>
            <p className="text-small text-default-500">heroui.com</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p>{t('desc')}</p>
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://github.com/heroui-inc/heroui">
            {t('visitSource')}
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}
