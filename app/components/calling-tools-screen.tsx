import { ScrollItemWrapper } from '@/components/scroll-item-wrapper'
import { Tab } from '@/components/tab'
import { useState } from 'react'
import { MbpProfile } from './mbp-profile'

export function CallingToolsScreen() {
  const [value, setValue] = useState('weather')
  return (
    <ScrollItemWrapper className="">
      <div className="pl-22">
        <p className="mb-2 text-xl font-semibold">Built-in Tools</p>
        <p className="subsection-headline mb-15">Link AI with realities.</p>
        <p className='text-[#86868b] text-xl font-semibold'>
          Several intelligent tools are seamlessly integrated to bring AI
          closer to the real world — whether you&apos;re checking the weather,
          planning routes, finding places, or searching the web. Built on
          powerful architecture, these built-in features work effortlessly with
          Exodus, unlocking a new level of real-time interaction and
          productivity.
        </p>
      </div>
      <div className="flex flex-col items-center mt-20">
        <MbpProfile src="/mbp-profile/google-maps-routing-light.jpg" />
        <Tab
          value={value}
          handleTabChange={setValue}
          tabs={[
            {
              label: 'Weather',
              value: 'weather'
            },
            {
              label: 'Routings',
              value: 'routings'
            },
            {
              label: 'Placings',
              value: 'placings'
            },
            {
              label: 'Web Search',
              value: 'webSearch'
            }
          ]}
        />
      </div>
    </ScrollItemWrapper>
  )
}
