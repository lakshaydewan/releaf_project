import React from 'react'
import { PinContainer } from './pin'

const PinComponent = () => {
  return (
    <>
    <div className="flex justify-center py-16 bg-custom-radial w-[30vw] pr-3 border border-white">
        <div className="w-[356px] h-[353px]">
        <PinContainer
        title="/ui.aceternity.com"
        href="https://twitter.com/mannupaaji"
        containerClassName="w-[300px] ml-[16px]"
      >
        <div className="">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
        </div>
        </div>
      </PinContainer>
        </div>
        </div>
    </>
  )
}

export default PinComponent