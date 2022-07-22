import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className="top">
      <div className="topLeft">
      <a href="https://www.facebook.com/profile.php?id=100007444515736" target="blank">
          <i className="sidebarIcon fab fa-facebook-square"></i>
         </a> 
         <a href="https://github.com/rajatks1902" target="blank">
         <i class="sidebarIcon fa-brands fa-github"></i>
          </a> 
          <a href="https://www.linkedin.com/in/rajat-kumar-singh-a816791a5/" target="blank">
          <i class="sidebarIcon fa-brands fa-linkedin"></i>
          </a> 
          <a href="https://www.instagram.com/rajat.singh.07/" target="blank">
          <i className="sidebarIcon fab fa-instagram-square"></i>
          </a> 
          <a href="https://twitter.com/Rajat_s_07" target="blank">
          <i class="sidebarIcon fa-brands fa-twitter-square"></i>
          </a> 
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              WRITE
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}