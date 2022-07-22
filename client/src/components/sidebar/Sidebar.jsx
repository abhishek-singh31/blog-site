import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img className="image1"
          src="./image/rajat.jpeg"
          alt=""
        />
        <p>
          Hello There, MySelf <a  className="relink" href="http://cricbuzz.com" target="blank">Rajat Singh</a>
          <br />
           Currently i am pursuing B-Tech with Information-Teachnology from JIIT Noida
        </p>
      </div>
      {/* <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div> */}
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
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
      </div>
    </div>
  );
}