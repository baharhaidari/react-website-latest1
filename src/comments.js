/* .buttons-container {
  color: var(--text-color);
}

.button-container button {
  background: transparent;
  padding: 0.7rem 4rem;
  border: none;
  border-bottom: 2.5px solid var(--tabs-color);
  position: relative;
  height: 3.7rem;
  width: 25rem;
  box-shadow: 0px 15px 10px -15px var(--black-color);
  margin-right: 2px;
  font-size: 1.55rem;
}

.tabs-container .button-container button:hover {
  cursor: pointer;
}

.active-tab {
  color: var(--neon-color);

  border-bottom: 1.5px solid var(--neon-color) !important;
}

.unactive {
  color: var(--text-color);
}

@media (max-width: 576px) {
  .button-container button {
    width: 10rem;
    height: 5rem;
    padding: 3px 0px;
    text-align: center;
  }
} */

// component
// import React, { useState } from "react";
// import AboutMe from "./AboutMe";
// import Timeline from "./Timeline";
// import Certificates from "./Certificate";
// import "./Tabs.css";
// import { useTranslation } from "react-i18next";

// const Tabs = () => {
//   const [activeTab, setActiveTab] = useState("aboutMe");

//   const handleTabChange = (tab) => {
//     setActiveTab(tab);
//   };

//   const { t } = useTranslation();

//   return (
//     <div className="tabs-container">
//       <div className="button-container">
//         <button
//           onClick={() => handleTabChange("aboutMe")}
//           className={`tab ${
//             activeTab === "aboutMe" ? "active-tab" : "unactive"
//           }`}
//         >
//           {t("ABOUT.fisrt-tab")}
//         </button>

//         <button
//           onClick={() => handleTabChange("timeline")}
//           className={`tab ${
//             activeTab === "timeline" ? "active-tab" : "unactive"
//           }`}
//         >
//           {t("ABOUT.second-tab")}
//         </button>

//         <button
//           onClick={() => handleTabChange("certificate")}
//           className={`tab ${
//             activeTab === "certificate" ? "active-tab" : "unactive"
//           }`}
//         >
//           {t("ABOUT.third-tab")}
//         </button>
//       </div>

//       <div className="content-container">
//         {activeTab === "aboutMe" && <AboutMe />}
//         {activeTab === "timeline" && <Timeline />}
//         {activeTab === "certificate" && <Certificates />}
//       </div>
//     </div>
//   );
// };

// export default Tabs;

// timeline

// import { useState } from "react";
// import { useTranslation } from "react-i18next";
// import "./Timeline.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

// const Timeline = () => {
//   const { t } = useTranslation();

//   const timelineData = t("ABOUT.timeline", { returnObjects: true });
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleModalOpen = (item) => {
//     setSelectedItem(item);
//   };

//   const handleModalClose = () => {
//     setSelectedItem(null);
//   };

//   const getDate = (item) => {
//     const formattedDate = `${item.startDate} - ${item.endDate}`;
//     return formattedDate;
//   };

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredData = timelineData.filter((item) =>
//     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <div className="search-container">
//         <label>{t("ABOUT.SEARCH.label")}: </label>
//         <input
//           type="text"
//           placeholder={t("ABOUT.SEARCH.placeholder")}
//           value={searchTerm}
//           onChange={handleSearch}
//         />
//       </div>

//       <div className="timeline">
//         {filteredData.map((item, index) => (
//           <div
//             className={`container ${index % 2 === 0 ? "left" : "right"} ${
//               index % 2 === 0 ? "animate-left" : "animate-right"
//             }`}
//             key={index}
//           >
//             <div
//               className="timeline-content"
//               onClick={() => handleModalOpen(item)}
//             >
//               <h2>
//                 <span>{getDate(item)}</span>
//               </h2>
//               <p>{item.title}</p>
//             </div>
//           </div>
//         ))}

//         {selectedItem && (
//           <div className="modal" onClick={handleModalClose}>
//             <div className="modal-content">
//               <span className="close" onClick={handleModalClose}>
//                 &times;
//               </span>
//               <h2>
//                 <span>{getDate(selectedItem)}</span>
//               </h2>
//               <p className="modal-title">{selectedItem.title}</p>
//               <p className="modal-desc">{selectedItem.desc}</p>
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Timeline;

// navbar

// import { useState, useEffect } from "react";
// import "./Navbar.css";
// import { useTranslation } from "react-i18next";
// import LanguageSelector from "./languageSelector";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState("home");

//   const handleLinkClick = (linkName) => {
//     setActiveLink(linkName);
//     setMenuOpen(false);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll("section");
//       const scrollPosition = window.scrollY;

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;

//         if (
//           scrollPosition >= sectionTop - sectionHeight / 3 &&
//           scrollPosition < sectionTop + sectionHeight
//         ) {
//           setActiveLink(section.getAttribute("id"));
//         }
//       });

//       if (window.innerWidth <= 786) {
//         setMenuOpen(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const { t } = useTranslation();

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <>
//       <nav className={`navbar ${menuOpen ? "open" : ""}`}>
//         <a href="#home" className="logo">
//           Bahar.
//         </a>

//         <div className={`menu ${menuOpen ? "open" : ""}`}>
//           <ul id="navbar">
//             <li>
//               <a
//                 href="#home"
//                 className={activeLink === "home" ? "active" : ""}
//                 onClick={() => {
//                   handleLinkClick("home");
//                 }}
//               >
//                 {t("NAVBAR.home")}
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#about"
//                 className={activeLink === "about" ? "active" : ""}
//                 onClick={() => {
//                   handleLinkClick("about");
//                 }}
//               >
//                 {t("NAVBAR.about")}
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#skills"
//                 className={activeLink === "skills" ? "active" : ""}
//                 onClick={() => {
//                   handleLinkClick("skills");
//                 }}
//               >
//                 {t("NAVBAR.skills")}
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#projects"
//                 className={activeLink === "projects" ? "active" : ""}
//                 onClick={() => {
//                   handleLinkClick("projects");
//                 }}
//               >
//                 {t("NAVBAR.projects")}
//               </a>
//             </li>

//             <li>
//               <a
//                 href="#contact"
//                 className={activeLink === "contact" ? "active" : ""}
//                 onClick={() => {
//                   handleLinkClick("contact");
//                 }}
//               >
//                 {t("NAVBAR.contact")}
//               </a>
//             </li>
//           </ul>
//         </div>

//         <div className="lang-menu">
//           <LanguageSelector></LanguageSelector>
//           <span className="menu-toggle" onClick={toggleMenu}>
//             <i className="bx bx-menu-alt-right menu-icon"></i>
//           </span>
//         </div>
//       </nav>
//     </>
//   );
// }
