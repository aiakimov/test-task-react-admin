import { useLogin, useNotify } from 'react-admin'
import PrimaryButton from '../primaryButton'
import { useState } from 'react'
import EyeOpenIcon from '../../icons/eyeOpenIcon'
import Input from '../input'

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isViewPassword, setIsViewPassword] = useState(false)
  const login = useLogin()
  const notify = useNotify()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // will call authProvider.login({ email, password })
    login({ email, password }).catch(() => notify('Invalid email or password'))
  }

  return (
    <form
      className="flex flex-col gap-6 mt-12"
      onSubmit={handleSubmit}
    >
      <Input
        name="email"
        label="Email"
        placeholder="Enter your email"
        type="email"
        value={email}
        setValue={setEmail}
        className="px-4 py-3.5 text-14-20"
      />
      <Input
        name="password"
        label="Password"
        placeholder="Enter your password"
        type={isViewPassword ? 'text' : 'password'}
        value={password}
        setValue={setPassword}
        className="px-4 py-3.5 text-14-20"
      >
        <div
          className="text-bgGray loginform-eye w-max flex items-center justify-center
                    cursor-pointer active:text-textGray transition-all"
          onMouseDown={() => setIsViewPassword(true)}
          onMouseUp={() => setIsViewPassword(false)}
        >
          <EyeOpenIcon />
        </div>
      </Input>
      <PrimaryButton className="mt-27">Login</PrimaryButton>
    </form>
  )
}

export default LoginForm
