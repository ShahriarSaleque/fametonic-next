import moment from "moment"

const Footer = () => {
  return (
    <>
      <p className="text-footerTextColor self-stretch font-figtree text-xs not-italic font-medium leading-normal">
        By clicking &quot;Get Started&quot;, you agree with Terms and
        Conditions, Privacy Policy, Subscription Terms
      </p>
      <p className="text-footerTextColor self-stretch font-figtree text-[10px] not-italic font-medium leading-normal">
        Fametonic {moment().format("YYYY")} ©All Rights Reserved.
      </p>
    </>
  )
}

export default Footer
