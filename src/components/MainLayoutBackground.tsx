import Image from 'next/image'
import DocLeftImage from '@/assets/images/docs-left.png'
import DocRightImage from '@/assets/images/docs-right.png'

export default function DocsBackground() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed -bottom-[40%] -left-[20%] z-0 hidden dark:opacity-70 dark:md:block"
      >
        <Image
          src={DocLeftImage.src}
          width={DocLeftImage.width}
          height={DocLeftImage.height}
          className="relative z-10 rounded-large opacity-0 shadow-none shadow-black/5 !duration-300 transition-transform-opacity data-[loaded=true]:opacity-100 motion-reduce:transition-none"
          alt="docs left background"
          data-loaded="true"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed -right-[60%] -top-[80%] z-0 hidden rotate-12 dark:opacity-70 dark:md:block 2xl:-right-[45%] 2xl:-top-[60%]"
      >
        <Image
          src={DocRightImage.src}
          width={DocRightImage.width}
          height={DocRightImage.height}
          className="relative z-10 rounded-large opacity-0 shadow-none shadow-black/5 !duration-300 transition-transform-opacity data-[loaded=true]:opacity-100 motion-reduce:transition-none"
          alt="docs right background"
          data-loaded="true"
        />
      </div>
    </>
  )
}
