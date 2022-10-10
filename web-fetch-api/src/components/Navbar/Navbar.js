import "./NavbarElements.js"
import React from 'react'
import { Nav, NavbarContainer, NavLogo, NavLinks, NavbarItem, NavbarMenu, MobileIcon, NavBtn, NavBtnLink } from "./NavbarElements"
import {FaBars} from 'react-icons/fa'
/*
function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }
*/
const Navbar = ({toggle}) => {
  return (
    <>
    <Nav>
        <NavbarContainer>
            <NavLogo to='/'>FENKO</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavbarMenu>
                    <NavbarItem>
                        <NavLinks to='/about'>About</NavLinks>
                    </NavbarItem>
                    <NavbarItem>
                        <NavLinks to='/characters'>Characters</NavLinks>
                    </NavbarItem>
                    <NavbarItem>
                        <NavLinks to='/help'>Help</NavLinks>
                    </NavbarItem>
                    <NavbarItem>
                        <NavLinks to='/signup'>Sign Up</NavLinks>
                    </NavbarItem>
                </NavbarMenu>
                <NavBtn>
                  <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn>
        </NavbarContainer>
    </Nav>
    </>
  )
}


export default Navbar