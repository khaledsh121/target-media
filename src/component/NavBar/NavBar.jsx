import "./NavBar.css"
import logo from "../images/logo.png"


const NavBar =() =>{
    return(
    <div className="nav-container">
      <button className="btn" >تواصل معنا</button>
      <div className="right-container">
      <div className="catagory-container">
        <div>باقاتنا</div>
        <div>صناع الابداع</div>
        <div>من خدماتنا</div>
        <div className="main">الرئيسية</div>
      </div>
      <img alt="logo" src={logo} className="logo"/>
      </div>
 
    </div>
    )
}

export default NavBar;