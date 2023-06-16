import { AppBar, Layout, Logout, UserMenu } from 'react-admin'

import { MyMenu } from './menu'
import MyAppBar from './appBar'

export const MyLayout = (props: any) => (
  //   <Layout
  //     {...props}
  //     menu={MyMenu}
  //     appBar={MyAppBar}
  //   />
  <div className="grid grid-flow-col grid-cols-max-minmax  h-screen bg-transparent">
    <MyMenu />
    <div className="flex flex-col">
      <div>
        <UserMenu>
          <Logout />
        </UserMenu>
      </div>
    </div>
  </div>
)
