const PromotionalBanner = () => {
  return (
    <div className="flex w-full py-3.5 px-4 justify-center items-center gap-[10px] bg-gradient-to-r from-redPrimaryAccent to-blueishAccent">
      <div className="font-figtree text-[22px] font-extrabold">
        <span>🚀 </span>
        <span className="text-bannerTextColor">FRESH BEGINNINGS SALE: </span>
        <span className="text-white ">
          Extra 25% OFF, Limited Spots - start your journey today!
        </span>
      </div>
    </div>
  )
}

export default PromotionalBanner
