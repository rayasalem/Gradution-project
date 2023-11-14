import React from 'react'
import AppBarSection from './AppBarSection'
import DrawerSection from './DrawerSection'

type Props = {}

const Nav = (props: Props) => {
  return (
    <div>
        <AppBarSection/>
        <DrawerSection/>
    </div>
  )
}

export default Nav