
import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <Nav>
<div className='brand'>
    <img src={logo} alt='logo'/>

</div>
<div className='toggle'>

</div>
<div className="links">
<ul>
    <li >
        <a className='mr-2' href="#">Home</a>
        <a className='mr-2' href="#">Marketplace</a>
        <a  className='mr-2' href="#">Sellers</a>
        <a  className='mr-2'href="#">Create</a>
    </li>
</ul>

</div>

<button className="text-white text-base cursor-pointer border-white border rounded-3xl hover:bg-gray-200  text-center py-2 px-4 bg-transparent ">contact</button>
    </Nav>
  )
}
export default Navbar
const Nav = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
margin: 0 2rem;
.toggle {
  display: none;
}
.links {
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
  padding: 2.5rem 8rem;
  ul {
    display: flex;
    list-style-type: none;
    gap: 3rem;
    li {
      a {
        color: #002000;
        text-decoration: none;
        transition: 0.4s ease-in-out;
        &:hover {
          color: #2d69fd;
        }
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 1080px) {
  position: relative;
  padding: 1rem 2rem;
  z-index: 999;
  margin: 0;
  button {
    display: none;
  }
  .account-info {
    display: none;
  }
  .brand {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .toggle {
    padding-right: 1rem;
    display: block;
    z-index: 51;
    svg {
      color: #2d69fd;
    }
  }
  .show {
    opacity: 1 !important;
    visibility: visible !important;
  }
  .links {
    z-index: 50;
    position: absolute;
    overflow-x: hidden;
    top: 0;
    right: 0;
    width: ${({ state }) => (state ? "60%" : "0%")};
    height: 100vh;
    background-color: white;
    opacity: 0;
    visibility: hidden;
    transition: 0.7s ease-in-out;
    clip-path: none;
    ul {
      flex-direction: column;
      text-align: center;
      height: 100%;
      justify-content: center;
      li {
        a {
          color: #2d69fd;
        }
      }
    }
  }
}


`
