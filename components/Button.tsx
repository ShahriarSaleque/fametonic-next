const Button = ({ label, onClick }: ButtonProps) => {
  return (
    <button
      className="text-navButtonColor text-center font-figtree text-[18px] font-semibold"
      onClick={onClick}
    >
      {label}
    </button>
  )
}

type ButtonProps = {
  label: string
  onClick?: () => void
}

export default Button
