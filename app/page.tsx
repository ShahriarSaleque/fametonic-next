"use client"

import FeatureList from "@/components/FeatureList"
import Navbar from "@/components/Navbar"
import PromotionalBanner from "@/components/PromotionalBanner"
import { featureList } from "@/lib/const"
import moment from "moment"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#010101] h-[860px]">
      {/* Promotional Banner */}
      <PromotionalBanner />

      {/* Nav content */}
      <Navbar />

      {/* Main Content */}
      <div className="w-full gap-0 bg-[#010101] overflow-hidden">
        <div className="gap-0 py-0 px-5 mb-3 md:mb-0 mx-auto max-w-[1200px]">
          <div className="flex gap-0 flex-col md:flex-row relative text-white">
            <div className="w-full relative">
              <div className="md:absolute z-[1] end-0 -top-40">
                <Image
                  src="/mobile.png"
                  alt="Mobile Image"
                  width={666}
                  height={679}
                />
              </div>
              <div className="relative z-[2] flex flex-col justify-center min-h-0 w-full md:min-h-[679px] md:w-[45%]">
                {/* Content section */}
                <div className="flex flex-col items-start self-stretch lg:max-w-none max-w-[516px] flex-1 gap-[30px] mt-[57px]">
                  <div>
                    <div className="mb-4">
                      <div className="text-white font-urbanist text-[28px] sm:text-[35px] font-bold leading-normal self-stretch">
                        Want to Turn Social Media Into a Profitable Career?
                      </div>
                      <div className="text-[#00E7F9] font-urbanist text-[28px] sm:text-[35px] font-bold leading-normal self-stretch [text-shadow:0px_4px_4px_#FC004E]">
                        Discover your way to success with Fametonic:
                      </div>
                    </div>
                    {/* Features List */}
                    <FeatureList featureList={featureList} />
                  </div>

                  {/* CTA Section */}
                  <div className="flex flex-col items-center">
                    <button className="flex justify-center items-center gap-[10px] px-[40px] py-2 align-self-stretch rounded-[10px] bg-[#FC004E] shadow-[2px_2px_10px_0px_#00E7F9] w-full sm:w-[313px] h-[60px]">
                      <div className="flex items-center gap-[10px]">
                        <span className="text-white font-figtree text-[20px] not-italic font-bold leading-normal">
                          GET STARTED
                        </span>
                      </div>
                    </button>
                    <p className="text-white self-stretch text-center font-figtree text-xs not-italic font-normal leading-[16px] mt-[10px]">
                      1-minute quiz for personalized Insights
                    </p>
                  </div>

                  {/* Footer Text */}
                  <div className="flex flex-col gap-3">
                    <p className="text-[#ABABAB] self-stretch font-figtree text-xs not-italic font-medium leading-normal">
                      By clicking &quot;Get Started&quot;, you agree with Terms
                      and Conditions, Privacy Policy, Subscription Terms
                    </p>
                    <p className="text-[#ABABAB] self-stretch font-figtree text-[10px] not-italic font-medium leading-normal">
                      Fametonic {moment().format("YYYY")} ©All Rights Reserved.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
