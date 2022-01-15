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
  reactathonServerlessCta,
  pricingHeader,
  pricingSubheader,
  pricingHeaderText
} from '../../../assets/data/home/pricing.json'
import SectionTitle from '../../Home/SectionTitle'

const Pricing = () => {
  return (
    <div className="tailwind">
      <div className="">
        <div className="px-4 md800:pl-24 xl:pr-2.5">
          <div className="">
            <SectionTitle text={pricingHeader} className='title-speakers' />
            <div className="text-lg leading-7 opacity-80 leading-8 font-normal">
              <p>{pricingSubheader[0]}</p>
              <p className="mb-4">{pricingSubheader[1]}</p>
              {pricingHeaderText.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>

        <div className="bg-white pb-12 xl:pb-24">
          <div className="relative z-0 pt-12 xl:pt-24">
            <div className="absolute inset-0 h-5/6 xl:h-3/5" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 xl:px-11">
              <div className="relative xl:grid xl:grid-cols-7">

                <div className="mx-auto max-w-md xl:mx-0 xl:max-w-none xl:col-start-1 xl:col-end-3 xl:row-start-2 xl:row-end-3">
                  <div className="border border-summer_sky xl:border-r-0 h-full flex flex-col rounded-md shadow-xl overflow-hidden xl:rounded-none xl:rounded-l-lg">
                    <div className="flex-1 flex flex-col">
                      <div className="bg-white px-4 xl:px-2 py-8 xl:py-10">
                        <div>
                          <h3 className="text-center text-xl tracking-tight font-medium text-gray-900 xl:text-2xl xl:font-medium xl:tracking-wide" id="tier-hobby">{reactathonTitle}</h3>
                          <div className="mt-1 flex items-center justify-center xl:mb-1">
                            <span className="px-3 flex items-start text-4_5xl tracking-tight text-gray-900">
                              <span className="mt-4 mr-2 text-3xl font-medium xl:text-4xl">$</span>
                              <span className="font-extrabold xl:text-5_5xl">{reactathonPrice}</span>
                            </span>
                          </div>
                          <div className="text-center font-medium">
                            <p className="text-gray-500 xl:text-xl">{subPriceNote}</p>
                            <p className="text-sm text-gray-400 xl:text-base">{subPriceNoteGA}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-8 xl:py-10 xl:px-10">
                        <ul role="list" className="space-y-3 xl:space-y-4">
                          {reactathonFeatures.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <div className="flex-shrink-0">
                                <CheckIcon className="flex-shrink-0 h-6 w-6 text-summer_sky" aria-hidden="true" />
                              </div>
                              <p className="ml-3 text-sm xl:text-base font-medium text-gray-500 max-w-13">{feature}</p>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 xl:mt-8">
                          <div className="rounded-lg shadow-md">
                            <Link
                              isExternal="true"
                              href={reactathonCta.href}
                              target="_blank"
                              className="block w-full text-center rounded-md xl:rounded-lg border border-transparent bg-white text-wild_watermelon px-6 py-3 text-sm xl:text-base font-medium hover:bg-gray-50"
                              text={reactathonCta.text}
                            />
                          </div>
                          <p className="mt-6 xl:mt-7 text-center text-gray-500 xl:text-xl">{subBtnNote}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 max-w-lg mx-auto xl:mt-0 xl:max-w-none xl:mx-0 xl:col-start-3 xl:col-end-6 xl:row-start-1 xl:row-end-4">
                  <div className="relative z-10 rounded-md xl:rounded-lg shadow-xl">
                    <div
                      className="pointer-events-none absolute inset-0 rounded-lg border-2 border-wild_watermelon"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-x-0 top-0 transform translate-y-px">
                      <div className="flex justify-center transform -translate-y-1/2">
                        <span className="inline-flex rounded-full bg-wild_watermelon px-4 py-1 text-sm xl:text-lg xl:leading-6 font-semibold tracking-wider uppercase text-white">
                          Make it full stack!
                        </span>
                      </div>
                    </div>
                    <div className="bg-white rounded-t-lg px-6 xl:px-14 2xl:px-12 pt-10 xl:pt-12 pb-10 xl:pb-12">
                      <div>
                        <h3 className="text-center text-2xl xl:text-3xl font-semibold text-gray-900" id="reactathon_serverless-growth">
                          {reactathonServerlessTitle}
                        </h3>
                        <div className="mt-4 mb-1 flex items-start justify-center">
                          <span className="px-1 mt-4 flex items-start text-2xl tracking-tight text-gray-900 price-linetrough">
                            <span className="mr-1 mt-1 text-base leading-7 font-medium xl:text-xl">$</span>
                            <span className="font-extrabold text-gray-500 xl:text-3xl">{reactathonServerlessPriceOld}</span>
                          </span>
                          <span className="px-3 flex items-start text-4_5xl tracking-tight text-gray-900">
                            <span className="mt-4 mr-2 text-3xl font-medium xl:text-4xl">$</span>
                            <span className="font-extrabold xl:text-5_5xl">{reactathonServerlessPrice}</span>
                          </span>
                        </div>
                        <div className="text-center font-medium">
                          <p className="text-gray-500 xl:text-xl">{subPriceNote}</p>
                          <p className="text-sm text-gray-400 uppercase xl:text-base">{subPriceNoteGAFull}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t-2 border-gray-100 rounded-b-lg py-8 px-6 bg-gray-50 xl:px-10 xl:pt-10 xl:pb-8">
                      <ul role="list" className="space-y-3 xl:space-y-4">
                        {reactathonServerlessFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 h-6 w-6 text-summer_sky" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-sm xl:text-base font-medium text-gray-500">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7 xl:mt-10">
                        <div className="rounded-lg shadow-md">
                          <Link
                            isExternal="true"
                            href={reactathonServerlessCta.href}
                            className="block w-full text-center rounded-md xl:rounded-lg border border-transparent bg-wild_watermelon px-6 py-2 text-lg xl:text-xl xl:leading-10 font-medium text-white hover:bg-wild_watermelon_dark"
                            target="_blank"
                            text={reactathonServerlessCta.text}
                          />
                        </div>
                        <p className="mt-7 xl:mt-9 text-center text-gray-500 xl:text-lg">{subBtnNoteFull}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 mx-auto max-w-md xl:m-0 xl:max-w-none xl:col-start-6 xl:col-end-8 xl:row-start-2 xl:row-end-3">
                  <div className="border border-summer_sky xl:border-l-0 h-full flex flex-col rounded-md shadow-xl overflow-hidden xl:rounded-none xl:rounded-r-lg">
                    <div className="flex-1 flex flex-col">
                      <div className="bg-white px-4 xl:px-2 py-8 xl:py-10">
                        <div>
                          <h3 className="text-center text-xl tracking-tight font-medium text-gray-900 xl:text-2xl xl:font-medium" id="tier-hobby">{serverlessTitle}</h3>
                          <div className="mt-1 flex items-center justify-center xl:mb-1">
                            <span className="px-3 flex items-start text-4_5xl tracking-tight text-gray-900">
                              <span className="mt-4 mr-2 text-3xl font-medium xl:text-4xl">$</span>
                              <span className="font-extrabold xl:text-5_5xl">{serverlessPrice}</span>
                            </span>
                          </div>
                          <div className="text-center font-medium">
                            <p className="text-gray-500 xl:text-xl">{subPriceNote}</p>
                            <p className="text-sm text-gray-400 xl:text-base">{subPriceNoteGA}</p>
                          </div>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-8 xl:py-10 xl:px-10">
                        <ul role="list" className="space-y-3 xl:space-y-4">
                          {serverlessFeatures.map((feature) => (
                            <li key={feature} className="flex items-start">
                              <div className="flex-shrink-0">
                                <CheckIcon className="flex-shrink-0 h-6 w-6 text-summer_sky" aria-hidden="true" />
                              </div>
                              <p className="ml-3 text-sm xl:text-base font-medium text-gray-500 max-w-13">{feature}</p>
                            </li>
                          ))}
                        </ul>
                        <div className="mt-5 xl:mt-8">
                          <div className="rounded-lg shadow-md">
                            <Link
                              isExternal="true"
                              href={serverlessCta.href}
                              target="_blank"
                              className="block w-full text-center rounded-md xl:rounded-lg border border-transparent bg-white text-wild_watermelon px-6 py-3 text-sm xl:text-base font-medium hover:bg-gray-50"
                              text={serverlessCta.text}
                            />
                          </div>
                          <p className="mt-6 xl:mt-7 text-center text-gray-500 xl:text-lg">{subBtnNote}</p>
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
