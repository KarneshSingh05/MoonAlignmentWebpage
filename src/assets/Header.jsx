import { useState } from "react";

export const Header = () => {
  const [btnLogin, setbtn] = useState("Login");
  return (
    <div id="navBar">
      <div className="logoImg">
        <img
          className="logo"
          src=" https://static.vecteezy.com/system/resources/previews/007/696/819/non_2x/moon-logo-icon-design-template-vector.jpg  "
        ></img>
      </div>
      <div className="navLink">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <button
            onClick={() => {
              btnLogin === "Login" ? setbtn("Logout") : setbtn("Login");
            }}
          >
            {btnLogin}
          </button>
        </ul>
      </div>
    </div>
  );
};
