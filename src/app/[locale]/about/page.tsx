'use client'

import React from 'react'
import { Link } from '@heroui/react'

type AboutProps = {
  title?: string
  description?: string
}

const About: React.FC<AboutProps> = () => {
  return (
    <main>
      <div className="container mt-14 inline-flex flex-col pb-10">
        <h1 className="text-2xl">Why the change?</h1>

        <p className="mt-4">
          When we started NextUI, our mission was to create not only the most beautiful UI library
          but also one that fully supported all the latest Next.js features. The name "NextUI"
          aligned perfectly with this initial vision. We played a significant role in enriching the
          Next.js ecosystem, giving developers more options and high-quality components to build
          their applications with Next.js and its latest features, including Server Components.
        </p>
        <p className="mt-4">
          This journey led us to create
          <Link
            color="foreground"
            href="https://www.tailwind-variants.org/"
            underline="always"
            className="font-semibold mx-1"
          >
            tailwind-variants
          </Link>
          and migrate our entire
          <Link
            color="foreground"
            href="https://v1.nextui.org/"
            underline="always"
            className="font-semibold mx-1"
          >
            v1 codebase
          </Link>
          to Tailwind CSS , always pursuing our vision of being the best UI library for Next.js.
        </p>
        <p className="mt-4">
          However, as we grew, we realized our core mission had expanded: we want to help not just
          Next.js developers, but the entire React ecosystem build fast and beautiful applications,
          regardless of their design experience. We've since added support for other React
          frameworks like
          <Link
            color="foreground"
            href="https://astro.build/"
            underline="always"
            className="font-semibold mx-1"
          >
            Astro
          </Link>
          ,
          <Link
            color="foreground"
            href="https://remix.run/"
            underline="always"
            className="font-semibold mx-1"
          >
            Remix
          </Link>
          ,
          <Link
            color="foreground"
            href="https://vite.dev/"
            underline="always"
            className="font-semibold mx-1"
          >
            Vite
          </Link>
          , and
          <Link
            color="foreground"
            href="https://laravel.com/"
            underline="always"
            className="font-semibold mx-1"
          >
            Laravel
          </Link>
          . Looking ahead, we aim to expand beyond web development into other ecosystems like
          <Link
            color="foreground"
            href="https://reactnative.dev/"
            underline="always"
            className="font-semibold mx-1"
          >
            React Native
          </Link>
          .
        </p>
        <p className="mt-4">
          Additionally, we want to avoid any confusion about our library being created or maintained
          by the Next.js team. HeroUI better reflects our independent identity and broader mission.
        </p>
      </div>
    </main>
  )
}

export default About
