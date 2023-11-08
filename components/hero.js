import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Button from './button'
import Divider from './divider'
import Image from 'next/image'


export default function Example() {

  return (
    <section className="bg-white h-auto xl:h-[540px] flex items-center">
            <div className="mx-auto max-w-7xl py-4 px-4 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl uppercase mb-4">
                  Megoldásaink segítik a mindennapokat
                  </h1>
                  <Divider />
                  <p className="relative mt-6 text-3xl leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    Üzleti domain kialakításával egyedi szoftvermegoldásokat készítünk 
                  </p>
                  <div className="mt-10 w-full flex-col gap-4 lg:space-x-2 space-y-4 xl:flex-row items-center">
                    <Button type="filled" style="primary" size="spacious">Ismerd meg szoláltatásainkat </Button>
                    <Button type="outlined" style="primaryOutlined" size="spacious">Módszereinket </Button>
                  </div>
                </div>
                <div className="w-full">
                      <Image
                        src="/images/icell-hero-landing.png"
                        alt=""
                        className="w-[610px] H-[470px]"
                        width={610}
                        height={470}
                        />
                </div>
              </div>
            </div>
    </section>
  )
}
