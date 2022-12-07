import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import MobileContacts from './MobileContacts'

const MobileMenu = (props) => {
  let [isOpened, setIsOpened] = useState(false)
  
  const handleSubMenu = (event) => {
    event.currentTarget.classList.toggle('opened')
  }
  
  return (
    <div className="mobile-main-nav-elements">
      <div className="mobile-burger" onClick={ () => setIsOpened(!isOpened) }>
        <img src={ (isOpened) ? "./src/assets/x-close.svg" : "./src/assets/burger.svg" } alt="" />
      </div>
      <div 
        className="mobile-nav-items" 
        style={{ left: !isOpened * 100 + 'vw' }} 
      >
        {
          props.items.map((value, index) => (
          <div key={ index }>
            <div
              className={ `menu-element ${ (value.children.length > 0 && "drop") }` } 
              onClick={ handleSubMenu }
            >
              <NavLink 
                className="dropdown-item" 
                to={ value.href }
              >
                { value.item }
              </NavLink>
            </div>
            {
              value.children.length > 0 && 
                <div className="dropdown-children-items">
                  {
                    value.children.map((value, index) => (
                      <div key={ index }>
                        <div
                          className={ `menu-element ${ (value.children.length > 0 && "drop") }` }
                          onClick={ handleSubMenu } 
                        >
                          <NavLink 
                            className="dropdown-item"
                            key={ index } 
                            to={ value.href }
                          >
                            { value.item }
                          </NavLink>
                        </div>
                        {
                          value.children.length > 0 && 
                          <div className="dropdown-children-items">
                            {
                              value.children.map((value, index) => (
                                <div key={ index }>
                                  <div
                                    className={ `menu-element ${ (value.children.length > 0 && "drop") }` } 
                                  >
                                    <NavLink 
                                      className="dropdown-item"
                                      key={ index } 
                                      to={ value.href }
                                    >
                                      { value.item }
                                    </NavLink>
                                  </div>
                                </div>
                              ))
                            }
                          </div>
                        }
                      </div>
                    ))
                  }
              </div>
            }
          </div>
          ))
        }
        <div className="white-space"></div>
        <MobileContacts margin={ -!isOpened * 100 + 'vw' } />
      </div>
    </div>
  )
}

export default MobileMenu