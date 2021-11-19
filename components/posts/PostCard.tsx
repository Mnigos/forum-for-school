import { Disclosure } from '@headlessui/react'
import { cx } from '@vechaiui/react'
import React from 'react'

interface PostCardProps {
  title: string
  body: string
}

export default function PostCard({ title, body }: PostCardProps) {
  return (
    <div className="flex flex-col gap-4 p-8 bg-gray-100  rounded-xl">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={cx(
                'flex items-center justify-between w-full px-4 py-2 rounded-base cursor-pointer focus:outline-none',
                'bg-primary-50 text-primary-800'
              )}
            >
              <span className="text-xl font-bold">{title}</span>
              <span>
                <div
                  className={cx(
                    'w-4 h-4 transition-transform duration-500 ease-in-out',
                    open ? 'transform rotate-90' : 'transform -rotate-90'
                  )}
                >
                  {'>'}
                </div>
              </span>
            </Disclosure.Button>

            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-muted">
              {body}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
