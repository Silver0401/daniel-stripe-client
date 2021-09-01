import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/logo.svg";
import { Context } from "../data/context";

const NavBar: React.FC = () => {
  const { contextData } = useContext(Context);

  return (
    <nav
      className="GlobalNav"
      style={
        contextData.currentPage === "Home"
          ? {
              backgroundColor: "transparent",
              transition: "background-color 250ms",
            }
          : contextData.currentPage === "Contact"
          ? { backgroundColor: "#1b1b1d", transition: "background-color 250ms" }
          : contextData.currentPage === "About"
          ? { backgroundColor: "#8d8d8e", transition: "background-color 250ms" }
          : {
              backgroundColor: "transparent",
              transition: "background-color 250ms",
            }
      }
    >
      <div className="logo">
        <img src={logo} alt="DSlogo" />
      </div>
      <ul>
        <Link className="Home" to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 9.185l7 6.514v6.301h-14v-6.301l7-6.514zm0-2.732l-9 8.375v9.172h18v-9.172l-9-8.375zm2 14.547h-4v-6h4v6zm10-8.852l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148z" />
          </svg>
        </Link>
        <Link className="About" to="/About">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M3 24h19v-23h-1v22h-18v1zm17-24h-18v22h18v-22zm-3 17h-12v1h12v-1zm0-3h-12v1h12v-1zm0-3h-12v1h12v-1zm-7.348-3.863l.948.3c-.145.529-.387.922-.725 1.178-.338.257-.767.385-1.287.385-.643 0-1.171-.22-1.585-.659-.414-.439-.621-1.04-.621-1.802 0-.806.208-1.432.624-1.878.416-.446.963-.669 1.642-.669.592 0 1.073.175 1.443.525.221.207.386.505.496.892l-.968.231c-.057-.251-.177-.449-.358-.594-.182-.146-.403-.218-.663-.218-.359 0-.65.129-.874.386-.223.258-.335.675-.335 1.252 0 .613.11 1.049.331 1.308.22.26.506.39.858.39.26 0 .484-.082.671-.248.187-.165.322-.425.403-.779zm3.023 1.78l-1.731-4.842h1.06l1.226 3.584 1.186-3.584h1.037l-1.734 4.842h-1.044z" />
          </svg>
        </Link>
        <Link className="Contact" to="/Contact">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v22h-24v-22h3v1c0 1.103.897 2 2 2s2-.897 2-2v-1h10v1c0 1.103.897 2 2 2s2-.897 2-2v-1h3zm-2 6h-20v14h20v-14zm-2-7c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-14 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2z" />
          </svg>
        </Link>
      </ul>
    </nav>
  );
};

export default NavBar;
