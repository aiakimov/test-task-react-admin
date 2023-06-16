import jsonServerProvider from 'ra-data-json-server'
import { Admin, ListGuesser, Resource } from 'react-admin'
import { authProvider } from '../authProvider'
import { MyLayout } from '../layout/layout'
import MyLoginPage from '../pages/loginPage'

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com')

const theme = {
  palette: {
    background: {
      default: 'white',
    },
  },
}
const MyAdmin = () => (
  <Admin
    theme={theme}
    layout={MyLayout}
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
