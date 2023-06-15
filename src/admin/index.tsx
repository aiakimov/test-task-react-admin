import axios from 'axios'
import {
  Admin,
  Resource,
  ListGuesser,
  EditGuesser,
  ShowGuesser,
  AuthProvider,
  CustomRoutes,
  Authenticated,
  AdminRouter,
} from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'
import { Route } from 'react-router-dom'
import MyLoginPage from '../pages/loginPage'
import { authProvider } from '../authProvider'
// import authProvider from '../authProvider'

interface IParams {
  email: string
  password: string
}

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

// const authProvider: AuthProvider = {
//   // send username and password to the auth server and get back credentials
//   login: ({ email, password }: IParams) => {
//     console.log(email, password)
//     return Promise.resolve()
//   },
//   // when the dataProvider returns an error, check if this is an authentication error
//   checkError: (error) => Promise.resolve(),
//   // when the user navigates, make sure that their credentials are still valid
//   checkAuth: (params) => Promise.resolve(),
//   // remove local credentials and notify the auth server that the user logged out
//   logout: () => Promise.resolve(),
//   // get the user's profile
//   getIdentity: () =>
//     Promise.resolve({
//       id: 'fdfdfdfdfdf',
//       fullName: 'test@nyblecraft.com',
//       avatar: 'sdsd',
//       ['sdsd']: 'sdsds',
//     }),
//   // get the user permissions (optional)
//   getPermissions: () => Promise.resolve(),
// }

const MyAdmin = () => (
  <Admin
    dataProvider={dataProvider}
    authProvider={authProvider}
    loginPage={MyLoginPage}
    requireAuth
  >
    <Resource
      name="posts"
      list={ListGuesser}
    />
    <Resource
      name="comments"
      list={ListGuesser}
    />
  </Admin>
)

export default MyAdmin
