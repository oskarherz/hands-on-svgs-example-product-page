import * as React from 'react';

import { classNames } from '@headlessui/react/dist/utils/class-names';

import { ConsoleInput } from './ui/ConsoleInput';
import { Hero } from './components/Hero';
import { GithubIcon } from './ui/GithubIcon';
import { NpmIcon } from './ui/NpmIcon';

export function App() {
  return (
    <div
      className={classNames(
        'App',
        'w-full h-full flex flex-col justify-center items-center',
        'bg-gray-100'
      )}
    >
      <Hero>
        <div className="px-4 md:px-8 xl:px-16">
          <div className="my-24 sm:my-32 mx-auto lg:mx-0 md:max-w-2xl lg:max-w-3xl text-center lg:text-left transition-all">
            <h2
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, .4)' }}
              className="mb-3 text-3xl sm:text-5xl xl:text-6xl text-indigo-50 tracking-tight"
            >
              Let me tell you about our latest{' '}
              <span className="font-bold text-indigo-300">big thing.</span>
            </h2>
            <h3
              style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, .4)' }}
              className="text-indigo-700 xl:text-xl"
            >
              Everything just became incredibly easy.
            </h3>
          </div>

          <div className="max-w-lg mx-auto py-10">
            <ConsoleInput
              text={
                <span className="opacity-90">
                  <span className="text-indigo-800 mr-2">npm</span>
                  <span className="text-indigo-200 mr-2">install</span>
                  <span className="text-indigo-50">big-thing@latest</span>
                </span>
              }
            />
            <div className="flex items-center justify-center mt-6 space-x-4">
              <GithubIcon className="opacity-30 hover:opacity-100 text-indigo-200 cursor-pointer w-8 h-8" />
              <NpmIcon className="opacity-30 hover:opacity-100 cursor-pointer text-indigo-200 w-8 h-8 pt-2" />
            </div>
          </div>
        </div>
      </Hero>

      <div className="fixed bottom-0 bg-white w-full h-16 shadow-xl"></div>
    </div>
  );
}
