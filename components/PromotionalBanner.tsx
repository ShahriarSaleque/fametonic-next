const PromotionalBanner = () => {
  return (
    <div className="flex w-full py-5 px-5 md:px-4 md:py-3.5 justify-center items-center gap-[10px] bg-gradient-to-r from-redPrimaryAccent to-blueishAccent">
      <div className="font-figtree font-extrabold">
        <span>🚀 </span>
        <span className="text-bannerTextColor text-[16px] md:text-[22px]">
          FRESH BEGINNINGS SALE:{" "}
        </span>
        <span className="text-white text-[14px] md:text-[22px]">
          Extra 25% OFF, Limited Spots - start your journey today!
        </span>
      </div>
    </div>
  )
}

export default PromotionalBanner
