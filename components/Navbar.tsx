import * as Tabs from '@radix-ui/react-tabs'
import { Button, cx } from '@vechaiui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

interface Tab {
  link: string
  name: string
}

const tabs: Tab[] = [
  {
    link: '/',
    name: 'Home',
  },
  {
    link: 'profile',
    name: 'Profile',
  },
]

export default function Navbar() {
  const router = useRouter()
  const [isOtherSelected, changeSelected] = useState(false)

  const clickTab = () => changeSelected(true)

  return (
    <div className="flex justify-between w-screen py-4">
      <Tabs.Root className="flex flex-col mx-12" defaultValue="">
        <Tabs.List className="flex flex-row justify-start">
          {tabs.map((tab, index) => (
            <Link href={tab.link} key={index} passHref>
              <Tabs.Trigger
                onClick={clickTab}
                value={tab.name}
                className={cx(
                  'px-3 py-2 -mb-px text-sm text-center whitespace-nowrap focus:outline-none cursor-pointer',
                  'flex-shrink-0 inline-block rounded-md',
                  'text-neutral-600 bg-transparent',
                  'hover:text-neutral-900',
                  router.pathname === tab.link && !isOtherSelected
                    ? 'text-neutral-900 bg-neutral-200'
                    : 'selected:text-neutral-900 selected:bg-neutral-200'
                )}
              >
                {tab.name}
              </Tabs.Trigger>
            </Link>
          ))}
        </Tabs.List>
      </Tabs.Root>

      <div className="flex gap-4 mx-6">
        <Link href="/auth/login" passHref>
          <Button color="primary" className="cursor-pointer">
            Login
          </Button>
        </Link>
        <Link href="/auth/register" passHref>
          <Button color="primary" variant="solid" className="cursor-pointer">
            Register
          </Button>
        </Link>
      </div>
    </div>
  )
}
