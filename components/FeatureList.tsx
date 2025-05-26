const FeatureList = ({ featureList }: FeatureListProps) => {
  return (
    <div className="flex flex-col gap-[10px] md:gap-[13px]">
      {featureList?.map((text, index) => (
        <div key={index} className="flex items-center gap-[10px]">
          <span className="text-white text-center font-nunito text-[22px] not-italic font-medium leading-normal">
            ✨
          </span>
          <p className="text-white font-figtree text-[16px] not-italic font-semibold leading-[22px] flex-1">
            {text}
          </p>
        </div>
      ))}
    </div>
  )
}

type FeatureListProps = {
  featureList: string[]
}
export default FeatureList
