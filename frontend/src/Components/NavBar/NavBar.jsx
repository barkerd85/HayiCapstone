import "bootswatch/dist/journal/bootstrap.min.css";
import { BsInstagram } from "react-icons/bs";


const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-sm fixed-top navbar-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          Photograph 
        </a> 
        <a class="navbar-brand" href="#">
          Videography
        </a>
        <a class="navbar-brand" href="#">
          Calender
        </a>
        <a class="navbar-brand" href="#">
          About me
        </a>
        <a class="navbar-brand" href="#">
          Login
        </a>
        <a class="navbar-brand" href="#">
          Register
        </a>
        <a href="https://www.instagram.com/ariel.l__/">
            {<BsInstagram className="icon" />}
          </a>
        <div class="collapse navbar-collapse" id="navbar1">
          <ul class="navbar-nav"></ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

        
        