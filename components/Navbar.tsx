import FametonicLogo from "@/assets/FameTonicLogo"
import Button from "@/components/Button"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const router = useRouter()

  return (
    <div className="w-full bg-bgColorBlack overflow-hidden">
      <div className="mx-auto px-5 max-w-[1200px]">
        <nav className="w-full flex items-center justify-between relative mt-4 md:mt-9">
          <div className="flex-1 flex justify-center md:justify-start">
            <div className="w-[108px] md:w-[174px] h-[46px] md:h-[74px] shrink-0 flex items-center">
              <FametonicLogo />
            </div>
          </div>

          <div className="hidden md:flex justify-center items-end gap-4 md:gap-10">
            <Button label="About us" onClick={() => router.push("/about")} />
            <Button label="Contact" onClick={() => router.push("/contact")} />
          </div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-20"
            aria-label="Open menu"
          >
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white mb-1"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </nav>
      </div>
    </div>
  )
}

export default Navbar
