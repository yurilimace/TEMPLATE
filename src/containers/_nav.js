import React from 'react'
import CIcon from '@coreui/icons-react'
import {FaRegSquare} from 'react-icons/fa'

const _nav =  [


  {
    _tag: 'CSidebarNavItem',
    icon: <FaRegSquare size={25} className="mr-2" />,
    name: 'basePage',
    to: '/basepage',

  },

  {
    _tag: 'CSidebarNavDropdown',
    name: 'MenuWithSubMenu',
    route: '/base',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'BasePage',
        to: '/basepage',
      },

    ],
  },

]

export default _nav
