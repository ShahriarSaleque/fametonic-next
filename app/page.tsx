"use client"

import FametonicLogo from "@/assets/FameTonicLogo"
import Button from "@/components/Button"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  return (
    <main className="min-h-screen w-full bg-[#010101]">
      {/* Promotional Banner */}
      <div className="flex w-full py-[10px] px-[200px] justify-center items-center gap-[10px] bg-gradient-to-r from-redPrimaryAccent to-blueishAccent">
        <div className="font-figtree text-[22px] font-extrabold">
          <span>🚀 </span>
          <span className="text-bannerTextColor">FRESH BEGINNINGS SALE: </span>
          <span className="text-white ">
            Extra 25% OFF, Limited Spots - start your journey today!
          </span>
        </div>
      </div>

      {/* Nav content */}
      <nav className="mt-[35px] max-w-[1490px] flex px-[211px] py-0 justify-between items-start">
        <div className="w-[174px] h-[74px] shrink-0">
          <FametonicLogo />
        </div>
        <div className="flex justify-center items-end gap-[40px]">
          <Button label="About us" onClick={() => router.push("/about")} />
          <Button label="Contact" onClick={() => router.push("/contact")} />
        </div>
      </nav>
    </main>
  )
}
