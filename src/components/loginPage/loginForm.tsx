import { useLogin, useNotify } from 'react-admin'
import PrimaryButton from '../primaryButton'
import { useState } from 'react'
import EyeOpenIcon from '../../icons/eyeOpenIcon'

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
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input
          placeholder="Enter your email"
          className="rounded-lg border border-lightGray px-4 py-3.5 text-14 text-text bg-white"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Password</label>
        <div className="relative w-full">
          <input
            className="rounded-lg border border-lightGray px-4 py-3.5 text-14 text-text bg-white w-full"
            name="password"
            type={isViewPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="text-bgGray loginform-eye w-max flex items-center justify-center cursor-pointer active:text-textGray transition-all"
            onMouseDown={() => setIsViewPassword(true)}
            onMouseUp={() => setIsViewPassword(false)}
          >
            <EyeOpenIcon />
          </div>
        </div>
      </div>
      <PrimaryButton className="mt-27">Login</PrimaryButton>
    </form>
  )
}

export default LoginForm
