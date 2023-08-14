import React from 'react'
import { MenuList } from '../helper/MenuList'
import MenuItem from '../components/MenuItem'
import '../styles/Menu.css'

function Menu() {
  return (
    <div className="menu">
        <h1 className='menuTitle'>Our Menu</h1>
        <div className="menuList">
            {MenuList.map((menus, key)=> {
                return (
                    <MenuItem    
                        image={menus.image}
                        price={menus.price}
                        name={menus.name}
                        key={key}
                    />

                )
            })}
        </div>
    </div>
  )
}

export default Menu