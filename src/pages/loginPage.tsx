import InfoBlock from '../components/loginPage/infoBlock'
import LoginForm from '../components/loginPage/loginForm'
import Container from '../layout/container'

const MyLoginPage = () => {
  return (
    <Container>
      <div className="w-full flex h-screen ">
        <div className="flex flex-col w-50-p py-28.5 px-28">
          <div className="w-96">
            <div className="flex flex-col gap-2">
              <div className="font-extrabold text-32">Login to lorem ipsum</div>
              <span className=" text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </span>
            </div>
            <LoginForm />
          </div>
        </div>
        <InfoBlock />
      </div>
    </Container>
  )
}

export default MyLoginPage
