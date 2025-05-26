"use client"

import MainContent from "@/components/MainContent"
import Navbar from "@/components/Navbar"
import PromotionalBanner from "@/components/PromotionalBanner"

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-bgColorBlack h-[860px]">
      {/* Promotional Banner */}
      <PromotionalBanner />

      {/* Nav content */}
      <Navbar />

      {/* Main Content */}
      <MainContent />
    </main>
  )
}
