import { cn } from '@/lib/utils'
import Image from 'next/image'

export function MbpProfile({
  src,
  className
}: {
  src: string
  className?: string
}) {
  return (
    <section className={cn('flex justify-center', className)}>
      <section className="h-[592px] w-[966px] bg-[url(/mbp-profile/pro_apps_hw__frh21b8n63qu_large_2x.jpg)] bg-cover">
        <section className="h-full w-full mask-[url(/mbp-profile/pro_apps_hw_mask__ezhtlfoq256q_large_2x.png)] mask-contain mask-center mask-no-repeat">
          <Image
            width={790}
            height={510}
            className="relative top-[15px] block rounded-tl-lg rounded-tr-lg ltr:[left:calc(50%_-_395px)]"
            src={src}
            alt="DeepResearchDark"
          />
        </section>
      </section>
    </section>
  )
}
