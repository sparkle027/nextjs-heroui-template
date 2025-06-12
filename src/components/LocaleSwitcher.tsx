import { useRouter, usePathname } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from '@heroui/react'
import { Languages, Globe } from 'lucide-react'

const locales = [
  { code: 'zh', label: '简体中文', abbr: '中文' },
  { code: 'en', label: 'English', abbr: 'EN' },
]

const LocaleSwitcher = () => {
  const router = useRouter()
  const pathname = usePathname()
  const locale = useLocale()

  const handleLocaleChange = (code: string) => {
    if (code !== locale) {
      const segments = pathname.split('/')
      if (locales.some((l) => l.code === segments[1])) {
        segments[1] = code
      } else {
        segments.splice(1, 0, code)
      }
      router.push(segments.join('/'))
    }
  }

  const getLocaleLabel = (code: string) => {
    return locales.find((l) => l.code === code)?.abbr || code.toUpperCase()
  }

  return (
    <Dropdown className="min-w-max">
      <DropdownTrigger>
        <Button variant="light">
          <Languages size={18} className="mr-1" />
          <span>{getLocaleLabel(locale)}</span>
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Select language" selectionMode="single" selectedKeys={[locale]}>
        {locales.map((l) => (
          <DropdownItem key={l.code} onClick={() => handleLocaleChange(l.code)}>
            {l.label}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default LocaleSwitcher
