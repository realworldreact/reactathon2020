import React from 'react'
import Link from '../../Link'
import './index.css'
import { CheckIcon } from '@heroicons/react/outline'

import {
  reactathonFeatures,
  serverlessFeatures,
  reactathonServerlessFeatures,
  reactathonTitle,
  serverlessTitle,
  reactathonServerlessTitle,
  reactathonPrice,
  serverlessPrice,
  reactathonServerlessPrice,
  reactathonServerlessPriceOld,
  subBtnNote,
  subBtnNoteFull,
  subPriceNote,
  subPriceNoteGA,
  subPriceNoteGAFull,
  reactathonCta,
  serverlessCta,
  reactathonServerlessCta
} from '../../../assets/data/home/pricing.json'

const Pricing = () => {
  return (
    <div className="tailwind">
      <div className="bg-gray-9">
        <div className="bg-white pb-12 lg:pb-24">
          <div className="relative z-0 pt-12 lg:pt-24">
            <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-3/5" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-11">
              <div className="relative lg:grid lg:grid-cols-7">

                <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                  <div className="h-full flex flex-col rounded-md shadow-xl overflow-hidden lg:rounded-none lg:rounded-l-md">
                    <div className="flex-1 flex flex-col">
                      <div className="bg-white px-4 py-8">
                        <div>
                          <h3 className="text-center text-xl tracking-tight font-medium text-gray-900" id="tier-hobby">{reactathonTitle}</h3>
                          <div className="mt-1 flex items-center justify-center">
                          <span className="px-3 flex items-start text-4_5xl tracking-tight text-gray-900">
                            <span className="mt-3 mr-2 text-3xl font-medium">$</span>
                            <span className="font-extrabold">{reactathonPrice}</span>
                          </span>
                          </div>
                          <div className="text-center font-medium">
                            <p className="text-gray-500">{subPriceNote}</p>
                            <p className="text-sm text-gray-400">{subPriceNoteGA}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:py-8 xl:px-7">
                        <ul role="list" className="space-y-3">
                          {reactathonFeatures.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <div className="flex-shrink-0">
                                <CheckIcon className="flex-shrink-0 h-5 w-5 text-summer_sky" aria-hidden="true" />
                              </div>
                              <p className="ml-2 text-sm font-medium text-gray-500 max-w-13">{feature}</p>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5">
                          <div className="rounded-lg shadow-md">
                            <Link
                              isExternal="true"
                              href={reactathonCta.href}
                              target="_blank"
                              className="block w-full text-center rounded-md border border-transparent bg-white text-wild_watermelon px-6 py-3 text-sm font-medium hover:bg-gray-50"
                              text={reactathonCta.text}
                            />
                          </div>
                          <p className="mt-6 text-center text-gray-500">{subBtnNote}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                  <div className="relative z-10 rounded-md shadow-xl">
                    <div
                      className="pointer-events-none absolute inset-0 rounded-lg border-2 border-wild_watermelon"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 top-0 transform translate-y-px">
                      <div className="flex justify-center transform -translate-y-1/2">
                      <span className="inline-flex rounded-full bg-wild_watermelon px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                        Make it full stack!
                      </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-t-lg px-6 lg:px-14 2xl:px-12 pt-10 pb-10">
                      <div>
                        <h3 className="text-center text-2xl font-semibold text-gray-900" id="reactathon_serverless-growth">
                          {reactathonServerlessTitle}
                        </h3>
                        <div className="mt-3 flex items-start justify-center">
                        <span className="px-1 mt-3 flex items-start text-2xl tracking-tight text-gray-900 price-linetrough">
                          <span className="mr-1 text-base leading-7 font-medium">$</span>
                          <span className="font-extrabold text-gray-500">{reactathonServerlessPriceOld}</span>
                        </span>
                          <span className="px-3 flex items-start text-4_5xl tracking-tight text-gray-900">
                          <span className="mt-2 mr-2 text-3xl font-medium">$</span>
                          <span className="font-extrabold">{reactathonServerlessPrice}</span>
                        </span>
                        </div>
                        <div className="text-center font-medium">
                          <p className="text-gray-500">{subPriceNote}</p>
                          <p className="text-sm text-gray-400 uppercase">{subPriceNoteGAFull}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t-2 border-gray-100 rounded-b-lg py-8 px-6 bg-gray-50 sm:px-8 sm:pt-6 sm:pb-8">
                      <ul role="list" className="space-y-3">
                        {reactathonServerlessFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 h-5 w-5 text-summer_sky" aria-hidden="true" />
                            </div>
                            <p className="ml-2 text-sm font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7">
                        <div className="rounded-lg shadow-md">
                          <Link
                            isExternal="true"
                            href={reactathonServerlessCta.href}
                            className="block w-full text-center rounded-md border border-transparent bg-wild_watermelon px-6 py-2 text-lg font-medium text-white hover:bg-wild_watermelon_dark"
                            target="_blank"
                            text={reactathonServerlessCta.text}
                          />
                        </div>
                        <p className="mt-7 text-center text-gray-500">{subBtnNoteFull}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                  <div className="h-full flex flex-col rounded-md shadow-xl overflow-hidden lg:rounded-none lg:rounded-r-lg">
                    <div className="flex-1 flex flex-col">
                      <div className="bg-white px-4 py-8">
                        <div>
                          <h3 className="text-center text-xl tracking-tight font-medium text-gray-900" id="tier-hobby">{serverlessTitle}</h3>
                          <div className="mt-1 flex items-center justify-center">
                          <span className="px-3 flex items-start text-4_5xl tracking-tight text-gray-900">
                            <span className="mt-3 mr-2 text-3xl font-medium">$</span>
                            <span className="font-extrabold">{serverlessPrice}</span>
                          </span>
                          </div>
                          <div className="text-center font-medium">
                            <p className="text-gray-500">{subPriceNote}</p>
                            <p className="text-sm text-gray-400">{subPriceNoteGA}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:py-8 xl:px-7">
                        <ul role="list" className="space-y-3">
                          {serverlessFeatures.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <div className="flex-shrink-0">
                                <CheckIcon className="flex-shrink-0 h-5 w-5 text-summer_sky" aria-hidden="true" />
                              </div>
                              <p className="ml-2 text-sm font-medium text-gray-500 max-w-13">{feature}</p>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5">
                          <div className="rounded-lg shadow-md">
                            <Link
                              isExternal="true"
                              href={serverlessCta.href}
                              target="_blank"
                              className="block w-full text-center rounded-md border border-transparent bg-white text-wild_watermelon px-6 py-3 text-sm font-medium hover:bg-gray-50"
                              text={serverlessCta.text}
                            />
                          </div>
                          <p className="mt-6 text-center text-gray-500">{subBtnNote}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
