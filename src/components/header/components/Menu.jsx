import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import MobileMenu from './MobileMenu'

const Dropdown = (props) => {
  var [ parentId, setParentId ] = useState(0)
  let hasChildren = false

  for (let menuChild of props.items) { 
    if (menuChild.children.length > 0) {
      hasChildren = true
      break;
    }
  }

  return (
    <div className="dropdown" style={{
      height: props.items.length * 62 + 72 + 'px'
    }}>
      <div className={ hasChildren ? "dropdown-main round-edge" : "dropdown-main" }>
        {
          props.items.map((value, index) => (
            <NavLink 
              key={ index } 
              to={ value['href'] }
              className={ (value['children'].length > 0) ? "dropdown-item show-children" : "dropdown-item" }
              onMouseOver={ (value['children'].length > 0) ? () => setParentId(index) : () => (1) }
            >
              { value['item'] }
            </NavLink>
          ))
        }
      </div>
      {
        hasChildren &&
          <div className="dropdown-secondary">
            {
              props.items[parentId]['children'].map((value, index) => (
                <NavLink 
                  key={ index } 
                  to={ value['href'] }
                  className="dropdown-item"
                >
                  { value['item'] }
                </NavLink>
              ))
            }
          </div>
      }
    </div>
  )
}

const Menu = (props) => (
  <>
    <MobileMenu items={ props.menu } />
    <div className="main-nav-elements">
      {
        props.menu.map((value, index) => (
          <div 
            className={ `menu-element ${ (value['children'].length > 0 && "drop") }` } 
            key={ index }
          >
            <NavLink to={value['href']}>{ value['item'] }</NavLink>
            {
              value['children'].length > 0 && 
                <Dropdown items={ value['children'] } />
            }
          </div>
        ))
      }
    </div>
  </>
)

export default Menu