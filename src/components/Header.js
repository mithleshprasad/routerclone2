import React from "react";
import "./header.css";

import rout from "./rout.png";
import { Link } from "react-router-dom";

const Header = ({ darkMode, toggleDarkMode }) => {
  const headerClass = darkMode ? "dark-header" : "light-header";
  const textClass = darkMode ? "dark-text" : "light-text";

  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${headerClass}`}>
      <div className="container">
        <Link className="navbar-brand me-2">
          <img
            src={rout}
            height="16"
            alt="react router Logo"
            loading="lazy"
            style={{ marginTop: "-1px" }}
          />
        </Link>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarButtonsExample"
          aria-controls="navbarButtonsExample"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <h3>
                <a className={`nav-link ${textClass}`} href="#">
                  <strong>React Router</strong>
                </a>
              </h3>
            </li>
            <span
              onClick={toggleDarkMode}
              className="  bg-light p-2  rounded-circle"
            >
              <i className="text-warning fas fa-sun"></i>
            </span>
          </ul>
          <div className="d-flex align-items-center">
            <a
              className="btn px-3 rounded-circle"
              href="https://github.com/mdbootstrap/mdb-ui-kit"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              className="btn px-3 mx-2 rounded-circle"
              href="https://github.com/mdbootstrap/mdb-ui-kit"
              role="button"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a className={`nav-link ${textClass}`} href="#">
              <strong>Made By Remix</strong>
            </a>
            <i
              className={`text-warning mx-2 fas fa-arrow-up-right-from-square`}
            ></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

// import React from 'react';
// import './header.css';
// import rout from './rout.png';
// import { Link } from 'react-router-dom';

// const Header = ({ darkMode, toggleDarkMode }) => {
//   const headerClass = darkMode ? 'dark-header' : 'light-header';
//   const textClass = darkMode ? 'dark-text' : 'light-text';
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light {`navbar navbar-${darkMode ? 'dark' : 'light'} bg-${darkMode ? 'dark' : 'light'}`}"  >

//       <div className="container">

//         <Link className="navbar-brand me-2" to="https://mdbgo.com/">
//           <img
//             src={rout}
//             height="16"
//             alt="MDB Logo"
//             loading="lazy"
//             // style="margin-top: -1px;"
//             style={{marginTop:'-1px'}}
//           />
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-mdb-toggle="collapse"
//           data-mdb-target="#navbarButtonsExample"
//           aria-controls="navbarButtonsExample"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <i className="fas fa-bars"></i>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarButtonsExample">

//           <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <h3>
//               <a className="nav-link" href="#"><strong>React Router</strong></a>

//               </h3>
//             </li>

//             <span onClick={toggleDarkMode} className=" btn  px-3 mx-2 rounded-circle">
//             <i className="text-warning fas fa-sun"></i>
//           </span>
//           </ul>

//           <div className="d-flex align-items-center">
//             {/* <Link to="/form" type="button" className="btn btn-link px-3 me-2">
//               Login
//             </Link>
//             <button type="button" className="btn btn-primary me-3">
//               Sign up for free
//             </button> */}
//             <a
//               className="btn  px-3 rounded-circle"
//               href="https://github.com/mdbootstrap/mdb-ui-kit"
//               role="button"
//               ><i className="fab fa-github"></i
//             ></a>
//             <a
//               className="btn  px-3 mx-2 rounded-circle"
//               href="https://github.com/mdbootstrap/mdb-ui-kit"
//               role="button"
//               ><i className="fab fa-youtube"></i
//             ></a>
//             <a className="nav-link text-warning" href="#"><strong>Made By Remix</strong></a>
//             <i className="text-warning mx-2 fas fa-arrow-up-right-from-square"></i>
//           </div>
//         </div>
//       </div>

//     </nav>
//   );
// };

// export default Header;
