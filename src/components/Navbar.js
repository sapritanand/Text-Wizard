import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//type impt for proptypes
//type rfc emmet
export default function Navbar(props) {
  return (
    <nav className="navbar nv navbar-expand-lg navbar-dark" >
  <Link style={{fontWeight:"600"}} className={`navbar-brand text-${props.mode==="Light"?"dark":"light"}`} to={"/Text-Wizard"}>{props.title}</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" onClick={collapse}></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent" >
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className={`nav-link text-${props.mode==="Light"?"dark":"light"}`} to={"/Text-Wizard"}>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item active">
        <Link className={`nav-link text-${props.mode==="Light"?"dark":"light"}`} to={"/about"}>{props.aboutText} <span className="sr-only">(current)</span></Link>
      </li>
    </ul>
    <div className="custom-control custom-switch">
    <input type="checkbox" onClick={props.toggleMode} className="custom-control-input" id="customSwitch1"/>
    <label className={`custom-control-label text-${props.mode==="Light"?"dark":"light"}`} htmlFor="customSwitch1" style={{paddingTop:2}}>Enable Dark Mode</label>
    </div>
    {/* <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
  </div>
</nav>
  )
}
//!Applying checks for the type of the props. Type pts, applying isRequired for giving an error if not specified a title
Navbar.propTypes = {
                    title:PropTypes.string.isRequired,
                    aboutText:PropTypes.string
}

//!Default value if not passed in the app.js
Navbar.defaultProps = {
      title:"Enter text here",
      aboutText:"Enter about here"
}

function collapse(){
  const navbarSupportedContent=document.querySelector("#navbarSupportedContent");
  navbarSupportedContent.classList.toggle("show");
  // alert(navbarSupportedContent)
}