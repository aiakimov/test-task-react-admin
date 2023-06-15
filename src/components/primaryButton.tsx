const PrimaryButton = ({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <button
      className={`${className} w-full bg-main text-white hover:bg-opacity-90 transition-all py-3 rounded-lg`}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
