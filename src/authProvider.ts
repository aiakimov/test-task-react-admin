import axios from 'axios'
import decodeJwt from 'jwt-decode'
import { AuthProvider } from 'react-admin'

interface IParams {
  email: string
  password: string
}
export const authProvider: AuthProvider = {
  login: ({ email, password }: IParams) => {
    const request = {
      url: 'http://3.65.149.62/test-api/auth/login',
      params: {
        email: email,
        password: password,
      },
    }
    return axios
      .post(request.url, request.params)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText)
        }
        console.log(response)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        return JSON.stringify(response.data.accessToken)
      })
      .then((token) => {
        localStorage.setItem('token', token)
      })
  },
  checkError: (error: Error) => {
    throw new Error('login error: ' + error.message)
  },
  checkAuth: () => {
    return localStorage.getItem('token') ? Promise.resolve() : Promise.reject()
  },
  logout: () => {
    // const token = JSON.parse(localStorage.getItem('token'))

    // const request = {
    //   url: 'http://3.65.149.62/test-api/auth/logout',
    //   params: {
    //     token,
    //   },
    // }

    // return axios.post(request.url, request.params).then((response) => {
    //   if (response.status < 200 || response.status >= 300) {
    //     throw new Error(response.data.message)
    //   }

    //   localStorage.removeItem('token')
    //   localStorage.removeItem('user')
    //   console.log(response)
    // })

    localStorage.removeItem('token')
    localStorage.removeItem('user')
    return Promise.resolve()
  },
  getIdentity: () => {
    const localStorageUser = localStorage.getItem('user')
    const user = localStorageUser && JSON.parse(localStorageUser)
    console.log({ user })
    return user
      ? Promise.resolve({ id: user.id, fullName: user.email })
      : Promise.reject()
  },
  getPermissions: () => {
    return Promise.resolve()
  },
}
