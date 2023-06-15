const Logo = ({ isBlack = false }: { isBlack?: boolean }) => {
  return (
    <div
      className={` text-2xl font-black ${
        isBlack ? 'text-text' : ' text-main'
      } `}
    >
      LOGO
    </div>
  )
}

export default Logo
