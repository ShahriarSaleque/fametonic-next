import Image from "next/image"

const ImageContent = () => {
  return (
    <div className="md:absolute z-[1] end-0 top-0">
      <Image src="/hero.png" alt="Mobile Image" width={666} height={679} />
    </div>
  )
}

export default ImageContent
