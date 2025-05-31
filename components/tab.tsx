import type { Tab as TabType } from '@/app/types'
import { cn } from '@/lib/utils'

export function Tab({
  tabs,
  value,
  handleTabChange
}: {
  tabs: TabType[]
  value: string
  handleTabChange: (tab: string) => void
}) {
  return (
    <div className="flex w-fit cursor-pointer gap-[60px] border-b border-b-[#86868b] py-[13px] text-[28px] font-semibold text-[#86868b]">
      {tabs.map((tab) => (
        <div
          className={cn('clip-text-hover', {
            ['clip-text']: value === tab.value
          })}
          key={tab.value}
          onClick={() => handleTabChange(tab.value)}
        >
          {tab.label}
          <span
            className={cn({
              ['relative top-[14px] block h-px w-full bg-[#f5f5f7]']:
                value === tab.value
            })}
          ></span>
        </div>
      ))}
    </div>
  )
}
