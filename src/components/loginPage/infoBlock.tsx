import Logo from '../logo'

const InfoBlock = () => {
  return (
    <div className="relative">
      <img
        className="w-full h-full"
        src="public\img\loginPage\Mask group.png"
        alt=""
      />
      <img
        className="loginpage-img1"
        src="public\img\loginPage\1.png"
        alt=""
      />
      <img
        className="loginpage-img2"
        src="public\img\loginPage\2.png"
        alt=""
      />
      <img
        className="loginpage-img3"
        src="public\img\loginPage\3.png"
        alt=""
      />
      <div className="loginpage-logo">
        <Logo isBlack />
      </div>
      <span className="font-extrabold text-32 loginpage-info">
        Lorem ipsum dolor sit amet consectetur adipiscing elit
      </span>
    </div>
  )
}

export default InfoBlock
