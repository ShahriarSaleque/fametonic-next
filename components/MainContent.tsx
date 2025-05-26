import ImageContent from "./ImageContent"
import TextContent from "./TextContent"

const MainContent = () => {
  return (
    <div className="w-full gap-0 bg-bgColorBlack overflow-hidden">
      <div className="gap-0 py-0 px-5 mb-3 md:mb-0 mx-auto max-w-[1200px]">
        <div className="flex gap-0 flex-col md:flex-row relative text-white">
          <div className="w-full relative">
            <ImageContent />
            <TextContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainContent
