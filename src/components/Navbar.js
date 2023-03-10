import React from 'react'
import { Link } from 'react-router-dom'
import { LogoContainer, NavDiv, NavLinkContainer, NavLinkItem } from '../css/CustomCss'

const Navbar = ({isSideBarOpen, setSidebar}) => {

  return (
    <>
    <NavDiv>
        {<img src='download.png' onClick={()=>setSidebar(!isSideBarOpen)} height="30vh" width="30vh"/>}
        <LogoContainer>
           <div>Health Management & Information System</div>
        </LogoContainer>
        <NavLinkContainer>
          <NavLinkItem><Link to="/" >Home</Link></NavLinkItem>
          <NavLinkItem><Link to="/about" >About</Link></NavLinkItem>
          <NavLinkItem><Link to="/department" >Department</Link></NavLinkItem>
          <NavLinkItem>Doctors</NavLinkItem>
          <NavLinkItem>Contact</NavLinkItem>
        </NavLinkContainer>
    </NavDiv>
    </>
  )
}

export default Navbar