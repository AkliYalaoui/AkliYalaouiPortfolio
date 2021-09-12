import React from 'react'

const NavLi = ({children,id}) => {
  return (
    <li>
    <a className="flex space-x-2 items-center p-2 hover:bg-gray-700" href={id}>
      {children}
    </a>
  </li>
  )
}

export default NavLi
